import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Check } from "lucide-react";
import discoverPanoramaImg from "../../assets/People/Discover Panorama Image.jpeg";

export default function NewsletterPopup({ isOpen, onClose }) {
    const [isSubscribed, setIsSubscribed] = useState(false);

    // Reset subscription state when modal opens
    useEffect(() => {
        if (isOpen) setIsSubscribed(false);
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white w-full max-w-5xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row h-auto max-h-[95vh] md:h-[550px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Left side: Image */}
                        <div className="hidden md:block w-2/5 relative h-full overflow-hidden">
                            <img
                                src={discoverPanoramaImg}
                                alt="Discover Panorama"
                                className="w-full h-full object-cover scale-[2.0] transition-transform duration-500"
                                style={{
                                    objectPosition: "center 10%",
                                    transformOrigin: "center 10%",
                                }}
                            />
                            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                        </div>

                        {/* Right side: Form */}
                        <div className="w-full md:w-3/5 p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col relative overflow-hidden justify-center min-h-[400px]">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-10"
                            >
                                <X size={28} strokeWidth={1} />
                            </button>

                            <AnimatePresence mode="wait">
                                {isSubscribed ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-8"
                                    >
                                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 border border-gray-100">
                                            <Check size={36} strokeWidth={1} />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase font-outfit">Welcome</h2>
                                            <p className="text-[14px] text-gray-500 font-light max-w-xs mx-auto leading-relaxed">
                                                Successfully subscribed! You are now a member of the Panorama inner circle.
                                            </p>
                                        </div>
                                        <button
                                            onClick={onClose}
                                            className="bg-gray-900 text-white px-10 py-4 text-[11px] font-medium tracking-[0.25em] uppercase hover:bg-black transition-all duration-300 shadow-xl"
                                        >
                                            Continue
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-10 md:space-y-12"
                                    >
                                        <div className="space-y-8 md:space-y-10 text-center md:text-left">
                                            <span className="text-[10px] tracking-[0.25em] font-medium text-gray-400 uppercase block">Newsletter</span>
                                            <div className="space-y-3">
                                                <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 leading-tight font-outfit">
                                                    Discover Panorama
                                                </h2>
                                                <p className="text-[13px] text-gray-500 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
                                                    Subscribe to receive updates and be inspired by the new collections.
                                                </p>
                                                <p className="text-[10px] text-gray-400 italic">Fields marked with an asterisk (*) are required</p>
                                            </div>
                                        </div>

                                        <form
                                            className="space-y-8 md:space-y-10"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                setIsSubscribed(true);
                                            }}
                                        >
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-medium tracking-[0.15em] text-gray-900 uppercase">
                                                    e-mail *
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter e-mail"
                                                    className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300 rounded-none font-light"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-6 md:space-y-8">
                                                <button
                                                    type="submit"
                                                    className="w-full bg-[#1A1A1A] text-white py-5 text-[11px] font-medium tracking-[0.25em] uppercase hover:bg-black transition-all duration-500 flex items-center justify-center gap-3 shadow-lg"
                                                >
                                                    <Mail size={16} strokeWidth={1.5} />
                                                    SUBSCRIBE TO NEWSLETTER
                                                </button>

                                                <div className="space-y-4 text-center md:text-left">
                                                    <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                                        By entering your e-mail, you agree to receive Panorama communications. For more, see our <span className="underline cursor-pointer hover:text-gray-600 transition-colors">Privacy Policy</span>.
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
