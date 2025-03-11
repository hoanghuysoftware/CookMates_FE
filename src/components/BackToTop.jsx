import { useState, useEffect } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <button
                onClick={scrollToTop}
                className={`btn position-fixed bottom-0 end-0 m-3 ${isVisible ? "d-block" : "d-none"}`}
                style={{backgroundColor: '#f22726', color:'#fff'}}
            >
                <i className="fa-solid fa-angles-up"></i>
            </button>
        </>
    );
};

export default BackToTop;