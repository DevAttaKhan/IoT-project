import { SelectDropdown } from "@/components/common";
import { ColumnDef } from "@tanstack/react-table";
import classNames from "classnames";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
export const EVENTS_FILTER_OPTIONS = [
  { id: 1, value: "Option 1" },
  { id: 2, value: "Option 2" },
  { id: 3, value: "Option 3" },
  { id: 4, value: "Option 4" },
];

export interface IEvent {
  id?: string;
  sev: "green" | "red" | "brown";
  name: string;
  description: string;
  beginnign: string;
  elapsedTime: string;
  action: string;
}

export const EventData: IEvent[] = [
  {
    sev: "green",
    name: "Main Fail - Grid Outag",
    description: "Grid Outage more than 4h",
    beginnign: "Apr 18,2024 | 22:24",
    elapsedTime: "15 days | 01:05 hrs",
    action: "",
  },
  {
    sev: "red",
    name: "Main Fail - Grid Outag",
    description: "Grid Outage more than 4h",
    beginnign: "Apr 18,2024 | 22:24",
    elapsedTime: "15 days | 01:05 hrs",
    action: "",
  },
  {
    sev: "red",
    name: "Main Fail - Grid Outag",
    description: "Grid Outage more than 4h",
    beginnign: "Apr 18,2024 | 22:24",
    elapsedTime: "15 days | 01:05 hrs",
    action: "",
  },
  {
    sev: "brown",
    name: "Main Fail - Grid Outag",
    description: "Grid Outage more than 4h",
    beginnign: "Apr 18,2024 | 22:24",
    elapsedTime: "15 days | 01:05 hrs",
    action: "",
  },
  {
    sev: "green",
    name: "Main Fail - Grid Outag",
    description: "Grid Outage more than 4h",
    beginnign: "Apr 18,2024 | 22:24",
    elapsedTime: "15 days | 01:05 hrs",
    action: "",
  },
  {
    sev: "green",
    name: "Main Fail - Grid Outag",
    description: "Grid Outage more than 4h",
    beginnign: "Apr 18,2024 | 22:24",
    elapsedTime: "15 days | 01:05 hrs",
    action: "",
  },
  {
    sev: "green",
    name: "Main Fail - Grid Outag",
    description: "Grid Outage more than 4h",
    beginnign: "Apr 18,2024 | 22:24",
    elapsedTime: "15 days | 01:05 hrs",
    action: "",
  },
];

export const columns: ColumnDef<IEvent>[] = [
  {
    accessorKey: "sev",
    header: "SAV",
    cell: ({ row }) => {
      const { sev } = row.original;
      return (
        <div
          className={classNames("w-4 h-4 rounded-full  ", {
            "bg-green-600": sev === "green",
            "bg-red-600": sev === "red",
            "bg-red-900": sev === "brown",
          })}
        ></div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div>
          <p className="text-base mb-1">{row.original.name}</p>
          <p className="text-dark-gray text-xs">{row.original.description}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "beginnign",
    header: "beginnign",
  },
  {
    accessorKey: "elapsedTime",
    header: "Elapsed Time",
  },
  {
    accessorKey: "action",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <SelectDropdown
          icon={
            <EllipsisVerticalIcon className="-mr-1 h-5 w-5 text-black cursor-pointer" />
          }
          options={[
            { id: 1, value: "edit" },
            { id: 2, value: "delete" },
          ]}
        />
      );
    },
  },
];
