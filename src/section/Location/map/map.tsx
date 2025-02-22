import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

import restaurants from "../../../data/restaurants.json";
import { Restaurant } from "../../../models/Resturant";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: -6.8618433,
  lng: 107.408613,
};

// Batas koordinat wilayah Indonesia
const indonesiaBounds = {
  north: -3.5,
  south: -8.8,
  west: 105.0,
  east: 114.5,
};

const darkModeStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#782205" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#fa875f" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#e74006" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#782205" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#782205" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#782205" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#782205" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#782205" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#782205" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#782205" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#782205" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

function MapLocationSection() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [selectedMarker, setSelectedMarker] = useState<Restaurant | null>(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={{
        disableDefaultUI: true,
        keyboardShortcuts: false,
        restriction: {
          latLngBounds: indonesiaBounds,
          strictBounds: true,
        },
        styles: darkModeStyle,
      }}
      zoom={6}
    >
      <>
        {restaurants.map((restaurant, i) => (
          <Marker
            key={i}
            position={{
              lat: restaurant.longlat.lat,
              lng: restaurant.longlat.lng,
            }}
            onClick={() => setSelectedMarker(restaurant)}
            icon={{
              url: `/locations/${restaurant.img}`,
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 20),
            }}
            shape={{
              coords: [40, 40, 40],
              type: "circle",
            }}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker.longlat.lat,
              lng: selectedMarker.longlat.lng,
            }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="bg-light-dark p-4 rounded text-center">
              <img
                src={`/locations/${selectedMarker.img}`}
                width={200}
                height={200}
                className="object-cover rounded-md mx-auto max-h-[200px] min-h-[200px] w-full"
              />
              <p className="font-medium mb-2 text-xl text-gray-200 mt-3">
                {selectedMarker.name}
              </p>
              <p className="text-gray-300 w-3/4 mx-auto">
                {selectedMarker.description}
              </p>
              <br />
              <Link
                to={"/detail"}
                title="Location Detail"
                aria-label="Location Detail"
                type="button"
                className="px-7 py-2 rounded-md text-white border-2 border-primary/80 bg-primary/80 hover:bg-primary hover:text-white font-medium"
              >
                Detail Lokasi
              </Link>
              <br />
              <br />
            </div>
          </InfoWindow>
        )}
      </>
    </GoogleMap>
  ) : null;
}

export default React.memo(MapLocationSection);
