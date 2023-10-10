
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


    const Banner = () => {
    useEffect(() =>{
        Aos.init();
    }
        ,[])
    return (
        <div className="w-full">
            <div className="bg-rose-100">
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/b1rX53d/cover-photo.jpg)' }}>
                            <div className="hero-overlay bg-pink-50 bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl text-rose-700 font-bold" data-aos = "fade-up">Training Event Management</h1>
                                    <p className="mb-2 text-3xl text-purple-500 font-semibold font-mono" data-aos = "fade-down">Training for Women</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HgWPCQC/banner-7.jpg)' }}>
                            <div className="hero-overlay bg-pink-50 bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <p className="mb-5 text-xl text-black">Training Events for Women project arranges entrepreneurship conference, business development seminar, fashion design boot-camp, vocational workshop, leadership and communication webinars and financial literacy program. Throughout the events, we aim to empower women to become skilled entrepreneurs, who can acquire start-up, business development, various craftsmanship skills adhering to communication and tech and teach disadvantaged women including divorcees, widows, and those facing various difficulties, enabling them to earn living from home.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/QKNs789/banner-5.jpg)' }}>
                            <div className="hero-overlay bg-pink-50 bg-opacity-60"></div>
                            <div className="hero-content text-left text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mt-5 mb-5 text-5xl text-rose-700 font-bold">Take full free participation, those are....</h1>
                                    <p className="mb-10 text-xl font-semibold text-rose-700">
                                        <li>Divorcee</li>
                                        <li>Widow</li>
                                        <li>Single mother</li>
                                        <li>Only earning member</li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/2j4vkbZ/banner-4.jpg)' }}>
                            <div className="hero-overlay bg-pink-50 bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mt-14 text-5xl text-rose-700 font-bold">Be a volunteer!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs text-white normal-case bg-rose-500">Logo</a>
                    <a href="#item2" className="btn btn-xs text-white normal-case bg-rose-500">About</a>
                    <a href="#item3" className="btn btn-xs text-white normal-case bg-rose-500">Coupon</a>
                    <a href="#item4" className="btn btn-xs text-white normal-case bg-rose-500">Volunteer</a>
                </div>
            </div>
        </div>


    );
};

export default Banner;