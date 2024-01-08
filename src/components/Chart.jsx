
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, LinearScale } from 'chart.js/auto';
import "../style/main.css"



const StatistikChart = () => {
  // Registrasi skala "linear" jika belum terdaftar
  Chart.register(LinearScale);

  // Data Statistik
  const tahun = ["Tahun 1", "Tahun 2", "Tahun 3", "Tahun 4", "Tahun 5"];
  const peraturanDaerah = [50, 60, 70, 80, 90];
  const peraturanWalikota = [30, 40, 50, 60, 70];
  const keputusanWalikota = [20, 25, 30, 35, 40];

  // Data Grafik Bar Horizontal
  const dataBarHorizontal = {
    labels: tahun,
    datasets: [
      {
        label: 'Peraturan Daerah',
        data: peraturanDaerah,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Peraturan Walikota',
        data: peraturanWalikota,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Keputusan Walikota',
        data: keputusanWalikota,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opsi Grafik Bar Horizontal
  const optionsBarHorizontal = {
    indexAxis: 'y', // Mengatur sumbu menjadi horizontal
    scales: {
      x: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };

  // Data Grafik Pie
  const dataPie = {
    labels: tahun,
    datasets: [
      {
        data: peraturanDaerah,
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Opsi Grafik Pie
  const optionsPie = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
   <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '20px', marginBottom: '20px' }}>
  {/* Grafik Bar Horizontal */}
  <div style={{ flex: '1', maxWidth: '600px', width: '100%', marginRight: '10px', marginBottom: '10px' }}>
    <Bar data={dataBarHorizontal} options={optionsBarHorizontal} />
  </div>

  {/* Grafik Pie */}
  <div style={{ flex: '1', maxWidth: '600px', width: '100%', marginLeft: '10px', marginBottom: '10px' }}>
    <Pie data={dataPie} options={optionsPie} />
  </div>
</div>
  );  
};

export default StatistikChart;
