import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const scrollToElement = () => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    return true;
                }
                return false;
            };

            if (!scrollToElement()) {
                const timer1 = setTimeout(scrollToElement, 150);
                const timer2 = setTimeout(scrollToElement, 400);
                return () => {
                    clearTimeout(timer1);
                    clearTimeout(timer2);
                };
            }
            return;
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}
