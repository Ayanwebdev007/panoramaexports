import React, { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import NewsletterPopup from "./components/Newsletter/NewsletterPopup";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function App() {
    const [entered, setEntered] = useState(true); // Default to true to bypass loader
    const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1, 
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            smoothWheel: true,
            syncTouch: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const handleEnter = () => {
        setEntered(true);
    };

    return (
        <>
            {/* {!entered && <Landing onEnter={handleEnter} />} */}
            {entered && (
                <div className="">
                    <Navbar setIsNewsletterOpen={setIsNewsletterOpen} />
                    <AppRoutes />
                    <Footer setIsNewsletterOpen={setIsNewsletterOpen} />
                    <NewsletterPopup 
                        isOpen={isNewsletterOpen} 
                        onClose={() => setIsNewsletterOpen(false)} 
                    />
                </div>
            )}
        </>
    );
}

export default App;
