import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Services = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails);
    const { id } = useParams();
    const idInt = parseInt(id);
    console.log(idInt)
    const service = serviceDetails.find(service => service.id === idInt);
    console.log(service)

    const handleJoin = () =>{
         toast.success('You have joined our event successfully !!',{
            position: "top-right",
            theme: "colored"
         })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-10 my-5">
                <div className="max-w-6xl mx-10 md:mx-40 lg:mx-40 ">
                    <div className="box-content rounded-lg w-full bg-rose-50 shadow-xl shadow-violet-300">
                        <figure className="px-20 pt-10">
                            <img src={service.image} alt="Shoes" className="w-full rounded-xl border border-rose-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-semibold text-purple-500">{service.name}</h2>
                            <p className="text-base font-normal">{service.description}</p>
                            <p className="text-xl font-medium text-purple-500">Duration: {service.duration}</p>
                            <p className="text-base font-medium text-rose-500">Schedule: {service.schedule}</p>
                            <div className="card-actions">
                                <button onClick={handleJoin} className="btn text-white normal-case bg-purple-500">Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Services;