import CourseCatalog from "../components/CourseCatalog";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/featuredsection/FeaturedSection";
import Footer from "./Footer";


const Home = () => {
    return (
        <>
            {/* <h2 className="text-center">Hello monster</h2> */}
            <HeroSection/>
            <CourseCatalog/>
            <FeaturedSection/>
            <Footer/>
        </>
    );
};

export default Home;