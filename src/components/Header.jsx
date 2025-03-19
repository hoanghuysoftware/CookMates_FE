import SearchBar from "./SearchBar";
import "../assets/styles/header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const handleLogout = () => {
    // handle logout tại đây
    console.log("Logout....!");

    navigate("/login");
  };

  return (
    <div>
      <div className="container-fluid header-container">
        <div className="header pt-2 pb-2">
          <div className="header-body row align-items-center">
            <div className="header-content-item col col-3">
              <div className="logo-container">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
              </div>
            </div>
            <div className="header-content-item col col-6">
              <div className="search-container">
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>
            <div className="header-info header-content-item col col-3 row align-items-center">
              <div className="favorite-container col col-4">
                <Link
                  to={`/user/${1}`}
                  style={{ color: "unset" }}
                  className="d-block text-decoration-none"
                >
                  <div className="header-item__icon">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <h6 className="header-item__title">Yêu thích</h6>
                </Link>
              </div>
              <div className="contact-container col col-4">
                <div className="header-item__icon">
                  <i className="fa-solid fa-address-book"></i>
                </div>
                <h6 className="header-item__title">Liên hệ</h6>
              </div>
              <div className="account-container col col-4">
                <div className="header-item__icon">
                  <i className="fa-solid fa-user-pen"></i>
                </div>
                <h6 className="header-item__title">Người dùng</h6>
                <div className="title-user__pop shadow-lg">
                  <div className="user-pop__container  text-start">
                    <div className="user-pop__item">
                      {/* <p className="d-block"></p> */}
                      <Link className="user-pop__item-link" to={"/userID/account"}>Quản lý tài khoản</Link>

                    </div>
                    <div className="user-pop__item">
                      <Link className="user-pop__item-link" to={"/userID/recipe/add"}>Thêm công thức</Link>
                    </div>
                    <div className="user-pop__item">
                      <Link className="user-pop__item-link" to={"/userID/recipe"}>Công thức của tôi</Link>
                    </div>
                    <div className="user-pop__item">
                      <p onClick={handleLogout} className="d-block pt-2 border-top">
                        Đăng xuất
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-nav"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
