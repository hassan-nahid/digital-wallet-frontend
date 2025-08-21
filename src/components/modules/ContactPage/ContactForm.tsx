import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (formRef.current) {
      formRef.current.reset()
    }
    toast.success("Submitted successfully!")
  }

  return (
    <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input id="name" name="name" type="text" required className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary bg-background" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input id="email" name="email" type="email" required className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary bg-background" placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block font-medium mb-1">Message</label>
        <textarea id="message" name="message" required rows={4} className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary bg-background" placeholder="How can we help you?" />
      </div>
      <Button type="submit" size="lg" className="font-semibold shadow">Send Message</Button>
    </form>
  )
}
