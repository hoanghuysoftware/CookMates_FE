import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient, fetchIngredient } from '../features/ingredient/ingredientSlice';
import { fetchCategories } from '../features/category/categorySlice';
import { createRecipe, fetchRecipe } from '../features/recipeSlice';
//don vi cua nguyen lieu
const unitOptions = [
  { value: 'g', label: 'Gram (g)' },
  { value: 'kg', label: 'Kilogram (kg)' },
  { value: 'L', label: 'Liter (L)' },
  { value: 'mL', label: 'Milliliter (mL)' },
  { value: 'tsp', label: 'Teaspoon (tsp)' },
  { value: 'tbsp', label: 'Tablespoon (tbsp)' },
  { value: 'cup', label: 'Cup' },
  { value: 'piece', label: 'Piece' },
];

const AddRecipe = () => {
  const dispatch = useDispatch();
  const { data: dataRecipe, status: statusRecipe } = useSelector(state => state.recipes);
  const [recipe, setRecipe] = useState({
    userId: 1,
    title: '',
    description: '',
    cookTime: '',
    prepTime: '',
    servings: '',
    categories: [],
    ingredients: [],
    steps: [{ stepNumber: 1, description: '', file: null }],
    thumbnail: null,
  });

  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [ingredientAmount, setIngredientAmount] = useState('');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const { data: dataIngredients, status: statusIngredient } = useSelector(state => state.ingredients);
  const availableIngredients = dataIngredients.map(item => {
    return { value: item.id, label: item.name };
  });


  const [categories, setCategories] = useState([]);
  const { data: dataCategories, status: statusCategory } = useSelector(state => state.categories);
  const availableCategories = dataCategories.map(item => {
    return { value: item.id, label: item.name };
  });

  useEffect(() => {
    if (statusCategory === 'idle' || statusIngredient === 'idle' || statusRecipe === 'idle') {
      dispatch(fetchCategories());
      dispatch(fetchIngredient());
      dispatch(fetchRecipe());
    }
  }, [statusCategory, statusIngredient, statusRecipe, dispatch]);
  console.log(dataRecipe);

  const handleCategoryChange = (selectedOptions) => {
    setCategories(selectedOptions.map(option => option.value));
    setRecipe({ ...recipe, categories: selectedOptions.map(option => option.value) });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleThumbnailChange = (e) => {
    setRecipe({ ...recipe, thumbnail: e.target.files[0] });
  };

  const handleIngredientChange = (selectedOptions) => {
    setSelectedIngredient(selectedOptions);
  };
  const handleUnitChange = (selectedOption) => {
    setSelectedUnit(selectedOption);
  };
  const handleAddIngredient = () => {
    if (selectedIngredient && ingredientAmount.trim() !== '' && selectedUnit) {
      const newIngredient = {
        ingredientId: selectedIngredient.value,
        nameIngredient: selectedIngredient.label,
        quantity: ingredientAmount,
        unit: selectedUnit.value,
      };
      setRecipe({ ...recipe, ingredients: [...recipe.ingredients, newIngredient] });
      setSelectedIngredient(null);
      setIngredientAmount('');
      setSelectedUnit(null);
    }
  };
  const handleRemoveIngredient = (index) => {
    const updatedIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  // const handleAddCustomIngredient = () => {
  //     if (customIngredient.trim() !== "") {
  //         dispatch(createIngredient({ name: customIngredient }));
  //         // Cập nhật danh sách ingredients tạm thời
  //         const newIngredient = { value: customIngredient, label: customIngredient };
  //         setRecipe({ ...recipe, ingredients: [...recipe.ingredients, customIngredient] });
  //         // Cập nhật danh sách options của Select
  //         availableIngredients.push(newIngredient);
  //         setCustomIngredient("");
  //     }
  // };

  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...recipe.steps];
    updatedSteps[index][field] = value;
    setRecipe({ ...recipe, steps: updatedSteps });
  };

  const handleStepImageChange = (index, file) => {
    const updatedSteps = [...recipe.steps];
    updatedSteps[index].file = file;
    setRecipe({ ...recipe, steps: updatedSteps });
  };

  const addStep = () => {
    setRecipe({
      ...recipe,
      steps: [...recipe.steps, { stepNumber: recipe.steps.length + 1, description: '', file: null }],
    });
  };

  const removeStep = (index) => {
    const updatedSteps = recipe.steps.filter((_, i) => i !== index);
    setRecipe({ ...recipe, steps: updatedSteps });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // Convert object thành JSON và append vào FormData
    const recipeBlob = new Blob([JSON.stringify({
      title: recipe.title,
      userId: 1,
      description: recipe.description,
      cookTime: recipe.cookTime,
      preTime: recipe.preTime,
      servings: recipe.servings,
      categories: recipe.categories,
      ingredients: recipe.ingredients,
      steps: recipe.steps.map(({ stepNumber, description }) => ({ stepNumber, description })),
    })], { type: 'application/json' });

    formData.append('recipe', recipeBlob);
    // Thêm file ảnh nếu có
    recipe.steps.forEach((step, index) => {
      if (step.file) {
        formData.append('stepFiles', step.file);
        console.log(`Đã thêm file cho bước ${index + 1}:`, step.file);
      }
    });
    // Gửi request
    dispatch(createRecipe(formData));
  };

  return (
    <div className="container mt-4">
      <div className="recipe-form__container p-3 bg-white border rounded shadow">
        <h2 className="mb-4">Thêm Công Thức Mới</h2>
        <form onSubmit={handleSubmit} className="w-75 mx-auto text-start">
          <div className="mb-3">
            <label className="form-label">Tên công thức</label>
            <input type="text" className="form-control" name="title" value={recipe.title} onChange={handleChange}
                   required />
          </div>
          <div className="mb-3">
            <label className="form-label">Thời gian nấu</label>
            <input type="text" className="form-control" name="cookTime" value={recipe.cookTime} onChange={handleChange}
                   required />
          </div>
          <div className="mb-3">
            <label className="form-label">Số người</label>
            <input type="text" className="form-control" name="servings" value={recipe.servings} onChange={handleChange}
                   required />
          </div>
          <div className="mb-3">
            <label className="form-label">Thời gian chuẩn bị</label>
            <input type="text" className="form-control" name="prepTime" value={recipe.prepTime} onChange={handleChange}
                   required />
          </div>

          <div className="mb-3">
            <label className="form-label">Danh mục</label>
            <Select
              options={availableCategories}
              isMulti
              value={availableCategories.filter(option => categories.includes(option.value))}
              onChange={handleCategoryChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Nguyên liệu</label>
            <div className="d-flex gap-2">
              <Select
                options={availableIngredients}
                value={selectedIngredient}
                onChange={handleIngredientChange}
                placeholder="Chọn nguyên liệu"
                className="flex-grow-1 w-50"
              />
              <input
                type="text"
                className="form-control w-50"
                placeholder="Nhập liều lượng (vd: 200)"
                value={ingredientAmount}
                onChange={(e) => setIngredientAmount(e.target.value)}
              />
              <Select
                options={unitOptions}
                value={selectedUnit}
                onChange={handleUnitChange}
                placeholder="Đơn vị"
                className="flex-grow-1 w-25"
              />
              <button type="button" className="btn btn-secondary" onClick={handleAddIngredient}>
                Thêm
              </button>
            </div>
          </div>
          <ul className="list-group mb-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {ingredient.nameIngredient} - {ingredient.quantity} {ingredient.unit}
                <button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemoveIngredient(index)}>
                  Xóa
                </button>
              </li>
            ))}
          </ul>

          <div className="mb-3">
            <label className="form-label">Mô tả</label>
            <textarea className="form-control" name="description" value={recipe.description} onChange={handleChange}
                      required />
          </div>

          <div className="mb-3">
            <label className="form-label">Ảnh đại diện</label>
            <input type="file" className="form-control" onChange={handleThumbnailChange} />
          </div>

          <hr />
          <h4 className="mb-3">Các bước thực hiện</h4>
          {recipe.steps.map((step, index) => (
            <div key={step.stepNumber} className="mb-3 p-3 border rounded">
              <label className="form-label">Bước {index + 1}</label>
              <textarea
                className="form-control mb-2"
                placeholder="Nhập nội dung bước..."
                value={step.description}
                onChange={(e) => handleStepChange(index, 'description', e.target.value)}
                required
              />
              <input type="file" className="form-control mb-2"
                     onChange={(e) => handleStepImageChange(index, e.target.files[0])} />
              {recipe.steps.length > 1 && (
                <button type="button" className="btn btn-danger" onClick={() => removeStep(index)}>
                  Xóa bước này
                </button>
              )}
            </div>
          ))}

          <button type="button" className="btn btn-primary mb-3" onClick={addStep}>
            + Thêm Bước
          </button>

          <br />
          <button type="submit" className="btn btn-success">Lưu Công Thức</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
