import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TripPurposeChart() {
  const data = {
    labels: ['Work', 'Education', 'Shopping', 'Leisure', 'Others'],
    datasets: [
      {
        data: [35, 20, 15, 25, 5], // Sample data - replace with actual data from your API
        backgroundColor: [
          'rgba(29, 78, 216, 0.8)', // blue-700
          'rgba(59, 130, 246, 0.8)', // blue-500
          'rgba(96, 165, 250, 0.8)', // blue-400
          'rgba(147, 197, 253, 0.8)', // blue-300
          'rgba(191, 219, 254, 0.8)', // blue-200
        ],
        borderColor: [
          'rgb(29, 78, 216)', // blue-700
          'rgb(59, 130, 246)', // blue-500
          'rgb(96, 165, 250)', // blue-400
          'rgb(147, 197, 253)', // blue-300
          'rgb(191, 219, 254)', // blue-200
        ],
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          color: 'hsl(var(--foreground))',
        },
        onHover: (event: any, legendItem: any) => {
          event.native.target.style.cursor = 'pointer';
        },
        onClick: (event: any, legendItem: any) => {
          console.log(`Legend clicked: ${legendItem.text}`);
          // Add your legend click logic here
        },
      },
      tooltip: {
        backgroundColor: 'hsl(var(--popover))',
        titleColor: 'hsl(var(--popover-foreground))',
        bodyColor: 'hsl(var(--popover-foreground))',
        borderColor: 'hsl(var(--border))',
        borderWidth: 1,
        callbacks: {
          title: function(context: any) {
            return context[0].label;
          },
          label: function(context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${value}% of all trips`;
          },
          afterLabel: function(context: any) {
            return 'Click to view details';
          }
        }
      }
    },
    onHover: (event: any, activeElements: any) => {
      event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
    },
    onClick: (event: any, activeElements: any) => {
      if (activeElements.length > 0) {
        const dataIndex = activeElements[0].index;
        const labels = ['Work', 'Education', 'Shopping', 'Leisure', 'Others'];
        const values = [35, 20, 15, 25, 5];
        const purpose = labels[dataIndex];
        const percentage = values[dataIndex];
        console.log(`Clicked on ${purpose}: ${percentage}% of trips`);
        // Add your click handler logic here
      }
    },
  };

  return <Pie data={data} options={options} />;
}