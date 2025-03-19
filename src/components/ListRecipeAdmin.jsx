import { useState } from 'react';
import Button from '../components/Button';

const ListRecipeAdmin = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const recipe = {
        id: 1,
        thumbnail: "anhr",
        name: "Phở bò",
        ingredients: "Bánh phở, thịt bò, hành, gia vị",
        description: "Món phở truyền thống của Việt Nam",
        author: "Nguyễn Văn A",
    };

    const handleView = (recipe) => {
        setSelectedRecipe(recipe);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedRecipe(null);
    };

    return (
        <div>
            <table className="table table-striped table-hover bg-light">
                <thead className="table-info">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Nguyên liệu</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Người đăng</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{recipe.id}</th>
                        <td style={{ maxWidth: "100px" }}>
                            {/* <img src={recipe.thumbnail} alt="Thumbnail" className="img-thumbnail" /> */}
                            <img className='w-100' src={`${process.env.PUBLIC_URL}/item.jpg`} alt="logo" />
                        </td>
                        <td className="text-truncate" style={{ maxWidth: "100px" }}>{recipe.name}</td>
                        <td className="text-truncate" style={{ maxWidth: "200px" }}>{recipe.ingredients}</td>
                        <td className="text-truncate" style={{ maxWidth: "250px" }}>{recipe.description}</td>
                        <td>{recipe.author}</td>
                        <td>
                            <Button
                                size='w-20'
                                text={"Xem"}
                                type={'button'}
                                className='btn btn-info'
                                onClick={() => handleView(recipe)}
                                dataToggle="modal"
                                dataTarget="#recipeModal"
                            />
                            <Button
                                size='w-20'
                                text={"Xóa"}
                                type={'button'}
                                className='btn btn-warning ms-1'
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Modal hiển thị thông tin món ăn */}
            <div className="modal fade" id="recipeModal" tabIndex="-1" aria-labelledby="recipeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="recipeModalLabel">Thông tin món ăn</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            {selectedRecipe && (
                                <div>
                                    <p><strong>ID:</strong> {selectedRecipe.id}</p>
                                    <p><strong>Tên:</strong> {selectedRecipe.name}</p>
                                    <p><strong>Nguyên liệu:</strong> {selectedRecipe.ingredients}</p>
                                    <p><strong>Mô tả:</strong> {selectedRecipe.description}</p>
                                    <p><strong>Người đăng:</strong> {selectedRecipe.author}</p>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListRecipeAdmin;
