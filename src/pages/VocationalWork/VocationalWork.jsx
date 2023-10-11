import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const VocationalWork = () => {
    useEffect(()=>{
        Aos.init();
    }
        ,[])
    return (
        <div className=" lg:mx-20 my-10">
            <h2 className="text-5xl text-center font-bold text-rose-700 mb-4">Our Vocational Work</h2>
            <div className="hero min-h-screen bg-rose-50" data-aos = "zoom-in-down">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <img src="https://i.ibb.co/D7rzhC3/hand-embroidery.jpg" className="max-w-md rounded-lg shadow-2xl shadow-violet-400" />
                    <div>
                        <h1 className="text-5xl font-bold text-purple-500">Discover the Art of Craftsmanship!</h1>
                        <p className="text-xl font-normal py-6">Witness the transformation of fabric into art. Experience the craftsmanship of talented women. Click here to view their creations and learn about their skills.</p>
                        <Link to='/vocationalDetails'>
                            <button className="btn text-base text-white normal-case bg-purple-500">See more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VocationalWork;