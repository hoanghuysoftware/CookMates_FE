import Header from '../components/Header';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import '../assets/styles/mainlayout.css';

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="fixed-header">
        <Header />
        <Navbar />
      </div>
      <div style={{backgroundColor: 'rgba(252,252,252)'}}>
        <div className="px-2">
          <main className=" shadow-lg container mx-auto px-3">{children}</main>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};
export default MainLayout;