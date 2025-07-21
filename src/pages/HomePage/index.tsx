import Blogs from "./Blogs"
import Business from "./Business"
import Hero from "./Hero"
import PersonalityTests from "./PersonalityTests"
import Testimonials from "./Testimonials"

const HomePage = () => {
    return (
        <div>
            <Hero />
            <PersonalityTests />
            <Business />
            <Testimonials />
            <Blogs />
        </div>
    )
}

export default HomePage