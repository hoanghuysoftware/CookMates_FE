import React, {useState} from "react";
import { Form, Container, Row, Col, Card, Alert } from "react-bootstrap";
import Button from "../components/Button";
import '../assets/styles/login.scss'

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Vui lòng nhập tài khoản và mật khẩu.");
      return;
    }
    setError("");
    alert(`Đăng nhập thành công với tài khoản: ${username}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Card style={{ width: "24rem" }} className="shadow-lg">
            <Card.Body>
              <h2 className="login-title text-center fw-bold">Đăng nhập</h2>
              <p className="sub-title text-body-tertiary">
                <span className="text-body">️🎉</span>
                Chào mừng bạn đến với CookMates!
                <span className="text-body">️🎉</span>
              </p>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    id="floating-username"
                    type="text"
                    placeholder="Nhập username của bạn"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Form.Label htmlFor="floating-username" className="text-start">Username</Form.Label>
                </Form.Group>

                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    id="floating-password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Label htmlFor="floating-password" className="text-start">Mật khẩu</Form.Label>
                </Form.Group>

                <Button size="md" width="100" type="submit" >
                  Đăng nhập
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="/register">Chưa có tài khoản? Đăng ký ngay</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
