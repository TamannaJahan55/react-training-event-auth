import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const ServiceCard = ({ service }) => {
    useEffect(()=>{
        Aos.init();
    }
        ,[])

    const { id, name, image, motive } = service;
    return (
        <div className="card card-compact h-96 bg-rose-50 shadow-xl shadow-violet-400" data-aos = "flip-up">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <p className='text-base'>{motive}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${id}`}><button className="btn text-lg text-white normal-case bg-rose-500">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
}