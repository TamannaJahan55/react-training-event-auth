import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VocationalCard = ({ works }) => {
    const { name, image, price, description } = works;

    const handleLearn = () =>{
        toast.success('You are interested to learn? Register now!',{
            position: 'top-right',
            theme: 'colored'
        })
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <p className='text-base'>{description}</p>
                <p className='text-base'>{price}</p>
                <button onClick={handleLearn} className='btn bg-purple-500 text-white normal-case'>Learn now</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default VocationalCard;

VocationalCard.propTypes = {
    works: PropTypes.object.isRequired
}