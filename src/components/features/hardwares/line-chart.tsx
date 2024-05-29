import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// type Props = {
//   label: string;
//   color?: string;
// };

export function BreakdownLineChart() {
  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: " ",
        },
      },
    }),
    []
  );

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
          borderColor: "#584AC7",
          tension: 0.4,
        },
      ],
    }),
    []
  );
  return (
    <div className="w-full flex flex-col justify-between ">
      <Line
        id="line-chart"
        options={options}
        data={data}
        style={{ margin: "0 auto" }}
        height={500}
        width={520}
      />
    </div>
  );
}
