import { useRef } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    toast.success("Thank you! Your message has been sent.");
  }

  return (
    <form ref={formRef} className="flex flex-col gap-5 text-left" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-[#0C1A14]">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-[#D9E2DC] bg-[#F3F6F4] text-[#0C1A14] text-sm focus:outline-none focus:border-[#12B76A] transition-colors"
            placeholder="Hassan Nahid"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-[#0C1A14]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-[#D9E2DC] bg-[#F3F6F4] text-[#0C1A14] text-sm focus:outline-none focus:border-[#12B76A] transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-[#0C1A14]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-[#D9E2DC] bg-[#F3F6F4] text-[#0C1A14] text-sm focus:outline-none focus:border-[#12B76A] transition-colors resize-none"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="btn w-full sm:w-auto self-start px-8 py-3.5 rounded-xl font-bold text-sm text-[#04170E] bg-[#12B76A] hover:bg-[#0fa968] transition-all shadow-sm cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
