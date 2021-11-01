import Image from 'next/image'

function TimelineItem({
    side="right", 
    ImageProps={
        src: '/graphetal.jpg', 
        alt: 'Graphetal Branding and Design'
    },
    dates="2020 - Present",
    company="Graphetal Branding and Design",
    role="Lead Front-End Developer",
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}) {
    return (
        <div className={`timeline-${side}`}>
            <div className="order-1 w-5/12"></div>
            <div className="timeline-img-container">
                {/* <h1 className="mx-auto font-semibold text-lg text-white">1</h1> */}
                <Image className="rounded-full" layout="fill" objectFit="contain" {...ImageProps} />
            </div>
            <div className="timeline-card">
                <div className="text-center space-y-2 mb-5">
                    <h4 className="text-blue-500">{dates}</h4>
                    <h3 className="text-center font-bold">{company}</h3>
                    <h5 className="text-center uppercase">{role}</h5>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TimelineItem
