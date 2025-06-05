import React, { useEffect, useRef } from 'react';
import { Therapist } from '../types';
import { APP_ROUTES } from '../constants';

// Declare Leaflet's global variable 'L' to satisfy TypeScript
declare var L: any;

interface MapDisplayProps {
  therapists: Therapist[];
}

const DEFAULT_CENTER: [number, number] = [-6.2088, 106.8456]; // Jakarta, Indonesia
const DEFAULT_ZOOM = 6; // Zoom level to see a good portion of Indonesia
const MIN_ZOOM_FIT_BOUNDS = 13; // Allow closer zoom when fitting bounds for specific locations

const MapDisplay: React.FC<MapDisplayProps> = ({ therapists }) => {
  const mapRef = useRef<any>(null); // To hold the Leaflet map instance
  const mapContainerRef = useRef<HTMLDivElement>(null); // To hold the div element for the map
  const markersLayerRef = useRef<any>(null); // To hold the layer group for markers

  useEffect(() => {
    if (typeof L === 'undefined' || !mapContainerRef.current) {
      // Leaflet not loaded yet, or container not ready
      return;
    }

    // Initialize map only once
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView(DEFAULT_CENTER, DEFAULT_ZOOM);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
      markersLayerRef.current = L.layerGroup().addTo(mapRef.current);
    }

    // Update markers when therapists list changes
    if (mapRef.current && markersLayerRef.current) {
      markersLayerRef.current.clearLayers(); // Clear existing markers

      if (therapists.length > 0) {
        const markerBounds: [number, number][] = [];
        therapists.forEach(therapist => {
          const marker = L.marker([therapist.latitude, therapist.longitude]);
          const popupContent = `
            <div style="font-size: 1rem;">
              <strong style="font-size: 1.1rem; color: #111827;">${therapist.name}</strong><br/>
              ${therapist.specialties.length > 0 ? therapist.specialties[0] : 'Praktik Umum'}<br/>
              <a href="#${APP_ROUTES.THERAPIST_DETAIL(therapist.id)}" class="map-popup-link">Lihat Profil</a>
            </div>
          `;
          marker.bindPopup(popupContent);
          markersLayerRef.current.addLayer(marker);
          markerBounds.push([therapist.latitude, therapist.longitude]);
        });

        if (markerBounds.length > 0) {
          mapRef.current.fitBounds(markerBounds, { padding: [50, 50], maxZoom: MIN_ZOOM_FIT_BOUNDS });
        }
      } else {
        // No therapists, reset to default view
        mapRef.current.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
      }
    }
    
    // Cleanup function for when the component unmounts
    return () => {
      // Note: We don't destroy the map instance here if the container might be reused
      // or if parent component re-renders often. Proper cleanup might involve map.remove()
      // if MapDisplay is truly unmounted permanently. For now, clearing markers is main.
    };
  }, [therapists]); // Re-run effect if therapists list changes

  return (
    <div 
        ref={mapContainerRef} 
        style={{ height: '400px', width: '100%' }} 
        className="rounded-lg shadow-md overflow-hidden mb-8 bg-neutral-200"
        aria-label="Peta lokasi terapis"
    >
      {typeof L === 'undefined' && <div className="p-4 text-center text-neutral-600">Memuat peta...</div>}
    </div>
  );
};

export default MapDisplay;