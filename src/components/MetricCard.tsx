import { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: ReactNode;
  status?: 'normal' | 'warning' | 'charging';
  className?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  unit, 
  icon, 
  status = 'normal',
  className = '' 
}: MetricCardProps) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'charging':
        return 'ev-charging-pulse border-primary/70';
      case 'warning':
        return 'border-destructive/50';
      default:
        return '';
    }
  };

  return (
    <div className={`ev-card ${getStatusClasses()} ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-primary text-xl">
          {icon}
        </div>
        {status === 'charging' && (
          <div className="px-2 py-1 bg-primary/20 rounded-full">
            <span className="text-xs text-primary font-semibold">CHARGING</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="ev-metric-label">{title}</p>
        <div className="flex items-baseline space-x-1">
          <span className="ev-metric-value">{value}</span>
          {unit && (
            <span className="text-muted-foreground text-lg">{unit}</span>
          )}
        </div>
      </div>
    </div>
  );
};