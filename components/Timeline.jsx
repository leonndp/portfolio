import Image from 'next/image'
import TimelineItem from './TimelineItem'

function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline-border"></div>
            {/* <div className="timeline-right">
                <div className="order-1 w-5/12"></div>
                <div className="timeline-img-container">
                    <Image className="rounded-full" src="/graphetal.jpg" layout="fill" objectFit="contain" />
                </div>
                <div className="timeline-card">
                    <div className="text-center space-y-2 mb-5">
                        <h4 className="text-blue-500">2020 - Present </h4>
                        <h3 className="text-center font-bold">Graphetal Branding and Design</h3>
                        <h5 className="text-center uppercase">Lead Front-End Developer</h5>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div> */}
            <TimelineItem />
            <TimelineItem side="left" />
        </div>
    )
}

export default Timeline
