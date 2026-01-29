import React, { useEffect, useRef } from "react";

const LiveMap = ({ locations = [], center, zoom }) => {
    const mapRef = useRef(null); // store map instance
    const markersRef = useRef([]); // store markers

    useEffect(() => {
        // Load Google Maps script once
        const existingScript = document.getElementById("googleMaps");
        if (!existingScript) {
            const script = document.createElement("script");
            script.id = "googleMaps";
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB8HneTHpnb5MFmK5fbSADdm0vcG5ynxa4`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);

            script.onload = () => {
                setTimeout(initMap, 100); // Yield to main thread
            };
        } else {
            if (window.google && !mapRef.current) {
                setTimeout(initMap, 100); // Yield to main thread
            }
        }

        function initMap() {
            if (!window.google) return;
            mapRef.current = new window.google.maps.Map(
                document.getElementById("map"),
                {
                    center: { lat: center[0], lng: center[1] },
                    zoom: zoom,
                }
            );
        }
    }, [center, zoom]);

    // update markers when locations change
    useEffect(() => {
        if (!mapRef.current || !window.google) return;

        // Clear old markers
        markersRef.current.forEach((m) => m.setMap(null));
        markersRef.current = [];

        // Add new markers
        locations.forEach((loc) => {
            const marker = new window.google.maps.Marker({
                position: { lat: loc.lat, lng: loc.lng },
                map: mapRef.current,
                title: loc.title || "Location",
            });

            const infoWindow = new window.google.maps.InfoWindow({
                content: `
                    <div style="text-align:center; max-width:200px;">
                        <h2 style="margin:0; font-size:14px; font-weight:bold;">${loc.title}</h2>
                        <h3 style="margin:0; font-size:11px; font-weight:bold;">${loc.subtitle}</h3>
                        <h3 style="margin:0; font-size:11px; font-weight:semibold;">${loc.address}</h3>
                        <img src="${loc.image}" alt="${loc.title}" style="width:100%; height:auto; margin-top:5px; border-radius:6px;" />
                    </div>
                `,
            });

            // Show on hover
            marker.addListener("mouseover", () => {
                infoWindow.open(mapRef.current, marker);
            });
            marker.addListener("mouseout", () => {
                infoWindow.close();
            });

            markersRef.current.push(marker);
        });
    }, [locations]);

    return (
        <div className="w-full lg:h-full h-[35vh] sm:rounded-lg sm:shadow-lg" id="map"></div>
    );
};

export default LiveMap;
