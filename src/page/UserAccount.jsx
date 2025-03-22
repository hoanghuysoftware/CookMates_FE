import { useState } from "react";

const UserAccount = () => {
    const [user, setUser] = useState({
        name: "Nguyen Van A",
        username: "nguyenvana",
        password: "********",
        phone: "0123456789",
        email: "nguyenvana@example.com"
    });
    
    const [editMode, setEditMode] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white main-content mt-lg-5">
            <div className="card shadow p-4 text-start w-50 mx-auto">
                <h2 className="text-center mb-4">Thông tin của tôi</h2>
                <div className="mb-3">
                    <label className="form-label"><i className="fas fa-user"></i> Name</label>
                    <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} disabled={!editMode} />
                </div>
                <div className="mb-3">
                    <label className="form-label"><i className="fas fa-user-circle"></i> Username</label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={handleChange} disabled={!editMode} />
                </div>
                <div className="mb-3">
                    <label className="form-label"><i className="fas fa-lock"></i> Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} disabled={!editMode} />
                </div>
                <div className="mb-3">
                    <label className="form-label"><i className="fas fa-phone"></i> Phone</label>
                    <input type="text" className="form-control" name="phone" value={user.phone} onChange={handleChange} disabled={!editMode} />
                </div>
                <div className="mb-3">
                    <label className="form-label"><i className="fas fa-envelope"></i> Email</label>
                    <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} disabled={!editMode} />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary me-2" onClick={() => setEditMode(!editMode)}>
                        {editMode ? "Lưu" : "Cập nhật"}
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
