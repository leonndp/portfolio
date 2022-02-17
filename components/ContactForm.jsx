import { PaperAirplaneIcon } from "@heroicons/react/solid";

function ContactForm() {
  return (
    <form
      name="contact"
      action="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      className="space-y-8"
    >
      <input name="name" type="text" placeholder="Full Name" />
      <input name="email" type="email" placeholder="E-Mail" />
      <input name="subject" type="text" placeholder="Subject" />
      <textarea name="message" rows="5" placeholder="Your Message" />
      <div data-netlify-recaptcha="true"></div>
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
