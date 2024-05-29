import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  label: string;
  color?: string;
};

export function BarChart({ label, color }: Props) {
  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "",
        },
      },
    }),
    []
  );

  const labels = [15, 20, 15, 30, 25, 40, 25];

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
          backgroundColor: color || "#02D0DF",
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
          barThickness: 15,
        },
      ],
    }),
    []
  );
  return (
    <div className="h-[300px] w-full md:w-[345px] rounded-xl shadow p-5 flex flex-col justify-between ">
      <p className="font-medium "> {label}</p>
      <Bar
        options={options}
        data={data}
        style={{ margin: "0 auto" }}
        height={300}
      />
    </div>
  );
}
