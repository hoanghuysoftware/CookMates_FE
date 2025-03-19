const HomeAdmin = () => {
    return (
        <div className="container-fluid p-4">
            {/* Dashboard Title */}
            <h2 className="mb-4"><i className="fas fa-tachometer-alt"></i> Dashboard</h2>
            
            {/* Dashboard Cards */}
            <div className="row">
                <div className="col-md-3">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fas fa-book"></i> Tổng số công thức</h5>
                            <p className="card-text">120</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fas fa-users"></i> Tổng số người dùng</h5>
                            <p className="card-text">3500</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fas fa-utensils"></i> Tổng số nguyên liệu</h5>
                            <p className="card-text">500</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-danger mb-3">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fas fa-exclamation-triangle"></i> Báo cáo vi phạm</h5>
                            <p className="card-text">5</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Recent Activities */}
            <div className="row mt-4">
                <div className="col-md-6">
                    <h4><i className="fas fa-clock"></i> Công thức chờ duyệt</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Công thức 1 <span className="badge bg-warning text-dark">Chờ duyệt</span></li>
                        <li className="list-group-item">Công thức 2 <span className="badge bg-warning text-dark">Chờ duyệt</span></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4><i className="fas fa-user-plus"></i> Người dùng mới</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Nguyễn Văn A</li>
                        <li className="list-group-item">Trần Thị B</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeAdmin;
