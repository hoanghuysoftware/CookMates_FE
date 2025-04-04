import '../assets/styles/review.css';
import StarRating from './StarRating';
import Button from './Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataReviewByRecipeId } from '../features/reviewSlice';
import reviewService from '../service/reviewService';
import ReactStars from 'react-rating-stars-component';

const Review = ({ recipeId }) => {
    const [dataReview, setDataReview] = useState([]);
    const [review, setReview] = useState();
    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [render, setRender] = useState(false)

    useEffect(() => {
      const fetchDataReview = async (recipeId) => {
        try {
          const response = await reviewService.getReviewByIdRecipe(recipeId);
          setDataReview(response.data);
          return response.data;
        } catch (error) {
          console.log('Error when loading review for recipe: ' + recipeId);
          throw error;
        }
      };
      fetchDataReview(recipeId);
    }, [recipeId, render]);

    const handleChangeReview = (e) => {
      setReview(e.target.value);
    };
    const handleRatingChange = (newRating) => {
      setUserRating(newRating);
    };

    const handleSumbitReview = async () => {
      const postData = {
        content: review,
        rating: userRating,
        userId: 2, // test user
        recipeId: recipeId,
      };
      try {
        await reviewService.createReview(postData);
        setRender(true)
        setReview(null)
        setHoverRating(0)
        setUserRating(0)
      } catch (error) {
        throw error;
      }
      console.log(postData);
    };
    const renderStars = () => {
      const stars = [];

      for (let i = 1; i <= 5; i++) {
        stars.push(
          <span
            key={i}
            onClick={() => setUserRating(i)}
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            style={{
              cursor: 'pointer',
              color: i <= (hoverRating || userRating) ? '#ffd700' : '#ccc',
              fontSize: '28px',
              marginRight: '4px',
              transition: 'color 0.2s',
            }}
          >
        ★
      </span>,
        );
      }

      return stars;
    };

    if (!dataReview) return <div className="review-container"><p>Loading...</p></div>;
    return (
      <div className="review-container">
        <h2 className="review-name">Đánh giá cách làm ruốc khô rim nước mắm ăn kèm xôi cực ngon</h2>
        <div className="review-form py-4 mb-3 border-bottom">
          <div className="d-flex align-items-center star-input ms-3">
            <h6 className="mb-0 me-2">Đánh giá:</h6>
            {renderStars()}
          </div>
          <div className="form-floating w-100 ms-3 me-1 ">
          <textarea onChange={handleChangeReview} value={review} style={{ height: '100px' }} className="form-control"
                    placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label className="text-secondary" htmlFor="floatingTextarea">Nhập đánh giá của bạn</label>
          </div>
          <div className="btn-review ms-3 pt-3">
            <Button onClick={handleSumbitReview}
                    type={'button'}
                    size="w-20"
                    text={'Đánh giá'} />
          </div>
        </div>
        <div className="review-list">
          {dataReview.map((item, index) => (
            <div key={index} className="review-item">
              <div className="review-item__info">
                <div className="review-item__user">{item.user.fullName}</div>
                <div className="review-item__rating">
                  <StarRating rating={item.rating} />
                </div>
                <div
                  className="review-item__date">{`${item.createdAt.split('T')[1]} ${item.createdAt.split('T')[0]}`}</div>
              </div>
              <div className="review-item__content">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
;

export default Review;