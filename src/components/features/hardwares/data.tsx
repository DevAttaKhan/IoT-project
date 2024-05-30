import { CircleCrossIcon, CircleEditIcon } from "@/assets/icons";
import { ColumnDef } from "@tanstack/react-table";

export interface IHardware {
  chipId: string;
  siteId: string;
  site: string;
  actions: "";
}

export const columns = (action: any): ColumnDef<IHardware>[] => [
  { accessorKey: "chipId", header: "chip ID" },
  { accessorKey: "siteId", header: "SiteId" },
  { accessorKey: "site", header: "Site #" },
  {
    accessorKey: "action",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-3">
          <button onClick={() => action.handleEdit(row.original)}>
            <CircleEditIcon />
          </button>
          <button onClick={() => action.promptWarning(true)}>
            <CircleCrossIcon />
          </button>
        </div>
      );
    },
  },
];

export const HardwareData: IHardware[] = [
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
  {
    chipId: "HAU1724Y",
    siteId: "HAU1724Y",
    site: "216 Maxine Garden",
    actions: "",
  },
];
