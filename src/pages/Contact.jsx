import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-brand-dark mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-8">
        Have a project in mind? Let’s discuss how we can work together.
      </p>
      <ContactForm />
    </div>
  );
}
