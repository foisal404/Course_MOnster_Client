import CourseCatalog from "../components/CourseCatalog";
import HeroSection from "../components/HeroSection";


const Home = () => {
    return (
        <>
            {/* <h2 className="text-center">Hello monster</h2> */}
            <HeroSection/>
            <CourseCatalog/>
            <div className="p-10"></div>
        </>
    );
};

export default Home;