import Image from 'next/image'
import Link from 'next/link'
import { MailIcon, DocumentDownloadIcon } from '@heroicons/react/solid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function AboutCard() {
    return (
        <div className="bg-gray-800 w-full shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-6 lg:p-12">
                <div className="relative col-span-1 h-96 lg:h-auto">
                    {/* <Image src='/me.jpg' layout="responsive" width="1072" height="1440" /> */}
                    <Image src='/me.jpg' layout="fill" objectFit="cover" />
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <h1>I'm <strong>Leon N. Dela Pena</strong></h1>
                    <h3>Full-Stack Web Developer</h3>
                    <hr className="my-5 text-gray-700" />
                    <table className="leading-6">
                        <tr>
                            <td className="font-bold uppercase pr-16">Age</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td className="font-bold uppercase pr-16">Based in</td>
                            <td>Chicago, Illinois</td>
                        </tr>
                        <tr>
                            <td className="font-bold uppercase pr-16">E-mail</td>
                            <td>leonndp@gmail.com</td>
                        </tr>
                    </table>
                    <div className="flex space-x-6 items-center my-5">
                        <FontAwesomeIcon icon={faEnvelope} size='2x' className="text-purple-500" />
                        <FontAwesomeIcon icon={faGithub} size='2x' className="text-purple-500" />
                        <FontAwesomeIcon icon={faLinkedin} size='2x' className="text-purple-500" />
                        {/* <MailIcon className="text-blue-400 h-7" />
                        <MailIcon className="text-blue-400 h-7" /> */}
                    </div>
                    <p>I'm a full-stack web developer based in Quezon City, Philippines. I learned JavaScript back in 2017 and eventually expanded my toolkit to include its related frameworks such as Express and React. Programming is an ever-changing field and I challenge myself to learn the newest technologies; outside of web development I'm also interested in eventaully tackling the fields of Augmented Reality and Machine Learning. Below you can see a list of technologies I'm familiar with as well as projects I have accomplished.</p>
                </div>
            </div>
                <a href="https://drive.google.com/file/d/1NOeTpQu0T4bGYKeedWaOKH-Nn4Nd4pUx/view?usp=sharing" target="_blank" rel="noreferrer" className="group w-full bg-purple-500 hover:bg-purple-400 py-8 text-2xl font-bold uppercase text-shadow-xl flex items-center justify-center space-x-2 relative duration-200">
                    <DocumentDownloadIcon className="h-10" />
                    <span>Download CV</span>
                </a>
        </div>
    )
}

export default AboutCard