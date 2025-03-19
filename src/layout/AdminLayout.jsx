import { NavLink } from 'react-router-dom';
import '../assets/styles/adminlayout.css';

const AdminLayout = ({ children }) => {
  const userName = 'Nguyễn Hoàng Huy'; // Giả định tên user, có thể lấy từ context hoặc API

  const handleLogout = () => {
    // Xử lý đăng xuất tại đây
    console.log('User logged out');
  };

  return (
    <div className="row g-1">
      <div className="col col-3 bg-secondary position-relative">
        <div className="dashboard-container p-3">
          <div className="dashboard-img border-bottom border-light pb-3">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
          </div>
          <div className="dashboard-list mt-4">
            <div className="dashboard-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'dashboard-item__link active'
                    : 'dashboard-item__link'
                }
                to="/admin/home"
              >
                Trang chủ
              </NavLink>
            </div>
            <div className="dashboard-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'dashboard-item__link active'
                    : 'dashboard-item__link'
                }
                to="/admin/categories"
              >
                Danh mục
              </NavLink>
            </div>
            <div className="dashboard-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'dashboard-item__link active'
                    : 'dashboard-item__link'
                }
                to="/admin/ingredient"
              >
                Nguyên liệu
              </NavLink>
            </div>
            <div className="dashboard-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'dashboard-item__link active'
                    : 'dashboard-item__link'
                }
                to="/admin/recipe"
              >
                Công thức
              </NavLink>
            </div>
            <div className="dashboard-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'dashboard-item__link active'
                    : 'dashboard-item__link'
                }
                to="/admin/user"
              >
                Người dùng
              </NavLink>
            </div>
            <div className="dashboard-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'dashboard-item__link active'
                    : 'dashboard-item__link'
                }
                to="/"
              >
                Phát triển sau...
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-9">
        <div className="d-flex justify-content-between align-items-center bg-warning bg-gradient p-3">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-circle-user me-2"></i>
            <span className='fw-bold'>{userName}</span>
          </div>
          <button
            className="btn btn-danger btn"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </div>
        <div className=" px-3">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
