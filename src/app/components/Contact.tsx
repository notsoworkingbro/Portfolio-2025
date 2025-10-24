import { Mail, Linkedin, Github, Twitter, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-8 text-center bg-gray-50 dark:bg-gray-900"
    >
      <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        Contact Me
      </h3>
      <p className="max-w-2xl mx-auto mb-10 text-gray-600 dark:text-gray-300">
        I’d love to connect! Feel free to reach out for collaborations,
        professional inquiries, or networking opportunities through any of the
        platforms below.
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        {/* Email */}
        <a
          href="mailto:your-email@example.com"
          className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:bg-green-600 hover:text-white transition-all"
        >
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dale-parocha-9a2655333/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/notsoworkingbro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:bg-gray-700 hover:text-white transition-all"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
