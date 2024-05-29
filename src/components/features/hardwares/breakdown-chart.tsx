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
import { SelectDropdown } from "@/components/common";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// type Props = {
//   label: string;
//   color?: string;
// };

export function BreakdownChart() {
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

  const labels = ["Jan", "Fab", "Mar", "Apr", "May", "June"];

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
          backgroundColor: "#584AC7",
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
          barThickness: 15,
        },
      ],
    }),
    []
  );
  return (
    <div className="w-full flex flex-col justify-between ">
      <div className="flex justify-between ">
        <div className="w-40">
          <p className="font-medium mb-2  "> Breakdown</p>
          <p className="mb-8 text-dark-gray text-xs">
            Deeper insights on spend concentration areas
          </p>
        </div>
        <SelectDropdown
          buttonClass="p-1   w-32 justify-end shadow-none"
          label="This Year"
          options={[
            { id: 1, value: "This Year" },
            { id: 1, value: "Last Year" },
          ]}
        />
      </div>
      <Bar
        options={options}
        data={data}
        style={{ margin: "0 auto" }}
        height={500}
        width={520}
      />
    </div>
  );
}
