import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IconContext } from 'react-icons';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const gwaliorPosition = [26.2183, 78.1828]; // Coordinates for Gwalior
  const gurugramPosition = [28.4595, 77.0266]; // Coordinates for Gurugram

  // Calculate center and bounds for the map
  const center = [(gwaliorPosition[0] + gurugramPosition[0]) / 2, (gwaliorPosition[1] + gurugramPosition[1]) / 2];
  const bounds = [gwaliorPosition, gurugramPosition];

  return (
    <motion.section
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 lg:px-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex flex-col items-center">
          <h2 className="text-lg text-center">
            I am open to relocating to any place and also available for remote work.
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4">Locations</h3>
          <MapContainer center={center} zoom={6} className="w-full h-96">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={gwaliorPosition}>
              <Popup>Gwalior, my hometown.</Popup>
            </Marker>
            <Marker position={gurugramPosition}>
              <Popup>Gurugram, my current location.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <IconContext.Provider value={{ size: '2em', className: 'mt-6' }}>
        <div className="flex space-x-4">
          <FaMapMarkerAlt />
          <FaMapMarkerAlt />
        </div>
      </IconContext.Provider>
    </motion.section>
  );
};

export default Contact;
