import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DisplayRewards = () => {

    const handleEarn = () => {
        toast.success("Congratulations!!! You are listed for competition successfully.", {
            position: "top-center",
            theme: "colored"
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex-col space-y-4">
                <div className="lg:max-w-4xl mx-10 lg:mx-48 my-5 lg:my-10">
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 lg:grid-cols-2 lg:gap-24">
                        <div className="card card-side md:w-80 lg:w-96 bg-rose-50 shadow-xl shadow-rose-300">
                            <figure><img src="https://i.ibb.co/8KJyG4X/laptop.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Winner!</h2>
                                <p className="text-xl font-medium text-rose-500">Laptop</p>
                            </div>
                        </div>
                        <div className="card card-side md:w-80 lg:w-96 bg-rose-50 shadow-xl shadow-rose-300">
                            <figure><img src="https://i.ibb.co/fk5dgww/sewing-machine.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">1st Runner Up!</h2>
                                <p className="text-xl font-medium text-rose-500">Sewing Machine</p>
                            </div>
                        </div>
                        <div className="card card-side md:w-80 lg:w-96 bg-rose-50 shadow-xl shadow-rose-300">
                            <figure><img src="https://i.ibb.co/jkWBMSG/mobile.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">2nd Runner Up!</h2>
                                <p className="text-xl font-medium text-rose-500">Mobile</p>
                            </div>
                        </div>
                        <div className="card card-side md:w-80 lg:w-96 bg-rose-50 shadow-xl shadow-rose-300">
                            <figure><img src="https://i.ibb.co/NxtJs06/certificate.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">All Participants!</h2>
                                <p className="text-xl font-medium text-rose-500">Certificate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-auto text-center">
                    <div className="indicator bg-purple-500 shadow-xl shadow-violet-400">
                        <div className="indicator-item indicator-bottom">
                            <button onClick={handleEarn} className="btn bg-rose-500 text-white normal-case">Ready</button>
                        </div>
                        <div className="card border">
                            <div className="card-body text-white">
                                <h2 className="card-title">Competition !!!</h2>
                                <p>So, are you ready to compete?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DisplayRewards;