import { useState } from 'react';
import Button from '../components/Button';
import '../assets/styles/ingredientadmin.css'

const IngredientAdmin = () => {
    const [ingredient, setIngredient] = useState([
        { id: 1, name: 'Cà chua', createdAt: '19-3-2025', updatedAt: '20-3-2025' }
    ]);
    const [editIngredient, setEditIngredient] = useState(null);
    const [ingredientName, setIngredientName] = useState('');

    const handleSaveButton = (event) => {
        event.preventDefault();
        if (editIngredient) {
            setIngredient(ingredient.map(cat =>
                cat.id === editIngredient.id ? { ...cat, name: ingredientName, updatedAt: new Date().toLocaleDateString() } : cat
            ));
            setEditIngredient(null);
        } else {
            const newIngredient = {
                id: ingredient.length + 1,
                name: ingredientName,
                createdAt: new Date().toLocaleDateString(),
                updatedAt: new Date().toLocaleDateString()
            };
            setIngredient([...ingredient, newIngredient]);
        }
        setIngredientName('');
    };

    const handleUpdateClick = (ingredient) => {
        setEditIngredient(ingredient);
        setIngredientName(ingredient.name);
    };

    const handleDeleteClick = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa nguyên liệu này không?')) {
            setIngredient(ingredient.filter(ing => ing.id !== id));
        }
    };

    return (
        <div className="ingredient-admin__container">
            <div className="ingredient-admin__content row gx-2 pt-3">
                <div className="ingredient-admin__table col-8">
                    <h2 className="ingredient-title">Bảng nguyên liệu</h2>
                    <table className="table table-striped table-hover bg-light">
                        <thead className="table-info">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên nguyên liệu</th>
                                <th scope="col">Ngày khởi tạo</th>
                                <th scope="col">Ngày update</th>
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredient.map(ingredient => (
                                <tr key={ingredient.id}>
                                    <th scope="row">{ingredient.id}</th>
                                    <td>{ingredient.name}</td>
                                    <td>{ingredient.createdAt}</td>
                                    <td>{ingredient.updatedAt}</td>
                                    <td>
                                        <Button
                                            size='w-20'
                                            text={"Cập nhật"}
                                            type={'button'}
                                            className='btn-info me-2'
                                            onClick={() => handleUpdateClick(ingredient)}
                                        />
                                        <Button
                                            size='w-20'
                                            text={"Xóa"}
                                            type={'button'}
                                            onClick={() => handleDeleteClick(ingredient.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="ingredient-admin__form col-4">
                    <h2 className="ingredient-title">{editIngredient ? 'Cập nhật nguyên liệu' : 'Thêm mới nguyên liệu'}</h2>
                    <form onSubmit={handleSaveButton}>
                        <div className="form-floating mb-3 w-75 mx-auto">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Tên nguyên liệu"
                                value={ingredientName}
                                onChange={(e) => setIngredientName(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Nhập tên nguyên liệu</label>
                        </div>
                        <Button
                            size='w-75'
                            text={editIngredient ? "Cập nhật" : "Lưu"}
                            type={'submit'}
                            className='btn-warning'
                        // onClick={handleSaveButton}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default IngredientAdmin;
