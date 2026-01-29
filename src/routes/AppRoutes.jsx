import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader";
import Home from "../pages/Home";

// Lazy load all page components
// const Home = lazy(() => import("../pages/Home"));
const OurStory = lazy(() => import("../pages/ourStory/OurStory"));
const VisionMission = lazy(() => import("../pages/ourStory/VisionMission"));
const OurPurpose = lazy(() => import("../pages/ourStory/OurPurpose"));

const CraftedPrecision = lazy(() => import("../pages/CraftedPrecision/CraftedPrecision"));
const MfgExcellence = lazy(() => import("../pages/CraftedPrecision/MfgExcellence"));
const SmartWarehousing = lazy(() => import("../pages/CraftedPrecision/SmartWarehousing"));
const ArtInEveryThread = lazy(() => import("../pages/CraftedPrecision/ArtInEveryThread"));
const ExactingStandards = lazy(() => import("../pages/CraftedPrecision/ExactingStandards"));
const SustainableDesigns = lazy(() => import("../pages/CraftedPrecision/SustainableDesigns"));
const AdvancedWashing = lazy(() => import("../pages/CraftedPrecision/AdvancedWashing"));
const AdaptiveCapacity = lazy(() => import("../pages/CraftedPrecision/AdaptiveCapacity"));

const Innovation = lazy(() => import("../pages/Innovation/Innovation"));
const InnovationThatLeads = lazy(() => import("../pages/Innovation/InnovationThatLeads"));
const StandardOfPerfection = lazy(() => import("../pages/Innovation/StandardOfPerfection"));
const HandcraftedLuxury = lazy(() => import("../pages/Innovation/HandcraftedLuxury"));

const Peoples = lazy(() => import("../pages/People/Peoples"));
const Responsibility = lazy(() => import("../pages/Responsibility/Responsibility"));
const CraftingTomorrow = lazy(() => import("../pages/craftingTomorrow/CraftingTomorrow"));
const GlobalFootprint = lazy(() => import("../pages/globalFootprint/GlobalFootprint"));

const Media = lazy(() => import("../pages/media/Media"));
const NewsletterViewer = lazy(() => import("../pages/media/NewsletterViewer"));
const UnitLocationMap = lazy(() => import("../components/UnitLocationMap"));
const LookBook = lazy(() => import("../pages/LookBook/LookBook"));
const ContactUs = lazy(() => import("../pages/Contact/ContactUs"));

export default function AppRoutes() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/ourstory" element={<OurStory />} />
                <Route path="/vision-values" element={<VisionMission />} />
                <Route path="/our-purpose" element={<OurPurpose />} />

                <Route path="/craftedprecision" element={<CraftedPrecision />} />
                <Route path="/mfg-excellence" element={<MfgExcellence />} />
                <Route path="/smart-warehousing" element={<SmartWarehousing />} />
                <Route path="/art-thread" element={<ArtInEveryThread />} />
                <Route path="/exacting-standards" element={<ExactingStandards />} />
                <Route
                    path="/sustainable-designs"
                    element={<SustainableDesigns />}
                />
                <Route path="/advanced-washing" element={<AdvancedWashing />} />
                <Route path="/adaptive-capacity" element={<AdaptiveCapacity />} />

                <Route path="/innovation" element={<Innovation />} />

                <Route path="/peoples" element={<Peoples />} />
                <Route path="/responsibility" element={<Responsibility />} />
                <Route path="/craftingtomorrow" element={<CraftingTomorrow />} />
                <Route path="/globalfootprint" element={<GlobalFootprint />} />

                <Route path="/media" element={<Media />} />
                <Route path="/media/newsletter/:id" element={<NewsletterViewer />} />
                <Route path="/unitmap" element={<UnitLocationMap />} />
                <Route path="/lookbook" element={<LookBook />} />
                <Route path="/contactus" element={<ContactUs />} />

                <Route
                    path="/innovation/innovationleads"
                    element={<InnovationThatLeads />}
                />
                <Route
                    path="/innovation/standardperfection"
                    element={<StandardOfPerfection />}
                />
                <Route
                    path="/innovation/handcraftedluxury"
                    element={<HandcraftedLuxury />}
                />
            </Routes>
        </Suspense>
    );
}
