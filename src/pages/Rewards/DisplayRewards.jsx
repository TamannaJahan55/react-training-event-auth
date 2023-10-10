import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DisplayRewards = () => {

    const handleEarn = () =>{
         toast.success("Congratulations!!! You have earned rewards successfully.",{
            position: "top-center",
            theme: "colored"
         })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-44 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-2 gap-4">
                    <div className="card card-side w-96 bg-rose-50 shadow-xl">
                        <figure><img src="https://i.ibb.co/8KJyG4X/laptop.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Winner!</h2>
                            <p className="text-xl font-medium text-rose-500">Laptop</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleEarn} className="btn text-white normal-case bg-purple-500">Earn</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side w-96 bg-rose-50 shadow-xl">
                        <figure><img src="https://i.ibb.co/fk5dgww/sewing-machine.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">1st Runners Up!</h2>
                            <p className="text-xl font-medium text-rose-500">Sewing Machine</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleEarn} className="btn text-white normal-case bg-purple-500">Earn</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side w-96 bg-rose-50 shadow-xl">
                        <figure><img src="https://i.ibb.co/jkWBMSG/mobile.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">2nd Runners Up!</h2>
                            <p className="text-xl font-medium text-rose-500">Mobile</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleEarn} className="btn text-white normal-case bg-purple-500">Earn</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side w-96 bg-rose-50 shadow-xl">
                        <figure><img src="https://i.ibb.co/NxtJs06/certificate.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">All Participants!</h2>
                            <p className="text-xl font-medium text-rose-500">Certificates</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleEarn} className="btn text-white normal-case bg-purple-500">Earn</button>
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