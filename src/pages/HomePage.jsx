import Hero from "../components/Hero"
import OurWorks from "../components/OurWorks"

const HomePage = () => {


    return(
        <>
            <Hero title='PROTIME'  subtitle='Expert in industrial electronics maintenance.' />
            <OurWorks isHome={true} />
        </>
    )
}

export default HomePage