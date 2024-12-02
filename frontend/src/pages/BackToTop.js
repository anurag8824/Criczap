import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on the scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-20 right-4 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-900 hover:shadow-lg focus:outline-none"
                    aria-label="Back to Top"
                >
                 <FaArrowCircleUp/>
                </button>

                
            )}
        </>
    );
};

export default BackToTop;
