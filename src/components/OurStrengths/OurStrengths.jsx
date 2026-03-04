import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import './OurStrengths.css';

const Counter = ({ from = 0, to, duration = 2, prefix = "", suffix = "", finalDisplay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    const [displayValue, setDisplayValue] = useState(from);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (isInView) {
            setIsDone(false);
            const controls = animate(from, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (value) => setDisplayValue(Math.round(value)),
                onComplete: () => setIsDone(true)
            });
            return () => controls.stop();
        } else {
            setDisplayValue(from);
            setIsDone(false);
        }
    }, [isInView, from, to, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {isDone && finalDisplay !== undefined ? finalDisplay : displayValue.toLocaleString()}
            {(!finalDisplay || isDone) ? suffix : ""}
        </span>
    );
};

const TextReveal = ({ text }) => {
    const letters = Array.from(text);
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            style={{ display: "inline-block" }}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

const OurStrengths = () => {
    const highlights = [
        {
            type: "count",
            from: 0,
            to: 5000,
            suffix: "+",
            text: "EMPLOYEES"
        },
        {
            type: "count",
            from: 0,
            to: 45,
            suffix: "%",
            text: "WOMEN"
        },
        {
            type: "count",
            from: 0,
            to: 12000000,
            finalDisplay: "12",
            suffix: " MILLION",
            text: "GARMENTS ANNUALLY"
        },
        {
            type: "count",
            from: 0,
            to: 6,
            text: "UNITS"
        }
    ];

    const springTransition = { type: "spring", stiffness: 50, damping: 20 };

    return (
        <section className="key-highlights">
            <div className="highlights-container">
                <motion.h2
                    className="highlights-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    Growing Everyday
                </motion.h2>

                <div className="highlights-grid">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="highlight-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1, ...springTransition }}
                        >
                            <span className="highlight-number">
                                {item.type === "count" ? (
                                    <Counter
                                        from={item.from}
                                        to={item.to}
                                        prefix={item.prefix}
                                        suffix={item.suffix}
                                        finalDisplay={item.finalDisplay}
                                        separateTPA={item.separateTPA}
                                    />
                                ) : (
                                    <TextReveal text={item.content} />
                                )}
                            </span>
                            <span className="highlight-text">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStrengths;
