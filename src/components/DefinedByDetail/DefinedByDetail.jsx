import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import './DefinedByDetail.css';

// Assets
import img1 from '../../assets/Details/detail-1.webp';
import img2 from '../../assets/Details/detail-2.webp';
import img3 from '../../assets/Details/detail-3.webp';
import img4 from '../../assets/Details/detail-4.webp';
import img5 from '../../assets/Details/detail-5.webp';
import img6 from '../../assets/Details/detail-6.webp';
import img7 from '../../assets/Details/detail-7.webp';
import img8 from '../../assets/Details/detail-8.webp';
import img9 from '../../assets/Details/detail-9.webp';

const DefinedByDetail = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Duplicating items for infinite loop with SUBTLE rotations and vertical offsets
    const baseItems = [
        { id: 1, src: img1, rotation: -4, y: -30 },
        { id: 2, src: img2, rotation: 3, y: 15 },
        { id: 3, src: img3, rotation: -2, y: -10 },
        { id: 4, src: img4, rotation: 5, y: 35 },
        { id: 5, src: img5, rotation: -3, y: -5 },
        { id: 6, src: img6, rotation: 4, y: 20 },
        { id: 7, src: img7, rotation: -5, y: -25 },
        { id: 8, src: img8, rotation: 2, y: 10 },
        { id: 9, src: img9, rotation: -3, y: 40 },
    ];

    const items = Array.from({ length: 2 }).flatMap((_, i) => 
        baseItems.map(item => ({ 
            ...item, 
            id: `${item.id}-${i}` // Unique IDs for each repeated item
        }))
    );

    return (
        <section className="detail-section">
            <div className="detail-header-container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="detail-title"
                >
                    Defined by Detail
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    className="detail-description"
                >
                    From intricate embellishments to refined finishes, our work reflects a deep attention to detail. <br className="hidden md:block" />
                    We combine skilled craftsmanship with technical expertise to create garments that meet the expectations of global brands.
                </motion.p>
            </div>

            <div className="detail-gallery-viewport">
                {/* Custom Navigation */}
                <button ref={prevRef} className="detail-nav-btn left">
                    <ChevronLeft size={36} strokeWidth={1} />
                </button>
                <button ref={nextRef} className="detail-nav-btn right">
                    <ChevronRight size={36} strokeWidth={1} />
                </button>

                <Swiper
                    modules={[Navigation, FreeMode]}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={2}
                    spaceBetween={-60} 
                    loopAdditionalSlides={5}
                    watchSlidesProgress={false}
                    grabCursor={true}
                    speed={800} /* Silky smooth transition speed */
                    freeMode={{
                        enabled: true,
                        sticky: true,
                        momentumRatio: 0.35,
                        momentumVelocityRatio: 0.35,
                        momentumBounce: false
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        320: { spaceBetween: -30 },
                        768: { spaceBetween: -60 } 
                    }}
                    className="detail-swiper"
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id} className="detail-slide">
                            {({ isActive }) => (
                                <div 
                                    className={`detail-card-wrapper ${isActive ? 'active' : ''}`}
                                    style={{ 
                                        '--initial-rotation': `${item.rotation}deg`,
                                        '--y-offset': `${item.y}px`
                                    }}
                                >
                                    <div className="detail-image-inner">
                                        <img src={item.src} alt="Product Detail" />
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default DefinedByDetail;
