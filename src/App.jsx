import React, { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function App() {
    const [entered, setEntered] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
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
            {!entered && <Landing onEnter={handleEnter} />}
            {entered && (
                <div className="">
                    <Navbar />
                    <AppRoutes />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
