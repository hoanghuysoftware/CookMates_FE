import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUser } from '../features/userSlice';
import { data } from 'react-router-dom';

const UserAdmin = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'admin',
      full_name: 'Admin User',
      email: 'admin@example.com',
      phone: '0123456789',
      role: 'Admin',
      password: 'admin123',
    },
    {
      id: 2,
      username: 'john_doe',
      full_name: 'John Doe',
      email: 'john@example.com',
      phone: '0987654321',
      role: 'User',
      password: 'johnpass',
    },
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const [newUser, setNewUser] = useState({
    username: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    roleName: 'User',
    password: '',
  });
  const [showPasswords, setShowPasswords] = useState({}); // Lưu trạng thái hiển thị mật khẩu

  const { data: dataUser, status } = useSelector(state => state.users);
  useEffect(() => {
    if (status === 'init') {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);

  const togglePasswordVisibility = (id) => {
    setShowPasswords({ ...showPasswords, [id]: !showPasswords[id] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ username: '', fullName: '', email: '', phoneNumber: '', roleName: 'User', password: '' });
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
  };

  const handleUpdateUser = () => {
    setUsers(users.map(user => (user.id === currentUser.id ? currentUser : user)));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container mt-4 py-4">
      <h2 className="mb-3">Quản lý Người Dùng</h2>

      <table className="table table-bordered">
        <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Họ Tên</th>
          <th>Email</th>
          <th>Điện thoại</th>
          <th>Mật khẩu</th>
          <th>Vai trò</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
        </thead>
        <tbody>
        {dataUser.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <div className="input-group">
                <input
                  type={showPasswords[user.id] ? 'text' : 'password'}
                  className="form-control"
                  value={user.password}
                  disabled
                />
                <button className="btn btn-outline-secondary" onClick={() => togglePasswordVisibility(user.id)}>
                  <i className={showPasswords[user.id] ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                </button>
              </div>
            </td>
            <td>{user.roleName}</td>
            <td>
              {user.status === 'ACTIVE' ? <p className='text-success fw-medium'>Hoạt động</p> : <p className='text-danger fw-medium'>Dừng</p>}

            </td>
            <td>
              <button className="btn btn-primary btn-sm me-2" data-bs-toggle="modal" data-bs-target="#editUserModal"
                      onClick={() => handleEditUser(user)}>Chỉnh sửa
              </button>
              {user.status === 'ACTIVE' ?
                <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteUserModal"
                        onClick={() => setCurrentUser(user)}>Xóa
                </button>
                :
                <button className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#deleteUserModal"
                        onClick={() => setCurrentUser(user)}>Bật
                </button>
              }
            </td>
          </tr>
        ))}
        </tbody>
      </table>

      <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addUserModal">Thêm User</button>

      {/* Modal Thêm User */}
      <div className="modal fade" id="addUserModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm Người Dùng</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control mb-2" name="username" placeholder="Username"
                     value={newUser.username} onChange={handleInputChange} />
              <input type="text" className="form-control mb-2" name="full_name" placeholder="Họ Tên"
                     value={newUser.fullName} onChange={handleInputChange} />
              <input type="email" className="form-control mb-2" name="email" placeholder="Email" value={newUser.email}
                     onChange={handleInputChange} />
              <input type="text" className="form-control mb-2" name="phone" placeholder="Điện thoại"
                     value={newUser.phoneNumber} onChange={handleInputChange} />
              <div className="input-group mb-2">
                <input type="password" className="form-control" name="password" placeholder="Mật khẩu"
                       value={newUser.password} onChange={handleInputChange} />
              </div>
              <select className="form-control mb-2" name="role" value={newUser.roleName} onChange={handleInputChange}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleAddUser} data-bs-dismiss="modal">Lưu</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Chỉnh Sửa User */}
      <div className="modal fade" id="editUserModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chỉnh sửa Người Dùng</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {currentUser && (
                <>
                  <input type="text" className="form-control mb-2" name="username" value={currentUser.username}
                         onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })} />
                  <input type="password" className="form-control mb-2" name="password" value={currentUser.password}
                         onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })} />
                  <input type="text" className="form-control mb-2" name="full_name" value={currentUser.fullName}
                         onChange={(e) => setCurrentUser({ ...currentUser, fullName: e.target.value })} />
                  <input type="email" className="form-control mb-2" name="email" value={currentUser.email}
                         onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })} />
                  <input type="text" className="form-control mb-2" name="phone" value={currentUser.phoneNumber}
                         onChange={(e) => setCurrentUser({ ...currentUser, phoneNumber: e.target.value })} />
                  <select className="form-control mb-2" name="role" value={currentUser.role}
                          onChange={(e) => setCurrentUser({ ...currentUser, roleName: e.target.value })}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-success" onClick={handleUpdateUser} data-bs-dismiss="modal">Cập nhật</button>
            </div>
          </div>
        </div>
      </div>


      {/* Modal Xóa User */}
      <div className="modal fade" id="deleteUserModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Xóa Người Dùng</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>Bạn có chắc chắn muốn xóa user <strong>{currentUser?.username}</strong> không?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" onClick={() => handleDeleteUser(currentUser?.id)}
                      data-bs-dismiss="modal">Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;
