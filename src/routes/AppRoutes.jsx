import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;