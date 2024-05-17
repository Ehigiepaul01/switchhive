import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stepSize: 1000, 
        max: 6000, 
        grid: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 0,
        bottom: 0,
      },
    },
    elements: {
      bar: {
        borderRadius: 30,
      },
    },
    barPercentage: 0.4,
    categoryPercentage: 0.6,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="p-2 bg-white rounded-lg border border-neutral-200">
      <h2 className="text-stone-950 text-xl font-medium leading-[30px] mb-7">Order Statitics</h2>
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default BarChart;
