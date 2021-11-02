import { PaperAirplaneIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="mt-20">
      <h1 className="text-center mb-10 font-orbitron">Let's Get Started!</h1>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="col-span-1 bg-gray-800 p-8 shadow-2xl border-t-8 border-indigo-500">
          <h2 className="font-orbitron mb-10">Contact Me!</h2>
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
        </div>
        <div className="col-span-1 bg-gray-800 p-8 shadow-2xl border-t-8 border-indigo-500">
          <table className="leading-10">
            <tr cn>
              <td className="pr-8">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className="text-indigo-500"
                />
              </td>
              <td>leonndp@gmail.com</td>
            </tr>
            <tr cn>
              <td className="pr-8">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className="text-indigo-500"
                />
              </td>
              <td>https://www.github.com/leonndp</td>
            </tr>
            <tr>
              <td className="pr-8">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="text-indigo-500"
                />
              </td>
              <td>https://www.linkedin.com/in/leonndp/</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact;
