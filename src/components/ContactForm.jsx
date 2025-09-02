export default function ContactForm() {
  return (
    <form className="space-y-4 max-w-xl">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border rounded-lg px-4 py-2"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border rounded-lg px-4 py-2"
      />
      <textarea
        placeholder="Your Message"
        className="w-full border rounded-lg px-4 py-2 h-32"
      />
      <button
        type="submit"
        className="bg-brand-accent text-black px-6 py-3 rounded-lg font-semibold"
      >
        Send Message
      </button>
    </form>
  );
}
