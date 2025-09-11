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

export default function TransportModeChart() {
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
            return `${context.parsed.y}% of all trips`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
        grid: {
          color: 'hsl(var(--border))',
        },
        ticks: {
          color: 'hsl(var(--muted-foreground))',
          callback: function(value: any) {
            return value + '%';
          }
        },
        title: {
          display: true,
          text: 'Share of Trips (%)',
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
      },
    },
    onHover: (event: any, activeElements: any) => {
      event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
    },
    onClick: (event: any, activeElements: any) => {
      if (activeElements.length > 0) {
        const dataIndex = activeElements[0].index;
        const modes = ['Car', 'Bus', 'Metro', 'Walk', 'Bicycle'];
        const shares = [38, 22, 18, 15, 7];
        const mode = modes[dataIndex];
        const share = shares[dataIndex];
        console.log(`Clicked on ${mode}: ${share}% share`);
      }
    },
  };

  const data = {
    labels: ['Car', 'Bus', 'Metro', 'Walk', 'Bicycle'],
    datasets: [
      {
        data: [38, 22, 18, 15, 7], // Sample data - percentages
        backgroundColor: [
          'rgba(29, 78, 216, 0.8)', // blue-700 - Car
          'rgba(59, 130, 246, 0.8)', // blue-500 - Bus
          'rgba(96, 165, 250, 0.8)', // blue-400 - Metro
          'rgba(147, 197, 253, 0.8)', // blue-300 - Walk
          'rgba(191, 219, 254, 0.8)', // blue-200 - Bicycle
        ],
        borderColor: [
          'rgb(29, 78, 216)', // blue-700
          'rgb(59, 130, 246)', // blue-500
          'rgb(96, 165, 250)', // blue-400
          'rgb(147, 197, 253)', // blue-300
          'rgb(191, 219, 254)', // blue-200
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
        ],
        hoverBorderWidth: 3,
      },
    ],
  };

  return <Bar data={data} options={options} />;
}