import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Rewards = () => {
    useEffect(()=>{
        Aos.init();
    }
        ,[])
    return (
        <div className="my-5">
            <div className="flex-col space-y-3 lg:relative" data-aos = "zoom-in">
                <figure><img className="w-full" src="https://i.ibb.co/WGXRDHY/banner-8.jpg" alt="" /></figure>

                <div className="card ml-28 md:ml-48 lg:absolute lg:bottom-32 lg:right-72 w-1/2 bg-rose-500 text-white">
                    <div className="card-body shadow-xl shadow-violet-400">
                        <h2 className="card-title">Be a Winner!</h2>
                        <p>Your journey does not end with completion. Join the competition to showcase your skills and claim well-deserved recognition. We celebrate your dedication and hard work. Compete in our end-of-program competition and stand a chance to win prestigious awards.</p>
                        <div className="card-actions justify-end">
                            <Link to='/displayRewards'><button className="btn text-base text-white normal-case bg-purple-500">Gain Reward</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Rewards;