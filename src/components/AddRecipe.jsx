import { useState } from "react";

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "",
        description: "",
        thumbnail: null,
        steps: [{ id: 1, content: "", image: null }],
    });

    // Xử lý thay đổi nội dung của công thức
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    // Xử lý thay đổi ảnh đại diện
    const handleThumbnailChange = (e) => {
        setRecipe({ ...recipe, thumbnail: e.target.files[0] });
    };

    // Xử lý thay đổi nội dung của từng bước làm
    const handleStepChange = (index, field, value) => {
        const updatedSteps = [...recipe.steps];
        updatedSteps[index][field] = value;
        setRecipe({ ...recipe, steps: updatedSteps });
    };

    // Xử lý thay đổi ảnh của từng bước làm
    const handleStepImageChange = (index, file) => {
        const updatedSteps = [...recipe.steps];
        updatedSteps[index].image = file;
        setRecipe({ ...recipe, steps: updatedSteps });
    };

    // Thêm bước mới
    const addStep = () => {
        setRecipe({
            ...recipe,
            steps: [...recipe.steps, { id: recipe.steps.length + 1, content: "", image: null }],
        });
    };

    // Xóa bước
    const removeStep = (index) => {
        const updatedSteps = recipe.steps.filter((_, i) => i !== index);
        setRecipe({ ...recipe, steps: updatedSteps });
    };

    // Gửi công thức (chưa tích hợp API)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Recipe Data:", recipe);
        alert("Công thức đã được lưu!");
    };

    return (
        <div className="container mt-4">
            <div className="recipe-form__container p-3 bg-white border rounded">
                <h2 className="mb-4">Thêm Công Thức Mới</h2>
                <form onSubmit={handleSubmit} className="w-75 mx-auto text-start">
                    {/* Tên công thức */}
                    <div className="mb-3">
                        <label className="form-label">Tên công thức</label>
                        <input type="text" className="form-control" name="name" value={recipe.name} onChange={handleChange} required />
                    </div>

                    {/* Nguyên liệu */}
                    <div className="mb-3">
                        <label className="form-label">Nguyên liệu</label>
                        <textarea className="form-control" name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
                    </div>

                    {/* Mô tả */}
                    <div className="mb-3">
                        <label className="form-label">Mô tả</label>
                        <textarea className="form-control" name="description" value={recipe.description} onChange={handleChange} required />
                    </div>

                    {/* Ảnh đại diện */}
                    <div className="mb-3">
                        <label className="form-label">Ảnh đại diện</label>
                        <input type="file" className="form-control" onChange={handleThumbnailChange} />
                    </div>

                    <hr />

                    {/* Danh sách bước làm */}
                    <h4 className="mb-3">Các bước thực hiện</h4>
                    {recipe.steps.map((step, index) => (
                        <div key={step.id} className="mb-3 p-3 border rounded">
                            <label className="form-label">Bước {index + 1}</label>

                            {/* Nội dung bước */}
                            <textarea
                                className="form-control mb-2"
                                placeholder="Nhập nội dung bước..."
                                value={step.content}
                                onChange={(e) => handleStepChange(index, "content", e.target.value)}
                                required
                            />

                            {/* Ảnh bước */}
                            <input type="file" className="form-control mb-2" onChange={(e) => handleStepImageChange(index, e.target.files[0])} />

                            {/* Nút xóa bước */}
                            {recipe.steps.length > 1 && (
                                <button type="button" className="btn btn-danger" onClick={() => removeStep(index)}>
                                    Xóa bước này
                                </button>
                            )}
                        </div>
                    ))}

                    {/* Nút thêm bước */}
                    <button type="button" className="btn btn-primary mb-3" onClick={addStep}>
                        + Thêm Bước
                    </button>

                    <br />

                    {/* Nút lưu công thức */}
                    <button type="submit" className="btn btn-success">Lưu Công Thức</button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
