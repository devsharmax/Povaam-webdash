import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TripsByRegionChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
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
            return `${context.parsed.y} trips completed`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'hsl(var(--border))',
        },
        ticks: {
          color: 'hsl(var(--muted-foreground))',
          callback: function(value: any) {
            return value.toLocaleString();
          }
        },
        title: {
          display: true,
          text: 'Number of Trips',
          color: 'hsl(var(--foreground))',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'hsl(var(--muted-foreground))',
        },
        title: {
          display: true,
          text: 'Region',
          color: 'hsl(var(--foreground))',
        }
      },
    },
    onHover: (event: any, activeElements: any) => {
      event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
    },
    onClick: (event: any, activeElements: any) => {
      if (activeElements.length > 0) {
        const dataIndex = activeElements[0].index;
        const regions = ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West', 'Pacific'];
        const trips = [2847, 3124, 2156, 2894, 1623, 803];
        const region = regions[dataIndex];
        const tripCount = trips[dataIndex];
        console.log(`Clicked on ${region}: ${tripCount} trips`);
      }
    },
  };

  const data = {
    labels: ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West', 'Pacific'],
    datasets: [
      {
        data: [2847, 3124, 2156, 2894, 1623, 803], // Trip counts by region
        backgroundColor: [
          'rgba(29, 78, 216, 0.8)', // blue-700 - Northeast
          'rgba(59, 130, 246, 0.8)', // blue-500 - Southeast
          'rgba(96, 165, 250, 0.8)', // blue-400 - Midwest
          'rgba(147, 197, 253, 0.8)', // blue-300 - Southwest
          'rgba(191, 219, 254, 0.8)', // blue-200 - West
          'rgba(219, 234, 254, 0.8)', // blue-100 - Pacific
        ],
        borderColor: [
          'rgb(29, 78, 216)', // blue-700
          'rgb(59, 130, 246)', // blue-500
          'rgb(96, 165, 250)', // blue-400
          'rgb(147, 197, 253)', // blue-300
          'rgb(191, 219, 254)', // blue-200
          'rgb(219, 234, 254)', // blue-100
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
        hoverBackgroundColor: [
          'rgba(37, 99, 235, 0.9)', // blue-600
          'rgba(59, 130, 246, 0.9)', // blue-500
          'rgba(96, 165, 250, 0.9)', // blue-400
          'rgba(147, 197, 253, 0.9)', // blue-300
          'rgba(191, 219, 254, 0.9)', // blue-200
          'rgba(219, 234, 254, 0.9)', // blue-100
        ],
        hoverBorderWidth: 3,
      },
    ],
  };

  return <Bar data={data} options={options} />;
}