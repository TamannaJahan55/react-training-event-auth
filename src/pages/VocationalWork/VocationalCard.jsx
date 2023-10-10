import PropTypes from 'prop-types';

const VocationalCard = ({ works }) => {
    const { name, image, price, description } = works;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <p className='text-base'>{description}</p>
                <p className='text-base'>{price}</p>
            </div>
        </div>
    );
};

export default VocationalCard;

VocationalCard.propTypes = {
    works: PropTypes.object.isRequired
}