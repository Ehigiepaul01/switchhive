import { Line } from "react-chartjs-2";

const LineChart = ({ heading, chartData, options }) => {
    return (
        <div className="p-2 bg-white rounded-lg border border-neutral-200">
            {heading && <h2 className="text-stone-950 text-xl font-medium leading-[30px] mb-7">{heading}</h2>}
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;