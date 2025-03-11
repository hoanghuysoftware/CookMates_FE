const Pagination = ({ totalPage, currentPage, onPageChange }) => {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>Previous</button>
                </li>
                {Array.from({ length: totalPage }, (_, index) => (
                    <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(index + 1)}>
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPage ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
