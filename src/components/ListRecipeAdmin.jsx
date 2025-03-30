import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../features/recipeSlice';

const ListRecipeAdmin = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const {data: dataRecipe, status} = useSelector(state => state.recipes)

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchRecipe())
        }
    }, [status, dispatch]);

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
                    {dataRecipe.map(recipe => (
                      <tr key={recipe.id}>
                          <th scope="row">{recipe.id}</th>
                          <td style={{ maxWidth: "100px" }}>
                              <img src={recipe.thumbnail} alt="Thumbnail" className="img-thumbnail" />
                          </td>
                          <td className="text-truncate" style={{ maxWidth: "100px" }}>{recipe.title}</td>
                          <td className="" style={{ maxWidth: "200px" }}>{recipe.ingredients.map(item => {
                              return item.name+", "
                          })}</td>
                          <td className="text-truncate" style={{ maxWidth: "250px" }}>{recipe.description}</td>
                          <td>{recipe.user.fullName}</td>
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
                      )
                    )}
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
                                    <p><strong>Tên:</strong> {selectedRecipe.title}</p>
                                    <p><strong>Nguyên liệu:</strong> {selectedRecipe.ingredients.map(item => {
                                        return item.name+", "
                                    })}</p>
                                    <p><strong>Mô tả:</strong> {selectedRecipe.description}</p>
                                    <p><strong>Người đăng:</strong> {selectedRecipe.user.fullName}</p>
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
