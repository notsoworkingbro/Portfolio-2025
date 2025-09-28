export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 text-center">
      <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Feel free to reach out for collaboration or opportunities.
      </p>
      <a
        href="mailto:your-email@example.com"
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Say Hello
      </a>
    </section>
  );
}
