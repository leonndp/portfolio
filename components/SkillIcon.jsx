import Image from 'next/image'

function SkillIcon({children, src="/react.svg"}) {
    return (
        <div className="text-center">
            <Image className="mb-3" src={src} layout="fixed" width={50} height={50} />
            <p className="text-lg">{children}</p>
        </div>
    )
}

export default SkillIcon
