import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe, updateStatus } from '../features/recipeSlice';

const PendingRecipesAdmin = () => {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      thumbnail: 'https://via.placeholder.com/50',
      name: 'Phở bò',
      ingredients: 'Bánh phở, thịt bò, hành, gia vị',
      description: 'Món phở truyền thống của Việt Nam',
      author: 'Nguyễn Văn A',
      status: 'pending', // Trạng thái ban đầu: chờ duyệt
    },
    {
      id: 2,
      thumbnail: 'https://via.placeholder.com/50',
      name: 'Bún chả',
      ingredients: 'Bún, thịt nướng, nước mắm, rau sống',
      description: 'Món ăn đặc trưng của Hà Nội',
      author: 'Trần Văn B',
      status: 'pending',
    },
  ]);
  const {data: dataRecipes, status} = useSelector(state =>  state.recipes)
  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchRecipe())
    }
  }, [status, dispatch]);

  // Xử lý khi admin duyệt công thức
  const handleApprove = (id) => {
    const dataStatus = {
      id: id,
      flag: "APPROVED"
    }
    dispatch(updateStatus(dataStatus))
  };

  // Xử lý khi admin từ chối công thức
  const handleReject = (id) => {
    const dataStatus = {
      id: id,
      flag: "REJECTED"
    }
    dispatch(updateStatus(dataStatus))
  };

  return (
    <div className="container mt-4 ">
      {/*<h2 className="mb-3">Danh sách công thức chờ duyệt</h2>*/}
      <table className="table table-striped table-hover bg-light">
        <thead className="table-info">
          <tr>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Tên</th>
            <th>Nguyên liệu</th>
            <th>Mô tả</th>
            <th>Người đăng</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {dataRecipes.map((recipe) => (
            <tr key={recipe.id}>
              <th scope="row">{recipe.id}</th>
              <td style={{ maxWidth: '100px' }}>
                 <img src={recipe.thumbnail} alt="Thumbnail" className="img-thumbnail " />
              </td>
              <td className="text-truncate" style={{ maxWidth: '200px' }}>
                {recipe.title}
              </td>
              <td className="text-truncate" style={{ maxWidth: '200px' }}>
                {recipe.ingredients.map(item => {
                  return item.name+", "
                })}
              </td>
              <td className="text-truncate" style={{ maxWidth: '250px' }}>
                {recipe.description}
              </td>
              <td>{recipe.user.fullName}</td>
              <td>
                {recipe.status === 'PENDING' && (
                  <span className="badge bg-warning">Chờ duyệt</span>
                )}

                {recipe.status === 'APPROVED' && (
                  <span className="badge bg-success">Đã duyệt</span>
                )}
                {recipe.status === 'REJECTED' && (
                  <span className="badge bg-danger">Bị từ chối</span>
                )}
              </td>
              <td>
                {recipe.status === 'PENDING' && (
                  <>
                    <Button
                      text="Duyệt"
                      type="button"
                      className="btn btn-success me-2"
                      onClick={() => handleApprove(recipe.id)}
                      size="w-50"
                    />
                    <Button
                      size="w-50"
                      text="Từ chối"
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleReject(recipe.id)}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingRecipesAdmin;
