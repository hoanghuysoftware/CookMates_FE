import { NavLink } from "react-router-dom";

const UserControlLayout = ({children}) => {
  return (
    <div className="row g-1">
      <div className="col col-3 bg-secondary position-relative">
        <div className="dashboard-container p-3">
          <div className="dashboard-list mt-4">
            <div className="dashboard-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'dashboard-item__link active'
                    : 'dashboard-item__link'
                }
                to="/userID/account"
              >
                Quản lý tài khoản
              </NavLink>
            </div>
            <div className="dashboard-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'dashboard-item__link active'
                    : 'dashboard-item__link'
                }
                to="/userID/recipe/add"
              >
                Công thức mới
              </NavLink>
            </div>
            <div className="dashboard-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'dashboard-item__link active'
                    : 'dashboard-item__link'
                }
                to="/userID/recipe"
              >
                Công thức của tôi
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-9">
        <div className=" px-3">{children}</div>
      </div>
    </div>
  );
};

export default UserControlLayout;
