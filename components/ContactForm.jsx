import { PaperAirplaneIcon } from "@heroicons/react/solid";

function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      className="space-y-8"
    >
      <input className="hidden contact-field" type="text" name="bot-field" />
      <input
        className="contact-field"
        name="name"
        type="text"
        placeholder="Full Name"
      />
      <input
        className="contact-field"
        name="email"
        type="email"
        placeholder="E-Mail"
      />
      <input
        className="contact-field"
        name="subject"
        type="text"
        placeholder="Subject"
      />
      <textarea
        className="contact-field"
        name="message"
        rows="5"
        placeholder="Your Message"
      />
      <div
        className="g-recaptcha"
        data-sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
      ></div>

      <button
        type="submit"
        className="group bg-indigo-500 hover:bg-indigo-700 p-4 px-6 text-xl font-bold uppercase text-shadow-xl flex items-center justify-center space-x-4 relative duration-200 font-orbitron"
      >
        <PaperAirplaneIcon className="h-7" />
        <span>Send</span>
      </button>
    </form>
  );
}

export default ContactForm;
