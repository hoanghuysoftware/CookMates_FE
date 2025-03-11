import Header from "../components/Header";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import '../assets/styles/mainlayout.css'
const MainLayout = ({ children }) => {
    return (
        <>
            <div className="fixed-header">
                <Header />
                <Navbar />
            </div>
            <main className="container mx-auto px-4">{children}</main>
            <Footer />
            <BackToTop/>
        </>
    );
};
export default MainLayout;