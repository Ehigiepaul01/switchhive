import { useEffect, useState } from "react";
import { LineChart } from "@/components/Dashboard";
import { analyticStatistics } from "@/constants/data";
import Chart from "chart.js/auto";
import { Button, DatePickerWithRange } from "../ui";
import { CategoryScale, Filler } from "chart.js";
import { DownloadIcon } from "@radix-ui/react-icons";
import { getStyleByValue } from "@/utils/helper";
import { CustomPopover } from "../custom";

Chart.register(CategoryScale, Filler);

const AnalyticsChart = () => {
    const [selectedCompany, setSelectedCompany] = useState("All");

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    const handleSelected = (company) => {
        setSelectedCompany(company);
    };

    useEffect(() => {
        if (selectedCompany == "All") {
            setChartData({
                labels: analyticStatistics.Sochitel.map((data) => data.text),
                datasets: [
                    {
                        label: "Sochitel",
                        data: analyticStatistics.Sochitel.map((data) => data.value),
                        borderColor: "rgba(96, 165, 250, 1)",
                    },
                    {
                        label: "Xoxoday",
                        data: analyticStatistics.Xoxoday.map((data) => data.value),
                        borderColor: "rgba(255, 109, 82, 1)",
                    },
                    {
                        label: "Ding Connect",
                        data: analyticStatistics["Ding connect"].map((data) => data.value),
                        borderColor: "rgba(255, 91, 242, 1) ",
                    },
                    {
                        label: "Reloadly",
                        data: analyticStatistics.Reloadly.map((data) => data.value),
                        borderColor: "rgba(24, 24, 24, 1)",
                    },
                ],
            });
        } else {
            setChartData({
                labels: analyticStatistics[selectedCompany].map((data) => data.text),
                datasets: [
                    {
                        label: selectedCompany,
                        data: analyticStatistics[selectedCompany].map((data) => data.value),
                        borderColor: `${selectedCompany === "Sochitel"
                                ? "rgba(96, 165, 250, 1)"
                                : selectedCompany === "Xoxoday"
                                    ? "rgba(255, 109, 82, 1)"
                                    : selectedCompany === "Reloadly"
                                        ? "rgba(24, 24, 24, 1)"
                                        : "rgba(255, 91, 242, 1)"
                            }`,
                    },
                ],
            });
        }
    }, [analyticStatistics, selectedCompany]);

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 1000,
            },
        },
        elements: {
            line: {
                tension: 0.3,
                cubicInterpolationMode: "fast",
                borderColor: "rgba(34, 65, 145, 1)",
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
        <>
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleSelected("Sochitel")} className={`${getStyleByValue("sochitel").class} rounded-[40px] p-0 justify-start gap-1`}>
                        <img src={getStyleByValue("sochitel").icon} alt="sochitel icon" />
                        Sochitel
                    </Button>
                    <Button size="sm" onClick={() => handleSelected("Xoxoday")} className={`${getStyleByValue("xoxoday").class} rounded-[40px] p-0 justify-start gap-1`}>
                        <img src={getStyleByValue("xoxoday").icon} alt="xoxoday icon" />
                        Xoxoday
                    </Button>
                    <Button size="sm" onClick={() => handleSelected("Ding connect")} className={`${getStyleByValue("ding connect").class} rounded-[40px] p-0 justify-start gap-1`}>
                        <img src={getStyleByValue("ding connect").icon} alt="ding connect icon" />
                        Ding Connect
                    </Button>
                    <Button size="sm" onClick={() => handleSelected("Reloadly")} className={`${getStyleByValue("reloadly").class} rounded-[40px] p-0 justify-start gap-1`}>
                        <img src={getStyleByValue("reloadly").icon} alt="reloadly icon" />
                        Reloadly
                    </Button>
                    <Button size="sm" onClick={() => handleSelected("All")}>
                        All Stores
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                <DatePickerWithRange size="icon" className="border-grey hover:bg-blue-900 hover:text-white" />
                <CustomPopover icon={<DownloadIcon className="h-[24px] w-[24px]" />} variant="outline" style="hover:bg-blue-900 hover:text-white p-2">
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as CSV</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as PNG</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as PDF</Button>
                    <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as XLS</Button>
                </CustomPopover>
            </div>
            </div>
            <div className="my-10">
                <LineChart chartData={chartData} options={options} />
            </div>
        </>
    );
};

export default AnalyticsChart;
