import React from 'react';
import { motion } from 'framer-motion';
import './ManufacturingExcellence.css';

// Importing actual unit images
import plant1 from '../../assets/OurInfrastructure/unit_1.webp';
import plant2 from '../../assets/OurInfrastructure/unit_2.webp';
import plant3 from '../../assets/OurInfrastructure/Unit3.webp';
import plant4 from '../../assets/OurInfrastructure/Unit4.webp';
import plant5 from '../../assets/OurInfrastructure/unit_5.webp';
import plant6 from '../../assets/OurInfrastructure/unit_6.webp';

const ManufacturingExcellence = () => {
    const units = [
        {
            id: 1,
            src: plant1,
            title: "Unit 01",
            location: "Plot No 08, DLF Industrial Area Phase – I, Faridabad, Haryana"
        },
        {
            id: 2,
            src: plant2,
            title: "Unit 02",
            location: "Plot No. 11 DLF Industrial Area– Phase I, Faridabad, Haryana"
        },
        {
            id: 3,
            src: plant3,
            title: "Unit 03",
            location: "Plot No 67, Sector 27C, Faridabad, Haryana"
        },
        {
            id: 4,
            src: plant4,
            title: "Unit 04",
            location: "Plot No 16/3, Delhi Mathura Road, Faridabad, Haryana"
        },
        {
            id: 5,
            src: plant5,
            title: "Unit 05",
            location: "I 20, Sector 32, Block A, DLF Industrial Area, Faridabad, Haryana 121003"
        },
        {
            id: 6,
            src: plant6,
            title: "Unit 06",
            location: "PANORAMA EXPORTS D144, Sector 63, Noida"
        }
    ];

    return (
        <section className="manufacturing-section">
            <div className="manufacturing-container">
                <div className="mfg-header">
                    <div className="mfg-title-wrapper">
                        <h2 className="mfg-title">
                            Manufacturing <span className="mfg-title-accent">Units</span>
                        </h2>
                    </div>
                    <h3 className="mfg-subtitle max-w-2xl leading-relaxed">
                        Integrated cut-to-pack manufacturing that delivers precision, efficiency, and uncompromising quality.
                    </h3>
                </div>
            </div>

            <motion.div
                className="mfg-gallery"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >
                {units.map((unit, index) => (
                    <motion.div
                        key={unit.id}
                        className="mfg-unit-item"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: index * 0.08
                                }
                            }
                        }}
                        style={{ backgroundImage: `url(${unit.src})` }}
                    >
                        {/* Overlay Gradients */}
                        <div className="mfg-overlay-base"></div>
                        <div className="mfg-overlay-gradient"></div>

                        {/* Content */}
                        <div className="mfg-unit-content">
                            <motion.div
                                className="mfg-unit-info"
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { delay: 0.4 + (index * 0.1) } }
                                }}
                            >
                                <h4 className="mfg-unit-title">{unit.title}</h4>
                                <p className="mfg-unit-location">{unit.location}</p>
                                <div className="mfg-unit-line"></div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ManufacturingExcellence;
