import { NavLink } from 'react-router-dom';
import '../assets/styles/adminlayout.css'

const AdminLayout = ({ children }) => {
  return (
    <div className="row gx-5">
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
                to="/admin"
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
        <div className="bg-success-subtle">header top admin</div>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
