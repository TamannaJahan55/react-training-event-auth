import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import ServiceCard from "./ServiceCard";
import VocationalWork from "../VocationalWork/VocationalWork";
import Footer from "../Footer/Footer";
import Rewards from "../Rewards/Rewards";


const Home = () => {

    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                <div className="mx-10 my-20">
                    <h2 className="text-5xl font-bold text-center text-rose-700 mb-5">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                        }
                    </div>
                </div>
            </div>
            <VocationalWork></VocationalWork>
            <Rewards></Rewards>
            <Footer></Footer>
        </div>
    );
};

export default Home;