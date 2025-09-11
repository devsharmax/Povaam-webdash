import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useMemo } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function TravelTimeByHourChart() {
  const { hours, travelTimes } = useMemo(() => {
    const hours = [];
    const travelTimes = [];
    
    // Generate 24 hours of data with realistic patterns
    for (let i = 0; i < 24; i++) {
      hours.push(`${i.toString().padStart(2, '0')}:00`);
      
      // Simulate rush hour patterns - higher travel times at 7-9am and 5-7pm
      let baseTime = 25; // Base travel time in minutes
      if (i >= 7 && i <= 9) baseTime += Math.random() * 20 + 15; // Morning rush
      else if (i >= 17 && i <= 19) baseTime += Math.random() * 25 + 20; // Evening rush
      else if (i >= 22 || i <= 5) baseTime -= Math.random() * 10 + 5; // Late night/early morning
      else baseTime += Math.random() * 10 - 5; // Regular hours
      
      travelTimes.push(Math.max(10, Math.round(baseTime)));
    }
    
    return { hours, travelTimes };
  }, []);

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
            return `${context[0].label}`;
          },
          label: function(context: any) {
            return `Average travel time: ${context.parsed.y} minutes`;
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
            return value + 'min';
          }
        },
        title: {
          display: true,
          text: 'Travel Time (minutes)',
          color: 'hsl(var(--foreground))',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'hsl(var(--muted-foreground))',
          maxTicksLimit: 12, // Show every 2 hours
        },
        title: {
          display: true,
          text: 'Hour of Day',
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
        const hour = hours[dataIndex];
        const time = travelTimes[dataIndex];
        console.log(`Clicked on ${hour}: ${time} minutes average travel time`);
      }
    },
  };

  const data = {
    labels: hours,
    datasets: [
      {
        label: 'Average Travel Time',
        data: travelTimes,
        borderColor: 'rgb(29, 78, 216)', // blue-700
        backgroundColor: 'rgba(59, 130, 246, 0.1)', // blue-500 with transparency
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(29, 78, 216)',
        pointBorderColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'rgb(37, 99, 235)', // blue-600
        pointHoverBorderColor: 'rgb(255, 255, 255)',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  return <Line data={data} options={options} />;
}