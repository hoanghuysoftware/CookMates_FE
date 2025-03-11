import '../assets/styles/navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
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
                                    <li className="py-2 nav-sub__item">
                                        <Link to="/mon-chien" className="nav-sub__item-link">Món chiên</Link>
                                    </li>
                                    <li className="py-2 nav-sub__item">
                                        <Link to="/mon-hap" className="nav-sub__item-link">Món hấp</Link>
                                    </li>
                                    <li className="py-2 nav-sub__item">
                                        <Link to="/mon-nuong" className="nav-sub__item-link">Món nướng</Link>
                                    </li>
                                    <li className="py-2 nav-sub__item">
                                        <Link to="/mon-canh" className="nav-sub__item-link">Món canh</Link>
                                    </li>
                                    <li className="py-2 nav-sub__item">
                                        <Link to="/mon-ham" className="nav-sub__item-link">Món hầm</Link>
                                    </li>
                                    <li className="py-2 nav-sub__item">
                                        <Link to="/mon-xao" className="nav-sub__item-link">Món xào</Link>
                                    </li>
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