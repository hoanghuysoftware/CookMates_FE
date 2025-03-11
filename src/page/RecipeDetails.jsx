import '../assets/styles/mainlayout.css'
import '../assets/styles/recipeDetail.css'
import WithSidebarLayout from "../layout/WithSidebarLayout.jsx"
import Review from '../components/Review.jsx'

const RecipeDetails = () => {
    return (
        <div className="bg-white main-content mt-3">
            <nav className='ps-3' style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a className='text-decoration-none fw-medium' href="/">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a className='text-decoration-none fw-medium' href="/">Tên danh mục</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Tên món ăn</li>
                </ol>
            </nav>

            <WithSidebarLayout>
                <div className="recipe-content">
                    <div className="recipe-title">
                        <h5 className="recipe-category-name">Công thức nấu ăn</h5>
                        <div className="recipe-title__name">Cách làm ruốc khô rim nước mắm ăn kèm xôi cực ngon</div>
                        <div className="recipe-title__info d-flex justify-content-center align-items-center">
                            <p className="recipe-info__item">đăng bởi Thu Hà</p>
                            <p className="recipe-info__item">15/07/2024 </p>
                            <p className="recipe-info__item">1K lượt xem</p>
                        </div>
                    </div>
                    <div className="recipe-content">
                        <p className="recipe-content__overview">Ruốc khô rim nước mắm là một món ăn quen thuộc với nhiều người bởi cách làm đơn giản và nguyên liệu dân dã. Ruốc khô rim đậm đà, mặn mặn ngọt ngọt hứa hẹn khi ăn cùng với xôi sẽ khiến bạn thích mê cho mà xem. Bắt tay làm ngay cùng Thu Hà bạn nhé!</p>
                        <div className="recipe-content__ingredient">
                            <h4 className="recipe-content__title">1. Nguyên liệu làm ruốc khô rim nước mắm</h4>
                            <ul>
                                <li className="ingredient__item">200g ruốc khô (tép khô)</li>
                                <li className="ingredient__item">Tỏi, ớt sừng, hành lá</li>
                                <li className="ingredient__item">Gia vị: Đường, nước mắm, tương ớt, dầu ăn</li>
                            </ul>
                            <img src={`${process.env.PUBLIC_URL}/1.jpg`} alt="" className="recipe-content__img" />
                        </div>
                        <div className="recipe-content__instruct">
                            <h4 className="recipe-content__title">2. Cách làm ruốc khô rim nước mắm</h4>
                            <h6 className="recipe-content__sub-title">2.1. Bước 1: Sơ chế nguyên liệu</h6>
                            <p className="recipe-instruct__content">
                                Ruốc khô mua về bạn rửa sạch với nước, rồi vớt ra vắt ráo. Bạn đổ nước bẩn đi, lặp lại vài lần để ruốc được sạch hơn.
                                <br />
                                Tiếp đến, bạn băm nhuyễn 3 tép tỏi đã bóc vỏ và 1 trái ớt sừng, hành lá thì bạn rửa sạch, cắt gốc, thái nhỏ.
                            </p>
                            <img src={`${process.env.PUBLIC_URL}/2.jpg`} alt="" className="recipe-content__img" />
                            <h6 className="recipe-content__sub-title">2.2. Bước 2: Làm nước sốt</h6>
                            <p className="recipe-instruct__content">
                                Bạn cho 2 muỗng canh đường, 2 muỗng canh nước mắm, 1 muỗng canh tương ớt vào chén rồi khuấy đều cho tan để làm nước sốt.
                            </p>
                            <img src={`${process.env.PUBLIC_URL}/3.jpg`} alt="" className="recipe-content__img" />

                            <h6 className="recipe-content__sub-title">2.3. Bước 3: Rim ruốc khô với nước mắm</h6>
                            <p className="recipe-instruct__content">
                                Bạn bắc chảo lên bếp, cho 2 muỗng canh dầu ăn vào. Đợi dầu nóng, bạn cho tỏi vào phi thơm rồi đổ ruốc khô vào đảo đều.

                                Đến khi ruốc được vàng đều, thì bạn đổ chén nước sốt đã pha vào, rim khoảng 7- 10 phút trên lửa nhỏ. Đến khi thấy nước sốt sệt lại thấm hết vào ruốc thì bạn cho hành lá và ớt vào, đảo đều khoảng 2 phút rồi tắt bếp.

                                Bạn múc ruốc rim nước mắm ra đĩa và thưởng thức cùng xôi nhé!
                            </p>
                            <img src={`${process.env.PUBLIC_URL}/4.jpg`} alt="" className="recipe-content__img" />
                        </div>

                        <div className="recipe-content__result">
                            <h4 className="recipe-content__title">3. Thành phẩm</h4>
                            <img src={`${process.env.PUBLIC_URL}/item.jpg`} alt="" className="recipe-content__img" />
                            <p className='recipe-result__content'>
                                Vậy là bạn đã hoàn thành xong món ruốc khô rim nước mắm cực ngon rồi đó. Ruốc rim đậm đà, mặn mặn ngọt ngọt ăn kèm với xôi thì phải nói là ngon hết sẩy. Với cách làm đơn giản này thì còn chần chờ gì mà không vào bếp làm ngay món này để chiêu đãi cả nhà thôi.

                                Thu Hà mong rằng với cách làm mì xào xá xíu ngon chuẩn vị siêu dễ tại nhà sẽ mang tới một món ngon cho bạn và gia đình. Hãy khoe ngay thành phẩm của bạn với Thu Hà nhé!
                            </p>
                        </div>
                    </div>
                    <div className="recipe-review">
                        <Review/>
                    </div>
                </div>
            </WithSidebarLayout>
        </div>
    );

}

export default RecipeDetails;