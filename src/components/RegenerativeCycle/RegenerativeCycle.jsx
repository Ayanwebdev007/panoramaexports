import React, { useState } from "react";
import "./RegenerativeCycle.css";
import {
    Sprout,
    Trees,
    UserCheck,
    Factory,
    Lightbulb,
    RefreshCcw,
    Recycle,
    Users,
    Handshake
} from "lucide-react";

const cycleSteps = [
    {
        id: 1,
        step: "Step 1",
        title: "People First",
        description: "Caring Workplaces & Fair Treatment",
        icon: UserCheck
    },
    {
        id: 2,
        step: "Step 2",
        title: "Material Responsibility",
        description: "Sustainable Fabrics & Sourcing",
        icon: Sprout
    },
    {
        id: 3,
        step: "Step 3",
        title: "Mindful Manufacturing",
        description: "Efficient & Eco-Friendly Production",
        icon: Factory
    },
    {
        id: 4,
        step: "Step 4",
        title: "Community Progress",
        description: "Supporting Local Communities",
        icon: Users
    },
    {
        id: 5,
        step: "Step 5",
        title: "Transparent Partnerships",
        description: "Ethical & Traceable Supply Chain",
        icon: Handshake
    }
];

const RegenerativeCycle = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Total steps in the cycle
    const totalSteps = cycleSteps.length;

    // Calculate rotation for each node and the entire wheel
    const rotationAngle = -(activeStep * (360 / totalSteps));

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

    return (
        <section className="regenerative-cycle-container">
            <div className="cycle-content">
                <h2 className="cycle-title font-outfit font-bold">
                    Responsible Craft <br />
                    <span className="font-light text-blue-900 leading-tight block mt-2 text-xl lg:text-2xl max-w-sm lg:max-w-md">Thoughtful Manufacturing for People, Partners and Planet</span>
                </h2>
                <p className="cycle-description font-outfit">
                    At Panorama, responsibility is not defined by a single initiative—it is reflected in the way we work, every single day.
                    We continually refine our approach through thoughtful sourcing, mindful manufacturing, and deep respect for the people behind every garment we create.
                    Guided by our Responsible Craft Framework, we focus on five core principles that shape how we manufacture our garments and collaborate with partners across our value chain—ensuring integrity, accountability, and excellence at every step.
                </p>
            </div>

            <div className="cycle-visual">
                <div className="wheel-outer">
                    <div className="wheel-track"></div>

                    <div
                        className="wheel-inner"
                        style={{ transform: `rotate(${rotationAngle}deg)` }}
                    >
                        {cycleSteps.map((step, index) => {
                            const stepRotation = (index * (360 / totalSteps));
                            const isActive = activeStep === index;
                            const IconComponent = step.icon;

                            return (
                                <div
                                    key={step.id}
                                    className={`step-node ${isActive ? "active" : ""}`}
                                    style={{
                                        transform: `rotate(${stepRotation}deg) translateY(calc(-1 * var(--wheel-radius))) rotate(${-stepRotation - rotationAngle}deg)`
                                    }}
                                    onClick={() => handleStepClick(index)}
                                >
                                    <div className="step-icon-wrapper">
                                        <IconComponent className="step-node-icon" strokeWidth={1.5} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="center-display">
                        <h3 className="center-title font-outfit">{cycleSteps[activeStep].title}</h3>
                        <p className="center-desc font-outfit">
                            {cycleSteps[activeStep].description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegenerativeCycle;
