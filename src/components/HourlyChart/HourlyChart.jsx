import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Container, Title } from './HourlyChart.styled.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const WeatherChart = ({ forecast }) => {
  if (!forecast || !forecast.list) return null;

  const now = Date.now();

  const getHourlyData = list => {
    const futureData = list.filter(item => item.dt * 1000 >= now);
    const hourly = [];

    for (let i = 0; i < futureData.length - 1; i++) {
      const start = futureData[i];
      const end = futureData[i + 1];

      hourly.push({ time: start.dt * 1000, temp: Math.round(start.main.temp) });

      const diff = end.main.temp - start.main.temp;
      for (let step = 1; step < 3; step++) {
        hourly.push({
          time: start.dt * 1000 + step * 3600 * 1000,
          temp: Math.round(start.main.temp + diff * (step / 3)),
        });
      }
    }
    return hourly.slice(0, 20);
  };

  const hourlyData = getHourlyData(forecast.list);

  const labels = hourlyData.map(item =>
    new Date(item.time).toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
    })
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: hourlyData.map(item => item.temp),
        borderColor: '#ffb36c',
        borderWidth: 3,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        position: 'top',
        grid: {
          display: true,
          color: '#c7c7c7ff',
          drawBorder: false,
        },
        ticks: {
          padding: 15,
          color: '#000',
          font: { family: 'Montserrat', size: 11, weight: '500' },
        },
      },
      y: {
        min: 5,
        max: 45,
        ticks: {
          stepSize: 5,
          padding: 15,
          color: '#000',
          font: { family: 'Montserrat', size: 11, weight: '500' },
          callback: value => `${value}°C`,
        },
        grid: {
          drawBorder: false,
          color: '#c7c7c7ff',
        },
      },
    },
  };

  return (
    <Container>
      <Title>Hourly forecast</Title>
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </Container>
  );
};