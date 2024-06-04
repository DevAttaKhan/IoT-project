import { faker } from "@faker-js/faker";
import { ColumnDef } from "@tanstack/react-table";
import classNames from "classnames";

interface IAlarmStat {
  count: number;
  type: string;
  siteCount: number;
  color: string;
}

export interface IAlarm {
  alarmId: string;
  type: string;
  severity: string;
  startTime: string;
  endTime: string;
  duration: string;
  siteId: string;
  description: string;
  currentStatus: string;
  remark?: string;
}

export const AlarmStateData: IAlarmStat[] = [
  {
    count: 94,
    type: "Total Alarms",
    siteCount: 1,
    color: "text-[#335595]",
  },
  {
    count: 23,
    type: "Critical",
    siteCount: 1,
    color: "text-[#CB4238]",
  },
  {
    count: 0,
    type: "Major",
    siteCount: 0,
    color: "text-[#DD9833]",
  },
  {
    count: 0,
    type: "Open Ticket",
    siteCount: 0,
    color: "text-[#84C478]",
  },
  {
    count: 0,
    type: "Close Ticket",
    siteCount: 0,
    color: "text-[#567C6D]",
  },
  {
    count: 26,
    type: "System Close",
    siteCount: 1,
    color: "text-[#A16A43]",
  },
];

export const AlarmData: IAlarm[] = Array.from(
  { length: 13 },
  (_, i) => i + 1
).map(() => ({
  alarmId: faker.string.alphanumeric(6),
  type: faker.helpers.enumValue({ rim: "RIM", jim: "JIM", tim: "TIM" }),
  severity: faker.helpers.enumValue({
    critical: "critical",
    mild: "mild",
    normal: "normal",
  }),
  siteId: faker.string.alphanumeric(6),
  description: faker.lorem.words(3),
  currentStatus: faker.helpers.enumValue({
    close: "System Close Alarm",
    resoleved: "System Resovled",
  }),
  startTime: new Date(faker.date.anytime()).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  endTime: new Date(faker.date.anytime()).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  duration: new Date(faker.date.anytime()).toLocaleTimeString("en-US"),
}));

export const ActiveAlarmColumns: ColumnDef<IAlarm>[] = [
  {
    accessorKey: "alarmId",
    header: "Alarm ID",
  },
  {
    accessorKey: "type",
    header: "Type",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "severity",
    header: "severity",
    cell: ({ row }) => {
      const severity = row.original.severity;
      return (
        <p
          className={classNames(
            " text-center rounded capitalize text-white  text-sm px-4 py-1  w-20",
            {
              "bg-red-700": severity == "critical",
              "bg-orange-700": severity == "mild",
              "bg-green-500": severity == "normal",
            }
          )}
        >
          {row.original.severity}
        </p>
      );
    },
  },
  {
    accessorKey: "siteId",
    header: "Site ID",
  },
  {
    accessorKey: "description",
    header: "description",
  },
  {
    accessorKey: "currentStatus",
    header: "current status",
    cell: ({ row }) => {
      const status = row.original.currentStatus;
      return (
        <button
          className={classNames("rounded  text-white text-sm px-4 py-1 w-44 ", {
            "bg-[#856D60]": status == "System Close Alarm",
            "bg-green-500": status == "System Resovled",
          })}
        >
          {row.original.currentStatus}
        </button>
      );
    },
  },
  {
    accessorKey: "remark",
    header: "Remarks",
    cell: () => {
      return (
        <input
          type="text"
          placeholder="Enter Remark"
          className="w-52  border px-6 py-2 rounded outline-bluebonnet "
        />
      );
    },
  },
];

export const AlarmHistoryColumns: ColumnDef<IAlarm>[] = [
  {
    accessorKey: "alarmId",
    header: "Alarm ID",
  },
  {
    accessorKey: "siteId",
    header: "Site ID",
  },
  {
    accessorKey: "type",
    header: "Type",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    accessorKey: "duration",
    header: "duration",
  },
  {
    accessorKey: "severity",
    header: "severity",
    cell: ({ row }) => {
      const severity = row.original.severity;
      return (
        <p
          className={classNames("rounded  text-white text-sm px-4 py-1 w-20", {
            "bg-red-700": severity == "critical",
            "bg-orange-700": severity == "mild",
            "bg-green-500": severity == "normal",
          })}
        >
          {row.original.severity}
        </p>
      );
    },
  },
  {
    accessorKey: "description",
    header: "description",
  },
  {
    accessorKey: "currentStatus",
    header: "current status",
    cell: ({ row }) => {
      const status = row.original.currentStatus;
      return (
        <button
          className={classNames("rounded  text-white text-sm px-4 py-1 w-44 ", {
            "bg-[#856D60]": status == "System Close Alarm",
            "bg-green-500": status == "System Resovled",
          })}
        >
          {row.original.currentStatus}
        </button>
      );
    },
  },
];
