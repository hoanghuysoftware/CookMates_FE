import '../assets/styles/review.css'
import StarRating from './StarRating'
import Button from './Button'
import { useState } from 'react'
const Review = ({ recipeId }) => {
    const[review, setReview] = useState();

    const handleChangeReview = (e) => {
        setReview(e.target.value);
    }

    const handleSumbitReview = () => {
        console.log(review)
    }

    return (
        <div className="review-container">
            <h2 className="review-name">Đánh giá cách làm ruốc khô rim nước mắm ăn kèm xôi cực ngon</h2>
            <div className="review-form py-4 mb-3 border-bottom">
                <div className="form-floating w-100 ms-3 me-1 ">
                    <textarea onChange={handleChangeReview} value={review} style={{ height: '100px' }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label className='text-secondary' htmlFor="floatingTextarea">Nhập đánh giá của bạn</label>
                </div>
                <div className="btn-review ms-3 pt-3">
                    <Button onClick={handleSumbitReview}
                        type={"button"}
                        size='w-20'
                        text={"Đánh giá"} />
                </div>
            </div>
            <div className="review-list">
                <div className="review-item">
                    <div className="review-item__info">
                        <div className="review-item__user">Nguyễn Hoàng Huy</div>
                        <div className="review-item__rating">
                            <StarRating rating={4.5} />
                        </div>
                        <div className="review-item__date">09:27 10-03-2025</div>
                    </div>
                    <div className="review-item__content">Mua 12 cây bút shop tặng thêm cho tui một cây bút bi xanh với 3 tấm sticker nhỏ mà xinh lắm đóng gói cẩn thận tốt nha mực bút ra đều ko bị tắc lần sau mình sẽ mua ủng hộ shop thêmmm</div>
                </div>
                <div className="review-item">
                    <div className="review-item__info">
                        <div className="review-item__user">Nguyễn Hoàng Huy</div>
                        <div className="review-item__rating">
                            <StarRating rating={4.5} />
                        </div>
                        <div className="review-item__date">09:27 10-03-2025</div>
                    </div>
                    <div className="review-item__content">Mua 12 cây bút shop tặng thêm cho tui một cây bút bi xanh với 3 tấm sticker nhỏ mà xinh lắm đóng gói cẩn thận tốt nha mực bút ra đều ko bị tắc lần sau mình sẽ mua ủng hộ shop thêmmm</div>
                </div>
                <div className="review-item">
                    <div className="review-item__info">
                        <div className="review-item__user">Nguyễn Hoàng Huy</div>
                        <div className="review-item__rating">
                            <StarRating rating={4.5} />
                        </div>
                        <div className="review-item__date">09:27 10-03-2025</div>
                    </div>
                    <div className="review-item__content">Mua 12 cây bút shop tặng thêm cho tui một cây bút bi xanh với 3 tấm sticker nhỏ mà xinh lắm đóng gói cẩn thận tốt nha mực bút ra đều ko bị tắc lần sau mình sẽ mua ủng hộ shop thêmmm</div>
                </div>
                <div className="review-item">
                    <div className="review-item__info">
                        <div className="review-item__user">Nguyễn Hoàng Huy</div>
                        <div className="review-item__rating">
                            <StarRating rating={4.5} />
                        </div>
                        <div className="review-item__date">09:27 10-03-2025</div>
                    </div>
                    <div className="review-item__content">Mua 12 cây bút shop tặng thêm cho tui một cây bút bi xanh với 3 tấm sticker nhỏ mà xinh lắm đóng gói cẩn thận tốt nha mực bút ra đều ko bị tắc lần sau mình sẽ mua ủng hộ shop thêmmm</div>
                </div>
                <div className="review-item">
                    <div className="review-item__info">
                        <div className="review-item__user">Nguyễn Hoàng Huy</div>
                        <div className="review-item__rating">
                            <StarRating rating={4.5} />
                        </div>
                        <div className="review-item__date">09:27 10-03-2025</div>
                    </div>
                    <div className="review-item__content">Mua 12 cây bút shop tặng thêm cho tui một cây bút bi xanh với 3 tấm sticker nhỏ mà xinh lắm đóng gói cẩn thận tốt nha mực bút ra đều ko bị tắc lần sau mình sẽ mua ủng hộ shop thêmmm</div>
                </div>
            </div>
        </div>
    )
}

export default Review