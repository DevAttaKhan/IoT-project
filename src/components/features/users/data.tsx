import { ColumnDef } from "@tanstack/react-table";
import { CircleCrossIcon, CircleEditIcon } from "@/assets/icons";
import { faker } from "@faker-js/faker";
export const EVENTS_FILTER_OPTIONS = [
  { id: 1, value: "Option 1" },
  { id: 2, value: "Option 2" },
  { id: 3, value: "Option 3" },
  { id: 4, value: "Option 4" },
];

export interface IUser {
  name: string;
  role: string;
  phoneNumber: string;
  email: string;
  actions: string;
}

export const UserData: IUser[] = Array.from(
  { length: 13 },
  (_, i) => i + 1
).map((_el) => ({
  name: faker.person.fullName(),
  role: faker.helpers.enumValue({
    Admin: "Admin",
    User: "User",
    Manager: "Manger",
  }),
  phoneNumber: faker.phone.number(),
  email: faker.internet.email(),
  actions: "",
}));

export const columns = (action: any): ColumnDef<IUser>[] => [
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "role",
    header: "role",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "phoneNumber",
    header: "PHONE #",
    cell: ({ row }) => {
      return (
        <div>
          <p className="text-xs md:text-base mb-1">
            {row.original.phoneNumber}
          </p>
          <p className="text-dark-gray text-xs md:text-sm">
            {row.original.email}
          </p>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-3">
          {/* we will use id instead of name  */}
          <div
            className="cursor-pointer"
            onClick={() => action.openModal(row.original.name)}
          >
            <CircleEditIcon />
          </div>
          <div className="cursor-pointer" onClick={() => action.onDelete(true)}>
            <CircleCrossIcon />
          </div>
        </div>
      );
    },
  },
];
