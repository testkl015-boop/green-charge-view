import { 
  FaBatteryFull, 
  FaBolt, 
  FaThermometerHalf, 
  FaTachometerAlt,
  FaCompass,
  FaMountain,
  FaCloudSun
} from 'react-icons/fa';
import { IoSpeedometer } from 'react-icons/io5';
import { MetricCard } from './MetricCard';
import { LocationCard } from './LocationCard';

// Mock data as provided
const mockData = {
  soc_percent: 74,
  battery_voltage: 358.4,
  battery_current: -21.6,
  battery_temp: 36.1,
  vehicle_speed: 48,
  latitude: 11.0168,
  longitude: 76.9558,
  altitude: 302,
  acceleration_x: 0.14,
  ambient_temp: 32.5,
  is_charging: false
};

export const EVDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            EV Telemetry Dashboard
          </h1>
          <p className="text-muted-foreground">Real-time vehicle monitoring and analytics</p>
        </div>

        {/* Battery Metrics Section */}
        <section className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaBatteryFull className="text-primary text-2xl" />
            <h2 className="text-2xl font-semibold">Battery Metrics</h2>
          </div>
          <div className="ev-grid">
            <MetricCard
              title="State of Charge"
              value={mockData.soc_percent}
              unit="%"
              icon={<FaBatteryFull />}
            />
            <MetricCard
              title="Battery Voltage"
              value={mockData.battery_voltage}
              unit="V"
              icon={<FaBolt />}
            />
            <MetricCard
              title="Battery Current"
              value={mockData.battery_current}
              unit="A"
              icon={<FaBolt />}
              status={mockData.is_charging ? 'charging' : 'normal'}
            />
            <MetricCard
              title="Battery Temperature"
              value={mockData.battery_temp}
              unit="°C"
              icon={<FaThermometerHalf />}
            />
          </div>
        </section>

        {/* Vehicle Metrics Section */}
        <section className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaTachometerAlt className="text-primary text-2xl" />
            <h2 className="text-2xl font-semibold">Vehicle Metrics</h2>
          </div>
          <div className="ev-grid">
            <MetricCard
              title="Speed"
              value={mockData.vehicle_speed}
              unit="km/h"
              icon={<IoSpeedometer />}
            />
            <MetricCard
              title="Acceleration X-axis"
              value={mockData.acceleration_x}
              unit="g"
              icon={<FaCompass />}
            />
            <MetricCard
              title="Altitude"
              value={mockData.altitude}
              unit="m"
              icon={<FaMountain />}
            />
          </div>
        </section>

        {/* Location Data Section */}
        <section className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaCompass className="text-primary text-2xl" />
            <h2 className="text-2xl font-semibold">Location Data</h2>
          </div>
          <LocationCard 
            latitude={mockData.latitude} 
            longitude={mockData.longitude} 
          />
        </section>

        {/* Environmental Data Section */}
        <section className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaCloudSun className="text-primary text-2xl" />
            <h2 className="text-2xl font-semibold">Environmental Data</h2>
          </div>
          <div className="ev-grid">
            <MetricCard
              title="Ambient Temperature"
              value={mockData.ambient_temp}
              unit="°C"
              icon={<FaCloudSun />}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-muted-foreground border-t border-border pt-6">
          <p>Last updated: {new Date().toLocaleString()}</p>
        </footer>
      </div>
    </div>
  );
};