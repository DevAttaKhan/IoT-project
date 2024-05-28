import { CircleCrossIcon, CircleEditIcon } from "@/assets/icons";
import { ColumnDef } from "@tanstack/react-table";

export interface IHardware {
  chipId: string;
  siteId: string;
  site: string;
  actions: "";
}

export const columns = (actions: any): ColumnDef<IHardware>[] => [
  { accessorKey: "chipId", header: "chip ID" },
  { accessorKey: "siteId", header: "SiteId" },
  { accessorKey: "site", header: "Site #" },
  {
    accessorKey: "action",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex gap-3">
          <CircleEditIcon />
          <CircleCrossIcon />
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
