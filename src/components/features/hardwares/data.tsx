import { CircleCrossIcon, CircleEditIcon } from "@/assets/icons";
import { faker } from "@faker-js/faker";
import { ColumnDef } from "@tanstack/react-table";

export interface IHardware {
  chipId: string;
  siteId: string;
  installedDate: string;
  actions: "";
}

export const columns = (action: any): ColumnDef<IHardware>[] => [
  { accessorKey: "chipId", header: "chip ID" },
  {
    accessorKey: "siteId",
    header: "SiteId",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "installedDate",
    header: "Installed Date",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
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

export const HardwareData: IHardware[] = Array.from(
  { length: 13 },
  (_, i) => i + 1
).map((_el) => ({
  chipId: faker.string.alphanumeric(6),
  siteId: faker.string.alphanumeric(6),
  installedDate: new Date(faker.date.anytime()).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  actions: "",
}));
