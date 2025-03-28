import { useEffect, useState } from 'react';
import Button from '../components/Button';
import '../assets/styles/ingredientadmin.css';
import ingredientService from '../service/IngredientService';
import { useDispatch, useSelector } from 'react-redux';
import {
  createIngredient,
  deleteIngredient,
  fetchIngredient,
  updateIngredient,
} from '../features/ingredient/ingredientSlice';

const IngredientAdmin = () => {
  const dispatch = useDispatch();
  const [ingredient, setIngredient] = useState([]);
  const {data: ingredients, status} = useSelector(state => state.ingredients)
  const [editIngredient, setEditIngredient] = useState(null);
  const [ingredientName, setIngredientName] = useState('');

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchIngredient()); // Chỉ gọi API nếu chưa có dữ liệu
    }
  }, [status, dispatch]);

  const handleSaveButton = async (event) => {
    event.preventDefault();
    if(editIngredient){
      dispatch(updateIngredient({ id: editIngredient.id, name: ingredientName }))
    }else {
      dispatch(createIngredient({ name: ingredientName }))
    }
    setIngredientName('');
    setEditIngredient(null);
    // try {
    //   let response;
    //   if (editIngredient) {
    //     response = await ingredientService.updateIngredient(editIngredient.id, { name: ingredientName });
    //   } else {
    //     response = await ingredientService.createIngredient({ name: ingredientName });
    //   }
    //
    //   // Nếu API trả về thành công
    //   if (response.status) {
    //     setIngredient(prev => (editIngredient) ?
    //       prev.map(ing => ing.id === editIngredient.id ? response.data : ing)
    //       : [...prev, response.data],
    //     );
    //     setIngredientName('');
    //     setEditIngredient(null);
    //   } else {
    //     alert(response.message || 'Có lỗi xảy ra!');
    //   }
    // } catch (error) {
    //   console.error('Error saving ingredient:', error);
    //   alert('Có lỗi xảy ra! Vui lòng thử lại.');
    // }
  };

  const handleUpdateClick = (ingredient) => {
    setEditIngredient(ingredient);
    setIngredientName(ingredient.name);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa nguyên liệu này không?')) {
      dispatch(deleteIngredient(id))
      // try {
      //   await ingredientService.deleteIngredient(id);
      // }catch (error){
      //   console.log("Error deleting ingredient !")
      // }
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
            {ingredients.map(ingredient => (
              <tr key={ingredient.id}>
                <th scope="row">{ingredient.id}</th>
                <td>{ingredient.name}</td>
                <td>{ingredient.createdAt}</td>
                <td>{ingredient.updatedAt}</td>
                <td>
                  <Button
                    size="w-20"
                    text={'Cập nhật'}
                    type={'button'}
                    className="btn-info me-2"
                    onClick={() => handleUpdateClick(ingredient)}
                  />
                  <Button
                    size="w-20"
                    text={'Xóa'}
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
              size="w-75"
              text={editIngredient ? 'Cập nhật' : 'Lưu'}
              type={'submit'}
              className="btn-warning"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default IngredientAdmin;
