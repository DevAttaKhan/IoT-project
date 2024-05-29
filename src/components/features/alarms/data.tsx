import { ColumnDef } from "@tanstack/react-table";

interface IAlarmStat {
  count: number;
  type: string;
  siteCount: number;
  color: string;
}

export interface IAlarm {
  alarmId: string;
  type: string;
  severity: "critical" | "mild";
  startTime: string;
  endTime: string;
  duration: string;
  siteId: string;
  description: string;
  currentStatus: "system close Alarm";
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

export const AlarmData: IAlarm[] = [
  {
    alarmId: "49688462",
    type: "RIM",
    severity: "critical",
    siteId: "INX_SCT",
    description: "ATC Vibration Active",
    currentStatus: "system close Alarm",
    startTime: "Apr 27,2024 | 15:29",
    endTime: "Apr 27,2024 | 15:29",
    duration: "00:20:00",
  },
  {
    alarmId: "49688462",
    type: "RIM",
    severity: "critical",
    siteId: "INX_SCT",
    description: "ATC Vibration Active",
    currentStatus: "system close Alarm",
    startTime: "Apr 27,2024 | 15:29",
    endTime: "Apr 27,2024 | 15:29",
    duration: "00:20:00",
  },
  {
    alarmId: "49688462",
    type: "RIM",
    severity: "critical",
    siteId: "INX_SCT",
    description: "ATC Vibration Active",
    currentStatus: "system close Alarm",
    startTime: "Apr 27,2024 | 15:29",
    endTime: "Apr 27,2024 | 15:29",
    duration: "00:20:00",
  },
  {
    alarmId: "49688462",
    type: "RIM",
    severity: "critical",
    siteId: "INX_SCT",
    description: "ATC Vibration Active",
    currentStatus: "system close Alarm",
    startTime: "Apr 27,2024 | 15:29",
    endTime: "Apr 27,2024 | 15:29",
    duration: "00:20:00",
  },
  {
    alarmId: "49688462",
    type: "RIM",
    severity: "critical",
    siteId: "INX_SCT",
    description: "ATC Vibration Active",
    currentStatus: "system close Alarm",
    startTime: "Apr 27,2024 | 15:29",
    endTime: "Apr 27,2024 | 15:29",
    duration: "00:20:00",
  },
  {
    alarmId: "49688462",
    type: "RIM",
    severity: "critical",
    siteId: "INX_SCT",
    description: "ATC Vibration Active",
    currentStatus: "system close Alarm",
    startTime: "Apr 27,2024 | 15:29",
    endTime: "Apr 27,2024 | 15:29",
    duration: "00:20:00",
  },
];

export const ActiveAlarmColumns: ColumnDef<IAlarm>[] = [
  {
    accessorKey: "alarmId",
    header: "Alarm ID",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "severity",
    header: "severity",
    cell: ({ row }) => {
      return (
        <p className="rounded bg-red-700 text-white text-sm px-4 py-1 w-20">
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
      return (
        <button className="rounded bg-[#856D60] text-white text-sm px-4 py-1 w-44 ">
          {row.original.currentStatus}
        </button>
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
    accessorKey: "type",
    header: "Type",
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
      return (
        <p className="rounded bg-red-700 text-white text-sm px-4 py-1 w-20">
          {row.original.severity}
        </p>
      );
    },
  },
  {
    accessorKey: "siteId",
    header: "Site ID",
    cell: ({ row }) => {
      return (
        <div
          style={{
            minWidth: "0 !important",
            padding: "0 !important",
            margin: "0 !important",
          }}
        >
          {row.original.siteId}
        </div>
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
      return (
        <button className="rounded bg-[#856D60] text-white text-xs px-4 py-1 w-44 ">
          {row.original.currentStatus}
        </button>
      );
    },
  },
];
