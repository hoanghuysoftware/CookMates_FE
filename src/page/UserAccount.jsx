import { useEffect, useState } from 'react';
import userService from '../service/userService';

const UserAccount = () => {
  const userId = parseInt(localStorage.getItem('userID'));

  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);


  useEffect(() => {
    fetchDataUser(userId);
  }, [userId]);

  const fetchDataUser = async (userId) => {
    try {
      const res = await userService.getUserByID(userId);
      setUser(res.data)
      localStorage.setItem("fullName", res.data.fullName)
    } catch (error) {
      console.log('Error when get data from userAccount');
      throw error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    console.log('Updated User Data:', user); // In ra dữ liệu trước khi gửi

    try {
      // await userService.updateUser(user.id, user); // Giả sử bạn có hàm updateUser trong userService/
      setEditMode(false); // Tắt chế độ chỉnh sửa sau khi lưu thành công
      alert('Cập nhật thành công!');
    } catch (error) {
      console.error('Lỗi khi cập nhật người dùng:', error);
      alert('Cập nhật thất bại!');
    }
  };


  return (
    <div className="bg-white main-content mt-lg-5">
      <div className="card shadow p-4 text-start w-50 mx-auto">
        <h2 className="text-center mb-4">Thông tin của tôi</h2>
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-user"></i> Name</label>
          <input type="text" className="form-control" name="name" value={user.fullName} onChange={handleChange}
                 disabled={!editMode} />
        </div>
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-user-circle"></i> Username</label>
          <input type="text" className="form-control" name="username" value={user.username} onChange={handleChange}
                 disabled={!editMode} />
        </div>
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-lock"></i> Password</label>
          <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange}
                 disabled={!editMode} />
        </div>
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-phone"></i> Phone</label>
          <input type="text" className="form-control" name="phone" value={user.phoneNumber} onChange={handleChange}
                 disabled={!editMode} />
        </div>
        <div className="mb-3">
          <label className="form-label"><i className="fas fa-envelope"></i> Email</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange}
                 disabled={!editMode} />
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary me-2"
            onClick={editMode ? handleSave : () => setEditMode(true)}
          >
            {editMode ? 'Lưu' : 'Cập nhật'}
          </button>

          {editMode && (
            <button className="btn btn-secondary" onClick={() => setEditMode(false)}>Hủy bỏ</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
