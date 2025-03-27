import { useState } from "react";
import Select from "react-select";

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        description: "",
        cookingTime: "",
        serving: "",
        preTime: "",
        thumbnail: null,
        steps: [{ id: 1, content: "", image: null }],
    });

    const [customIngredient, setCustomIngredient] = useState("");
    const [availableIngredients, setAvailableIngredients] = useState([
        { value: "Thịt gà", label: "Thịt gà" },
        { value: "Thịt bò", label: "Thịt bò" },
        { value: "Cà chua", label: "Cà chua" },
        { value: "Hành tây", label: "Hành tây" },
        { value: "Tỏi", label: "Tỏi" },
        { value: "Ớt", label: "Ớt" },
        { value: "Dầu ăn", label: "Dầu ăn" },
        { value: "Nước mắm", label: "Nước mắm" }
    ]);


    const [categories, setCategories] = useState([]);
    const availableCategories = [
        { value: "Món chính", label: "Món chính" },
        { value: "Món phụ", label: "Món phụ" },
        { value: "Tráng miệng", label: "Tráng miệng" },
        { value: "Nước uống", label: "Nước uống" }
    ];
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
        setRecipe({ ...recipe, ingredients: selectedOptions.map(option => option.value) });
    };

    const handleAddCustomIngredient = () => {
        if (customIngredient.trim() !== "") {
            const newIngredient = { value: customIngredient, label: customIngredient };
            setAvailableIngredients([...availableIngredients, newIngredient]);
            setRecipe({ ...recipe, ingredients: [...recipe.ingredients, customIngredient] });
            setCustomIngredient("");
        }
    };

    const handleStepChange = (index, field, value) => {
        const updatedSteps = [...recipe.steps];
        updatedSteps[index][field] = value;
        setRecipe({ ...recipe, steps: updatedSteps });
    };

    const handleStepImageChange = (index, file) => {
        const updatedSteps = [...recipe.steps];
        updatedSteps[index].image = file;
        setRecipe({ ...recipe, steps: updatedSteps });
    };

    const addStep = () => {
        setRecipe({
            ...recipe,
            steps: [...recipe.steps, { id: recipe.steps.length + 1, content: "", image: null }],
        });
    };

    const removeStep = (index) => {
        const updatedSteps = recipe.steps.filter((_, i) => i !== index);
        setRecipe({ ...recipe, steps: updatedSteps });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Recipe Data:", recipe);
        alert("Công thức đã được lưu!");
    };

    return (
        <div className="container mt-4">
            <div className="recipe-form__container p-3 bg-white border rounded shadow">
                <h2 className="mb-4">Thêm Công Thức Mới</h2>
                <form onSubmit={handleSubmit} className="w-75 mx-auto text-start">
                    <div className="mb-3">
                        <label className="form-label">Tên công thức</label>
                        <input type="text" className="form-control" name="name" value={recipe.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Thời gian nấu</label>
                        <input type="text" className="form-control" name="cookingTime" value={recipe.cookingTime} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Số người</label>
                        <input type="text" className="form-control" name="serving" value={recipe.serving} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Thời gian chuẩn bị</label>
                        <input type="text" className="form-control" name="preTime" value={recipe.preTime} onChange={handleChange} required />
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
                        <Select
                            options={availableIngredients}
                            isMulti
                            value={availableIngredients.filter(option => recipe.ingredients.includes(option.value))}
                            onChange={handleIngredientChange}
                        />
                        <div className="mt-2 d-flex">
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Thêm nguyên liệu mới"
                                value={customIngredient}
                                onChange={(e) => setCustomIngredient(e.target.value)}
                            />
                            <button type="button" className="btn btn-secondary" onClick={handleAddCustomIngredient}>
                                Thêm
                            </button>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mô tả</label>
                        <textarea className="form-control" name="description" value={recipe.description} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ảnh đại diện</label>
                        <input type="file" className="form-control" onChange={handleThumbnailChange} />
                    </div>

                    <hr />
                    <h4 className="mb-3">Các bước thực hiện</h4>
                    {recipe.steps.map((step, index) => (
                        <div key={step.id} className="mb-3 p-3 border rounded">
                            <label className="form-label">Bước {index + 1}</label>
                            <textarea
                                className="form-control mb-2"
                                placeholder="Nhập nội dung bước..."
                                value={step.content}
                                onChange={(e) => handleStepChange(index, "content", e.target.value)}
                                required
                            />
                            <input type="file" className="form-control mb-2" onChange={(e) => handleStepImageChange(index, e.target.files[0])} />
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
