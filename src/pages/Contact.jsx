export default function Contact() {
  return (
    <div>
      <section className="bg-brand-dark text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto">We’d love to hear from you. Let’s discuss your requirements.</p>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <form className="grid gap-6 bg-white p-8 shadow rounded-lg">
          <input type="text" placeholder="Your Name" className="border p-3 rounded w-full" />
          <input type="email" placeholder="Your Email" className="border p-3 rounded w-full" />
          <textarea placeholder="Your Message" rows="5" className="border p-3 rounded w-full"></textarea>
          <button className="bg-brand-accent text-white px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
