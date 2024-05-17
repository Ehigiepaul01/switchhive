import { useEffect, useState } from "react";
import { BarChart, LineChart } from "@/components/Dashboard";
import { orderStatistics } from "@/constants/data";
import Chart from "chart.js/auto";
import { CategoryScale, Filler } from "chart.js";


Chart.register(CategoryScale, Filler);

const Charts = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });
    const [lineChart, setLineChart] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        setChartData({
            labels: orderStatistics.map((data) => data.day),
            datasets: [
                {
                    label: "Revenue",
                    data: orderStatistics.map((data) => data.value),
                    backgroundColor: "rgba(34, 65, 145, 1)",
                }
            ]
        })
        setLineChart({
            labels: orderStatistics.map((data) => data.day),
            datasets: [
                {
                    label: "Revenue",
                    data: orderStatistics.map((data) => data.value),
                    fill: "start",
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                        gradient.addColorStop(0, "rgba(34, 65, 145, 0.25)");
                        gradient.addColorStop(1, "rgba(34, 65, 145, 0)");
                        return gradient;
                    },
                    borderColor: "rgba(34, 65, 145, 1)",
                }
            ]
        })
    }, [orderStatistics])

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
        elements: {
            line: {
                tension: 0.4,
                cubicInterpolationMode: 'fast',
                borderColor: 'rgba(34, 65, 145, 1)',
                fill: true,
                backgroundColor: 'rgba(255, 0, 0, 0.3)'
            },
        },
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className='grid sm:grid-cols-2 my-11 gap-3'>
            <LineChart chartData={lineChart} options={options} heading={`Revenue Statitics`} />
            <BarChart chartData={chartData} />
        </div>
    )
}

export default Charts