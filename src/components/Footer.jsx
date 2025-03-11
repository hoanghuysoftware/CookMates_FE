import '../assets/styles/footer.css'

const Footer = () => {
    return (
        <div className="footer-container p-4 mt-3">
            {/* <div className="footer-top d-flex align-items-center justify-content-center">
                <img src={`${process.env.PUBLIC_URL}/icon-web-red.png`} alt="logo" className="footer-img" />
                <h1 className="footer-name">CookMates</h1>
            </div> */}
            <div className="footer-contact">
                <p>@2025 -Bản quyền thuộc về CookMates</p>
                <div className="d-flex justify-content-center">
                    <div className="contact-email me-5"><label className="pe-1 fw-bold">Email: </label>hoanghuy.software@gmail.com</div>
                    <div className="contact-address"><label className="pe-1 fw-bold">Địa chỉ: </label>Phú Hội - Nhơn Trạch - Đồng Nai</div>
                </div>
            </div>
        </div>
    )
}

export default Footer