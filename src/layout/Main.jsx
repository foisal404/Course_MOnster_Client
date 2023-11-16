import { Outlet } from "react-router-dom";
import Navhead from "../components/Navhead";


const Main = () => {
    return (
        <>
            <Navhead/>
            <section>
            <Outlet/>
            </section>
        </>
    );
};

export default Main;