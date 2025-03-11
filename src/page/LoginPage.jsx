import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!username || !password) {
            setError("Vui lòng nhập đầy đủ thông tin đăng nhập.");
            return;
        }
        console.log("Username:", username, "Password:", password);
        setError(""); // Xóa lỗi nếu nhập đầy đủ
        navigate("/");
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="card p-4 shadow-lg" style={{ width: "350px", border: "none", borderRadius: "10px", backgroundColor: "#ffffff" }}>
                <h2 className="text-center mb-1 fw-bolder" style={{ color: "#f22726" }}>Đăng nhập</h2>
                <p className="text-secondary mb-4">Chào mừng đến với CookMates!</p>
                {error && <div className="alert alert-danger p-2" role="alert">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ borderColor: "#f22726", borderWidth: "2px" }}
                        />
                        <label htmlFor="username" className="form-label text-secondary" style={{ color: "#333" }}>
                            Username
                        </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ borderColor: "#f22726", borderWidth: "2px" }}
                        />
                        <label htmlFor="password" className="form-label text-secondary" style={{ color: "#333" }}>
                            Password
                        </label>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Ghi nhớ</label>
                        </div>
                        <a href="#" className="text-decoration-none" style={{ color: "#f22726" }}>Quên mật khẩu?</a>
                    </div>
                    <Button type="submit" text="Đăng nhập"  />
                </form>
                <p className="text-center mt-3">Chưa có tài khoản? <a href="#" className="text-decoration-none" style={{ color: "#f22726" }}>Đăng ký ngay</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
