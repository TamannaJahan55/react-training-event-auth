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
                                    <p className="mb-10 text-xl font-semibold text-rose-700 list-none" data-aos = "fade-down">
                                        <li>Empowering Women for a Brighter Tomorrow</li>
                                        <li>Skills for Success, Opportunities for All</li>
                                        <li>Unlock Your Potential and Shape Your Future</li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HgWPCQC/banner-7.jpg)' }}>
                            <div className="hero-overlay bg-pink-50 bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <p className="mb-5 text-xl text-rose-700">We arrange entrepreneurship conference, business development seminar, fashion design boot-camp, vocational workshop, leadership and communication webinars and financial literacy program. Throughout the events, we aim to empower women to become skilled entrepreneurs, who can acquire start-up, business development, various craftsmanship skills adhering to communication and tech and teach disadvantaged women including divorcees, widows, and those facing various difficulties, enabling them to earn living from home.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/QKNs789/banner-5.jpg)' }}>
                            <div className="hero-overlay bg-pink-50 bg-opacity-60"></div>
                            <div className="hero-content text-left text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mt-5 mb-5 text-5xl text-rose-700 font-bold">Get ready to join now......!</h1>
                                    <p className="mb-10 text-xl font-semibold text-purple-700 list-none">
                                        <li>Empowerment Starts Here: Get Started Today</li>
                                        <li>Take the First Step Towards Your Future</li>
                                        <li>Your Journey to Success Begins Now</li>
                                        <li>Invest in Yourself - Join Today</li>
                                        <li>Discover Your Potential with Us</li>
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
                                    <p className="mt-5 mb-2 text-xl font-semibold text-purple-700 list-none">
                                        <li>Join Our Volunteer Team and Make a Difference</li>
                                        <li>Become a Mentor: Share Your Skills and Inspire</li>
                                        <li>Support Unemployed Women: Volunteer Today!</li>
                                        <li>Empower Others Through Volunteering</li>
                                        <li>Be a Change Maker: Volunteer for Empowerment</li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs text-white normal-case bg-rose-500">Motive</a>
                    <a href="#item2" className="btn btn-xs text-white normal-case bg-rose-500">About</a>
                    <a href="#item3" className="btn btn-xs text-white normal-case bg-rose-500">Complementary</a>
                    <a href="#item4" className="btn btn-xs text-white normal-case bg-rose-500">Voluntary</a>
                </div>
            </div>
        </div>


    );
};

export default Banner;