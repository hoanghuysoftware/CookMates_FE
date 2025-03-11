import WithSidebarLayout from '../layout/WithSidebarLayout.jsx'
import { useParams } from 'react-router-dom';
import '../assets/styles/mainlayout.css'
import RecipeList from '../components/RecipeList.jsx';

const Category = () => {
    const { categoryName } = useParams();

    return (
        <div className='bg-white main-content mt-3'>
            <nav className='ps-3' style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a className='text-decoration-none fw-medium' href="/">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{categoryName}</li>
                </ol>
            </nav>
            <WithSidebarLayout>
                <div className="category-content">
                    <div className="title-container">
                        <h2 className="contetnt-title">{categoryName}</h2>
                    </div>
                    <div className="list-recipe">
                        <RecipeList column={2}/>
                    </div>
                </div>
            </WithSidebarLayout>
        </div>
    )
}

export default Category;
