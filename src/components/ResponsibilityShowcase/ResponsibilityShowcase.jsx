import React from 'react';
import { motion } from 'framer-motion';
import AutoPlayVideo from '../AutoPlayVideo';
import './ResponsibilityShowcase.css';

const ResponsibilityShowcase = ({ videoSrc }) => {
    return (
        <section className="responsibility-showcase">
            <div className="rs-container">
                <motion.div 
                    className="rs-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="rs-title">Thoughtfully Made. Responsibly Delivered</h2>
                    <div className="rs-description-container">
                        <p className="rs-description">
                            Responsibility at Panorama is embedded in how we source materials, manufacture garments, and collaborate with our partners. <br className="hidden md:block" />
                            Guided by our Responsible Craft framework, we continue to strengthen our approach across people, partnerships, and the planet.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className="rs-video-wrapper"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    <div className="rs-video-inner">
                        <AutoPlayVideo 
                            src={videoSrc}
                            className="rs-video"
                            videoClassName="rs-video-element"
                        />
                        <div className="rs-video-overlay"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResponsibilityShowcase;
