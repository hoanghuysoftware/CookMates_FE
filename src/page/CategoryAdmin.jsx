import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import "../assets/styles/categoryadmin.css";
import { fetchCategories, createCategory, updateCategory, deleteCategory } from "../features/category/categorySlice";

const CategoryAdmin = () => {
  const dispatch = useDispatch();
  const { data: categories, status } = useSelector((state) => state.categories);

  const [editCategory, setEditCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories()); // Chỉ gọi API nếu chưa có dữ liệu
    }
  }, [status, dispatch]);

  const handleSaveButton = (event) => {
    event.preventDefault();
    if (editCategory) {
      dispatch(updateCategory({ id: editCategory.id, name: categoryName }));
    } else {
      dispatch(createCategory({ name: categoryName }));
    }
    setCategoryName("");
    setEditCategory(null);
  };

  const handleUpdateClick = (category) => {
    setEditCategory(category);
    setCategoryName(category.name);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
      dispatch(deleteCategory(id));
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
              <th scope="col">Hành động</th>
            </tr>
            </thead>
            <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <th scope="row">{category.id}</th>
                <td>{category.name}</td>
                <td>
                  <Button
                    size="w-20"
                    text={"Cập nhật"}
                    type={"button"}
                    className="btn-info me-2"
                    onClick={() => handleUpdateClick(category)}
                  />
                  <Button
                    size="w-20"
                    text={"Xóa"}
                    type={"button"}
                    onClick={() => handleDeleteClick(category.id)}
                  />
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="category-admin__form col-5">
          <h2 className="category-title">{editCategory ? "Cập nhật danh mục" : "Thêm mới danh mục"}</h2>
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
              text={editCategory ? "Cập nhật" : "Lưu"}
              type={"submit"}
              className="btn-warning"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdmin;
