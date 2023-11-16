import CourseCatalog from "../components/CourseCatalog";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/featuredsection/FeaturedSection";


const Home = () => {
    return (
        <>
            {/* <h2 className="text-center">Hello monster</h2> */}
            <HeroSection/>
            <CourseCatalog/>
            <FeaturedSection/>
        </>
    );
};

export default Home;