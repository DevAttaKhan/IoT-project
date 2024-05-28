import { ColumnDef } from "@tanstack/react-table";

export const FILTER_OPTIONS = [
  { id: 1, value: "Account Setting" },
  { id: 2, value: "Support" },
  { id: 3, value: "License" },
  { id: 4, value: "Sign Out" },
];

export interface ISiteLocation {
  siteId: string;
  location: string;
  vibrationSensor: "on" | "off";
  smartLock: "open" | "close";
}
export const columns = (action: any): ColumnDef<ISiteLocation>[] => [
  {
    accessorKey: "siteId",
    header: "site #",
    cell: ({ row }) => {
      return (
        <button onClick={() => action.openModal(row.original.siteId)}>
          {row.original.siteId}
        </button>
      );
    },
  },
  {
    accessorKey: "location",
    header: "location",
  },
  {
    accessorKey: "vibrationSensor",
    header: "vibration sensor",
    cell: ({ row }) => {
      return (
        <>
          <span className="w-[12px] h-[12px] inline-block me-2 bg-green-500 rounded-full"></span>
          <span>ON</span>
        </>
      );
    },
  },
  {
    accessorKey: "smartLock",
    header: "vibration sensor",
    cell: ({ row }) => {
      return (
        <>
          <span className="w-[12px] h-[12px] inline-block me-2 bg-red-600 rounded-full"></span>
          <span>CLOSE</span>
        </>
      );
    },
  },
];

export const siteLocations: ISiteLocation[] = [
  {
    siteId: "HAU1724",
    location: "216 Maxine Garden",
    vibrationSensor: "on",
    smartLock: "close",
  },
  {
    siteId: "HAU1724",
    location: "216 Maxine Garden",
    vibrationSensor: "on",
    smartLock: "close",
  },
  {
    siteId: "HAU1724",
    location: "216 Maxine Garden",
    vibrationSensor: "on",
    smartLock: "close",
  },
  {
    siteId: "HAU1724",
    location: "216 Maxine Garden",
    vibrationSensor: "on",
    smartLock: "close",
  },
  {
    siteId: "HAU1724",
    location: "216 Maxine Garden",
    vibrationSensor: "on",
    smartLock: "close",
  },
];
