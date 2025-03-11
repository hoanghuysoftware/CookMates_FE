import ReactStars from 'react-rating-stars-component'
const StarRating = ({ rating }) => {
    return (
        <ReactStars
            count={5}
            value={rating}
            size={15}
            isHalf={true}
            activeColor="#ffd700"
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fas fa-star-half-alt"></i>}
            filledIcon={<i className="fas fa-star"></i>}
        />
    );
};

export default StarRating
