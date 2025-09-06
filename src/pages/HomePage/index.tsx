import Blogs from "./Blogs"
import Business from "./Business"
import Hero from "./Hero"

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Business />
            <Blogs showThree={true} />
        </div>
    )
}

export default HomePage