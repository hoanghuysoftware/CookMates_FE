import { useEffect, useState } from 'react';
import Button from '../components/Button';
import '../assets/styles/categoryadmin.css';
import categoryService from '../service/CategoryService';

const CategoryAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await categoryService.getAllCategories();
        // console.log(data);
        setCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchData();
  }, []);


  // const handleSaveButton = async (event) => {
  //   event.preventDefault();
  //   if (editCategory) {
  //     try {
  //       editCategory.name = categoryName
  //       const response = await categoryService.updateCategory(editCategory.id, editCategory);
  //       if (response.status) {
  //         setCategories(categories.map(cat =>
  //           cat.id === editCategory.id ? { ...cat, name: categoryName, updatedAt: new Date().toLocaleDateString() } : cat,
  //         ));
  //       }else{
  //         alert("Error when update category !")
  //       }
  //     } catch (error) {
  //       console.log('Error occur when update category !');
  //     }
  //     setEditCategory(null);
  //   } else {
  //     const newCategory = {
  //       id: categories.length + 1,
  //       name: categoryName,
  //       createdAt: new Date().toLocaleDateString(),
  //       updatedAt: new Date().toLocaleDateString(),
  //     };
  //     try {
  //       const response = await categoryService.createCategory(newCategory);
  //       if (response.status) {
  //         setCategories([...categories, newCategory]);
  //       }else{
  //         alert("Error when add new category !")
  //       }
  //     } catch (error) {
  //       console.log('Error occur when add new category !');
  //     }
  //   }
  //   setCategoryName('');
  // };

  const handleSaveButton = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (editCategory) {
        response = await categoryService.updateCategory(editCategory.id, { name: categoryName });
      } else {
        response = await categoryService.createCategory({ name: categoryName });
      }

      if (response.status) { // Nếu API trả về thành công
        setCategories(prev => editCategory
          ? prev.map(cat => cat.id === editCategory.id ? response.data : cat)
          : [...prev, response.data]);
        setCategoryName('');
        setEditCategory(null);
      } else {
        alert(response.message || "Có lỗi xảy ra!");
      }
    } catch (error) {
      console.error("Error saving category:", error);
      alert("Có lỗi xảy ra! Vui lòng thử lại.");
    }
  };

  const handleUpdateClick = (category) => {
    setEditCategory(category);
    setCategoryName(category.name);
  };

  const handleDeleteClick = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa danh mục này không?')) return;

    try {
      const response = await categoryService.deleteCategory(id);
      if (response.status) {
        setCategories(prev => prev.filter(cat => cat.id !== id));
      } else {
        alert(response.message || "Xóa danh mục thất bại!");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Có lỗi xảy ra! Vui lòng thử lại.");
    }
  };


  return (
    <div className="category-admin__container">
      <div className="category-admin__content row gx-1 pt-3">
        <div className="category-admin__table col-7">
          <h2 className="category-title">Bảng danh mục</h2>
          <table className="table table-striped table-hover bg-light">
            <thead className="table-info">
            <tr>
              <th scope="col">ID</th>
              <th className="w-25" scope="col">Tên danh mục</th>
              {/*<th scope="col">Ngày khởi tạo</th>*/}
              {/*<th scope="col">Ngày update</th>*/}
              <th scope="col">Hành động</th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <th scope="row">{category.id}</th>
                <td>{category.name}</td>
                {/*<td>{category.createdAt}</td>*/}
                {/*<td>{category.updatedAt}</td>*/}
                <td>
                  <Button
                    size="w-20"
                    text={'Cập nhật'}
                    type={'button'}
                    className="btn-info me-2"
                    onClick={() => handleUpdateClick(category)}
                  />
                  <Button
                    size="w-20"
                    text={'Xóa'}
                    type={'button'}
                    onClick={() => handleDeleteClick(category.id)}
                  />
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="category-admin__form col-5">
          <h2 className="category-title">{editCategory ? 'Cập nhật danh mục' : 'Thêm mới danh mục'}</h2>
          <form onSubmit={handleSaveButton}>
            <div className="form-floating mb-3 w-75 mx-auto">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Tên danh mục"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <label htmlFor="floatingInput">Nhập tên danh mục</label>
            </div>
            <Button
              size="w-75"
              text={editCategory ? 'Cập nhật' : 'Lưu'}
              type={'submit'}
              className="btn-warning"
              // onClick={handleSaveButton}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdmin;
