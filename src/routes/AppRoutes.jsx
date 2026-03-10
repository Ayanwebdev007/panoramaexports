import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// Direct imports for all page components to eliminate loading delays
import OurStory from "../pages/ourStory/OurStory";
import VisionMission from "../pages/ourStory/VisionMission";
import CraftedPrecision from "../pages/CraftedPrecision/CraftedPrecision";
import MfgExcellence from "../pages/CraftedPrecision/MfgExcellence";
import SmartWarehousing from "../pages/CraftedPrecision/SmartWarehousing";
import ArtInEveryThread from "../pages/CraftedPrecision/ArtInEveryThread";
import ExactingStandards from "../pages/CraftedPrecision/ExactingStandards";
import SustainableDesigns from "../pages/CraftedPrecision/SustainableDesigns";
import AdvancedWashing from "../pages/CraftedPrecision/AdvancedWashing";
import AdaptiveCapacity from "../pages/CraftedPrecision/AdaptiveCapacity";

import Innovation from "../pages/Innovation/Innovation";
import InnovationThatLeads from "../pages/Innovation/InnovationThatLeads";
import StandardOfPerfection from "../pages/Innovation/StandardOfPerfection";
import HandcraftedLuxury from "../pages/Innovation/HandcraftedLuxury";

import Peoples from "../pages/People/Peoples";
import Responsibility from "../pages/Responsibility/Responsibility";
import CraftingTomorrow from "../pages/craftingTomorrow/CraftingTomorrow";
import GlobalFootprint from "../pages/globalFootprint/GlobalFootprint";

import Media from "../pages/media/Media";
import NewsletterViewer from "../pages/media/NewsletterViewer";
import UnitLocationMap from "../components/UnitLocationMap";
import LookBook from "../pages/LookBook/LookBook";
import LookbookViewer from "../pages/LookBook/LookbookViewer";
import ContactUs from "../pages/Contact/ContactUs";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/vision-values" element={<VisionMission />} />

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
            <Route path="/lookbook/:id" element={<LookbookViewer />} />
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
    );
}
