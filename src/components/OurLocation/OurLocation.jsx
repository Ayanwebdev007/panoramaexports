import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ChevronDown, Maximize2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';

// Fix for default marker icon issues in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.webp',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.webp',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.webp',
});

// --- Custom Premium Icon Generator ---
const createCustomIcon = () => {
    // We render the Lucide React component to static markup to use inside Leaflet's divIcon
    const iconMarkup = renderToStaticMarkup(
        <div className="relative flex items-center justify-center w-12 h-12">
            {/* Pulsing Outer Ring */}
            <div className="absolute inset-0 bg-[#AD1E1E] rounded-full opacity-30 animate-pulse scale-150"></div>
            {/* Solid Outer Ring */}
            <div className="absolute inset-2 bg-white rounded-full shadow-lg"></div>
            {/* Inner Red Circle */}
            <div className="absolute inset-3 bg-gradient-to-br from-[#AD1E1E] to-[#8B1818] rounded-full flex items-center justify-center text-white transform-gpu">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            </div>
            {/* Needle Point */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#8B1818] rotate-45 transform origin-center rounded-sm"></div>
        </div>
    );

    return L.divIcon({
        html: iconMarkup,
        className: 'custom-leaflet-icon',
        iconSize: [48, 48],
        iconAnchor: [24, 48],
        popupAnchor: [0, -48]
    });
};

const premiumIcon = createCustomIcon();


const locations = [
    {
        id: 1,
        name: "Unit 01",
        code: "Plot No 08, DLF Industrial Area Phase – I, Faridabad, Haryana",
        region: "Faridabad, Haryana",
        lat: 28.4684,
        lng: 77.3061,
        link: "https://www.google.com/maps/search/?api=1&query=28.4684,77.3061"
    },
    {
        id: 2,
        name: "Unit 02",
        code: "Plot No. 11 DLF Industrial Area– Phase I, Faridabad, Haryana",
        region: "Faridabad, Haryana",
        lat: 28.4715, // Offset slightly north for visibility
        lng: 77.3100, // Offset slightly east for visibility
        link: "https://www.google.com/maps/search/?api=1&query=28.4715,77.3100"
    },
    {
        id: 3,
        name: "Unit 03",
        code: "Plot No 67, Sector 27C, Faridabad, Haryana",
        region: "Faridabad, Haryana",
        lat: 28.4550,
        lng: 77.3150,
        link: "https://www.google.com/maps/search/?api=1&query=28.4550,77.3150"
    },
    {
        id: 4,
        name: "Unit 04",
        code: "Plot No 16/3, Delhi Mathura Road, Faridabad, Haryana",
        region: "Faridabad, Haryana",
        lat: 28.4350,
        lng: 77.3200,
        link: "https://www.google.com/maps/search/?api=1&query=28.4350,77.3200"
    },
    {
        id: 5,
        name: "Unit 05",
        code: "I 20, Sector 32, Block A, DLF Industrial Area, Faridabad, Haryana 121003",
        region: "Faridabad, Haryana",
        lat: 28.4150,
        lng: 77.3300,
        link: "https://www.google.com/maps/search/?api=1&query=28.4150,77.3300"
    },
    {
        id: 6,
        name: "Unit 06",
        code: "PANORAMA EXPORTS D144, Sector 63, Noida",
        region: "Noida, UP",
        lat: 28.6180,
        lng: 77.3892,
        link: "https://www.google.com/maps/search/?api=1&query=28.6180,77.3892"
    }
];

// Component to handle map flying (smooth pan/zoom)
function MapFlyTo({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom, {
                duration: 1.2, // Snappier and faster
                easeLinearity: 0.25,
                animate: true
            });
        }
    }, [center, zoom, map]);
    return null;
}

// Component to fix "grey map" issue by calling invalidateSize on mount
// And also to fit all markers in view during initial load
function MapResizer() {
    const map = useMap();
    useEffect(() => {
        const timer = setTimeout(() => {
            map.invalidateSize();
            // Automatically fit all markers in view on load
            const markerCoords = locations.map(l => [l.lat, l.lng]);
            const bounds = L.latLngBounds(markerCoords);
            map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
        }, 150);
        return () => clearTimeout(timer);
    }, [map]);
    return null;
}

const OurLocation = () => {
    const [activeLocation, setActiveLocation] = useState(null);
    const markerRefs = useRef({}); // Store refs to markers

    // Initial Overview Center (Better starting point)
    const initialCenter = [28.52, 77.35];
    const initialZoom = 10;

    // Active state derived values
    const mapCenter = activeLocation ? [activeLocation.lat, activeLocation.lng] : initialCenter;
    const mapZoom = activeLocation ? 16 : initialZoom;

    // Effect to open popup when activeLocation changes via button click
    useEffect(() => {
        if (activeLocation && markerRefs.current[activeLocation.id]) {
            markerRefs.current[activeLocation.id].openPopup();
        }
    }, [activeLocation]);

    return (
        <section className="relative w-full py-10 sm:py-20 bg-[#F9F6F1] overflow-hidden">


            {/* Header - Perfectly Aligned with Human Touch/Manufacturing Units */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 text-left mb-6 sm:mb-12"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#AD1E1E] tracking-tight whitespace-nowrap">
                    Our Location
                </h2>
            </motion.div>

            <div className="w-[90%] max-w-[1600px] mx-auto relative z-10 flex flex-col items-center">


                {/* Location Bars */}
                <div className="grid grid-cols-3 sm:flex sm:flex-row gap-2 sm:gap-6 justify-center w-full px-2 sm:px-0">
                    {locations.map((loc) => (
                        <motion.button
                            key={loc.id}
                            onClick={() => setActiveLocation(loc)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: loc.id * 0.1 }}
                            className={`flex flex-col items-center py-2 sm:py-4 px-1 sm:px-6 rounded-xl sm:rounded-2xl border transition-all duration-300 sm:flex-1 hover:shadow-lg hover:-translate-y-1 ${activeLocation?.id === loc.id
                                ? 'bg-[#AD1E1E] border-[#AD1E1E] text-white shadow-xl scale-105 z-10'
                                : 'bg-white border-gray-100 text-gray-900 hover:border-[#AD1E1E]/30'
                                }`}
                        >
                            <div className={`p-1.5 sm:p-3 rounded-full mb-1 sm:mb-3 ${activeLocation?.id === loc.id ? 'bg-white/20 text-white' : 'bg-[#AD1E1E]/5 text-[#AD1E1E]'
                                }`}>
                                <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
                            </div>
                            <h3 className="text-[10px] sm:text-lg font-bold mb-0.5 sm:mb-1 whitespace-nowrap">{loc.name}</h3>
                        </motion.button>
                    ))}
                </div>

                {/* Explicit Vertical Spacer - Brute Force Gap */}
                <div className="w-full h-4 sm:h-8 min-h-[16px] bg-transparent shrink-0"></div>

                {/* Leaflet Map Section - Clean positioning for stability */}
                <div
                    className="w-full h-[350px] sm:h-[500px] md:h-[600px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-0 mx-auto"
                >
                    <MapContainer
                        center={initialCenter}
                        zoom={initialZoom}
                        style={{ height: '100%', width: '100%' }}
                        scrollWheelZoom={false}
                        preferCanvas={true} // Keep canvas for performance
                    >
                        {/* Google Maps Roadmap Tiles - Optimized for Performance */}
                        <TileLayer
                            url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                            attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
                            updateWhenIdle={true} // Wait until pan stops to load new tiles
                            keepBuffer={4}        // Keep more off-screen tiles in memory
                            updateInterval={200}  // Throttle tile updates
                        />

                        {/* Programmatic FlyTo Controller */}
                        <MapFlyTo center={mapCenter} zoom={mapZoom} />

                        {/* Force map to fill the container after mounting */}
                        <MapResizer />

                        {/* Rendering REAL Markers at Exact Coordinates with Premium Setup */}
                        {locations.map((loc) => (
                            <Marker
                                key={loc.id}
                                position={[loc.lat, loc.lng]}
                                icon={premiumIcon}
                                eventHandlers={{
                                    click: () => setActiveLocation(loc),
                                }}
                                ref={(el) => (markerRefs.current[loc.id] = el)}
                            >
                                <Popup className="premium-popup">
                                    <div className="min-w-[240px]">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="bg-[#AD1E1E]/5 p-2.5 rounded-xl text-[#AD1E1E] shrink-0 shadow-sm border border-[#AD1E1E]/10">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{loc.name}</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">{loc.code}</p>
                                            </div>
                                        </div>

                                        <a
                                            href={loc.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full bg-[#AD1E1E] !text-white text-sm font-bold px-4 py-4 rounded-xl hover:bg-[#8B1818] transition-all group shadow-md no-underline"
                                        >
                                            <span>View on Google Maps</span>
                                            <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {/* View All Button */}
                    {activeLocation && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={() => {
                                setActiveLocation(null);
                                // Close all popups when viewing all
                                Object.values(markerRefs.current).forEach(marker => {
                                    if (marker) marker.closePopup();
                                });
                            }}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#AD1E1E] rounded-full shadow-lg text-[10px] sm:text-base font-bold text-white hover:bg-white hover:text-[#AD1E1E] transition-all z-[1000] border border-transparent hover:border-[#AD1E1E] flex items-center gap-2 tracking-wide px-4 py-2 sm:px-10 sm:py-4"
                        >
                            <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" /> View All Units
                        </motion.button>
                    )}
                </div>

                {/* Legend/Note */}
                <div className="mt-8 text-center text-gray-400 text-sm italic">
                    Interactive Map • Select a unit to explore our footprint
                </div>

            </div>
        </section>
    );
};

export default OurLocation;
