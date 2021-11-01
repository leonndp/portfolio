import About from "./AboutCard"
import Experience from "./Experience"
import Skills from "./Skills"

function Content() {
    return (
        <div className="absolute w-full top-36 md:top-52 lg:top-1/4">
            <div className="container mx-auto px-5 sm:px-10 xl:px-40 2xl:px-72">
                <About />
                <Skills />
                <Experience />
            </div>
        </div>
    )
}

export default Content
