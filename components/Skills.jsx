import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faDatabase, faDesktop } from '@fortawesome/free-solid-svg-icons'
import SkillIcon from './SkillIcon'

function Skills() {
    return (
        <div className="mt-20">
            <h1 className="text-center mb-10">Professional Skills</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 shadow-2xl w-full">
                    <div className="col-span-1 bg-gray-800 p-8">
                        <h2 className="text-center">
                        <FontAwesomeIcon icon={faDesktop} size='lg' className="text-purple-500 mb-3" /><br/><strong>Front-End</strong></h2>
                        <div className="grid gap-y-10 grid-cols-3 lg:grid-cols-2 mt-8">
                            <SkillIcon src="/react.svg">React</SkillIcon>
                            <SkillIcon src="/nextjs.png">Next.js</SkillIcon>
                            <SkillIcon src="/gatsby.svg">Gatsby</SkillIcon>
                            <SkillIcon src="/mui.png">Material-UI</SkillIcon>
                            <SkillIcon src="/bootstrap.svg">Bootstrap</SkillIcon>
                            <SkillIcon src="/tailwind.svg">Tailwind</SkillIcon>
                        </div>
                    </div>
                    <div className="col-span-1 bg-gray-800 p-8">
                        <h2 className="text-center">
                        <FontAwesomeIcon icon={faCogs} size='lg' className="text-purple-500 mb-3" /><br/><strong>Back-End</strong></h2>
                        <div className="grid gap-y-10 grid-cols-3 lg:grid-cols-2 mt-8">
                            <SkillIcon src="/nodejs.svg">Node/Express</SkillIcon>
                            <SkillIcon src="/graphql.svg">GraphQL</SkillIcon>
                        </div>
                    </div>
                    <div className="col-span-1 bg-gray-800 p-8">
                        <h2 className="text-center">
                        <FontAwesomeIcon icon={faDatabase} size='lg' className="text-purple-500 mb-3" /><br/><strong>Database</strong></h2>
                        <div className="grid gap-y-10 grid-cols-3 lg:grid-cols-2 mt-8">
                            <SkillIcon src="/mysql.png">MySQL</SkillIcon>
                            <SkillIcon src="/mongodb.svg">MongoDB</SkillIcon>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Skills
