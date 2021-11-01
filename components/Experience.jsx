import Image from 'next/image'
import Timeline from './Timeline'

function Portfolio() {
    return (
        <div className="mt-20">
            <h1 className="text-center mb-10 font-orbitron">Experience</h1>

            {/* Timeline */}
            
            <Timeline />
        </div>
    )
}

export default Portfolio
