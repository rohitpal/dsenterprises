export default function About() {
  return (
    <div>
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold">About</h1>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600">
Incepted in the year 2020, <b>DS Enterprises</b> is a distinguished manufacturer specializing in high-quality stainless steel kitchen utensils, including tiffin boxes, glasses, spoons, plates, coffee mugs, tea cups, and more. With a commitment to durability, functionality, and style, we cater to households and businesses seeking reliable kitchenware solutions.
</p>
<p className="mt-4 max-w-3xl mx-auto text-gray-600">
  In addition to our stainless steel products, we proudly offer custom coffee mug printing services, allowing customers to personalize mugs with unique designs, logos, or messages-perfect for gifts, branding, or personal use.
      </p>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the preferred sourcing and engineering partner for industries across the globe.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Deliver world-class solutions, ensure uncompromised quality, and build long-term partnerships.
          </p>
        </div>
      </section>
    </div>
  );
}
