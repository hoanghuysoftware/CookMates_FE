import '../assets/styles/navbar.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../features/category/categorySlice';
const Navbar = () => {
    const dispatch = useDispatch()
    const {data: dataCategory, status} = useSelector(state => state.categories)

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchCategories())
        }
    }, [status, dispatch]);
    return (
        <nav className="shadow border border-top-0 py-3 ps-3 bg-white navbar navbar-expand-lg ">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" href="/">Trang chủ</a>
                        </li>
                        <li className="nav-item  nav-menu">
                            <a className="nav-link" href="#">
                                Danh mục
                                <i className="ms-1 fa-solid fa-caret-down"></i>
                            </a>
                            <div className=" nav-sub">
                                <ul className="nav-sub__ul">
                                    {dataCategory.map(category => (
                                      <li key={category.id} className="py-2 nav-sub__item">
                                          <Link to={`/${category.id}`} className="nav-sub__item-link">{category.name}</Link>
                                      </li>
                                    ))}
                                    <li className="border border-bottom-0 py-2 nav-sub__item nav-sub__last text-center">
                                        Xem tất cả
                                        <i className="ms-2 fa-solid fa-angles-right"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/kinh-nghiem" className="nav-link">Kinh nghiệm</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/cong-thuc-lam-banh" className="nav-link">Công thức làm bánh</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;