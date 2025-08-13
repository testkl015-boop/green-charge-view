import { FaMapMarkerAlt } from 'react-icons/fa';

interface LocationCardProps {
  latitude: number;
  longitude: number;
}

export const LocationCard = ({ latitude, longitude }: LocationCardProps) => {
  // For now, we'll show a placeholder for Google Maps
  // In a real implementation, you'd integrate with Google Maps API
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&output=embed`;
  
  return (
    <div className="ev-card">
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-primary text-xl">
          <FaMapMarkerAlt />
        </div>
        <h3 className="text-lg font-semibold">Vehicle Location</h3>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="ev-metric-label">Latitude</p>
            <p className="text-primary text-lg font-mono">{latitude.toFixed(6)}°</p>
          </div>
          <div>
            <p className="ev-metric-label">Longitude</p>
            <p className="text-primary text-lg font-mono">{longitude.toFixed(6)}°</p>
          </div>
        </div>
        
        <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};