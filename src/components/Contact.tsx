"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      console.log("EmailJS env check", {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      });
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Your enquiry has been sent. We will get back to you shortly.",
      });

      setForm({
        name: "",
        business: "",
        phone: "",
        message: "",
      });

      window.location.href = "/thank-you";
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          error?.text ||
          error?.message ||
          "Something went wrong while sending your enquiry. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="w-full py-20 px-6 bg-[#0B0F1A] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-400 mb-4">CONTACT</p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Start your business
            <span className="block bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              the right way
            </span>
          </h2>

          <p className="text-gray-400 mb-8">
            We build serious businesses. If you are ready to look professional,
            move faster, and actually attract clients, get in touch.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>hello@ominodigital.com</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Your name"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />

            <input
              type="text"
              name="business"
              value={form.business}
              placeholder="Business name"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              placeholder="Phone number"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              placeholder="Tell us what you need"
              rows={4}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-orange-400 text-black disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send enquiry"}
            </button>

            {status.message ? (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}