import { DocumentDownloadIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact" className="pt-28">
      <h1 className="text-center mb-10 font-orbitron">Let's Get Started!</h1>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="col-span-1 bg-gray-800 p-8 shadow-2xl border-t-8 border-indigo-500">
          <h2 className="font-orbitron mb-10">Contact Me!</h2>
          <ContactForm />
        </div>
        <div className="col-span-1 bg-gray-800 p-8 shadow-2xl border-t-8 border-indigo-500 flex flex-col justify-between">
          <table className="leading-10">
            <tbody>
              <tr>
                <td className="pr-8">
                  <a
                    href="mailto:leonndp@gmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="lg"
                      className="text-indigo-500 hover:text-purple-300 duration-150"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="mailto:leonndp@gmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline"
                  >
                    leonndp@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-8">
                  <a
                    href="https://www.github.com/leonndp"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      className="text-indigo-500 hover:text-purple-300 duration-150"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.github.com/leonndp"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline"
                  >
                    https://www.github.com/leonndp
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-8">
                  <a
                    href="https://www.linkedin.com/in/leonndp/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="lg"
                      className="text-indigo-500 hover:text-purple-300 duration-150"
                    />
                  </a>
                </td>
                <td>
                  <a
                    href="https://www.linkedin.com/in/leonndp/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline"
                  >
                    https://www.linkedin.com/in/leonndp/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <a
            href="https://drive.google.com/file/d/1NOeTpQu0T4bGYKeedWaOKH-Nn4Nd4pUx/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 w-full bg-purple-500 hover:bg-indigo-700 py-5 text-2xl font-bold uppercase text-shadow-xl flex items-center justify-center space-x-2 relative duration-200 font-orbitron"
          >
            <DocumentDownloadIcon className="h-10" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
