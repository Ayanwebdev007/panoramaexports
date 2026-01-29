import React, { useEffect, useRef } from "react";

// import C1 from "../assets/Certificates/cert 1.webp";
// import C2 from "../assets/Certificates/cert 2.webp";
// import C3 from "../assets/Certificates/cert 3.webp";
// import C4 from "../assets/Certificates/cert 4.webp";
// import C5 from "../assets/Certificates/cert 5.webp";
// import C6 from "../assets/Certificates/cert 6.webp";
// import C7 from "../assets/Certificates/cert 7.webp";
// import C8 from "../assets/Certificates/cert 8.webp";
import AllCertificates from "../assets/Certificates/AllCertificates2026.png";

// const certificates = [
//     { id: 1, src: C1, alt: "Certificate 1" },
//     { id: 2, src: C2, alt: "Certificate 2" },
//     { id: 3, src: C3, alt: "Certificate 3" },
//     { id: 4, src: C4, alt: "Certificate 4" },
//     { id: 5, src: C5, alt: "Certificate 5" },
//     { id: 6, src: C6, alt: "Certificate 6" },
//     { id: 7, src: C7, alt: "Certificate 7" },
//     { id: 8, src: C8, alt: "Certificate 8" },
// ];

const CertificateSlider = () => {


    return (
        <div className="md:pt-6 md:px-6 md:pb-0 w-[90%] mx-auto md:px-10 lg:px-20">
            <div className="">
                <img
                    src={AllCertificates}
                    alt="certificates"
                    className="w-full object-contain block"
                />
            </div>
        </div>
    );
};

export default CertificateSlider;
