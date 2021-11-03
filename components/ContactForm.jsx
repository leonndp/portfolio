import { PaperAirplaneIcon } from "@heroicons/react/solid";

function ContactForm() {
  return (
    <form className="space-y-8">
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="E-Mail" />
      <input type="text" placeholder="Subject" />
      <textarea rows="5" placeholder="Your Message" />
      <button className="group bg-indigo-500 hover:bg-indigo-700 p-4 px-6 text-xl font-bold uppercase text-shadow-xl flex items-center justify-center space-x-4 relative duration-200 font-orbitron">
        <PaperAirplaneIcon className="h-7" />
        <span>Send</span>
      </button>
    </form>
  );
}

export default ContactForm;
