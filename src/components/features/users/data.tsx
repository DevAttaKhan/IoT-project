import { ColumnDef } from "@tanstack/react-table";
import { CircleCrossIcon, CircleEditIcon } from "@/assets/icons";
export const EVENTS_FILTER_OPTIONS = [
  { id: 1, value: "Option 1" },
  { id: 2, value: "Option 2" },
  { id: 3, value: "Option 3" },
  { id: 4, value: "Option 4" },
];

export interface IEvent {
  id?: string;
  name: string;
  location: string;
  siteId: string;
  phone: { phoneNumber: string; email: string };
  action: string;
}

export const EventData: IEvent[] = [
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
  {
    name: "Stephan Orchid",
    location: "216 Maxine Garden",
    siteId: "HAU1724Y",
    phone: {
      phoneNumber: "555-123-4567",
      email: "stephanorchid@mail.com",
    },
    action: "",
  },
];

export const columns: ColumnDef<IEvent>[] = [
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      return (
        <div>
          <p className="text-base">{row.original.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "location",
    header: "LOCATION",
    cell: ({ row }) => {
      return (
        <div>
          <p className="text-base">{row.original.location}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "siteId",
    header: "SITE ID",
  },
  {
    accessorKey: "phone",
    header: "PHONE #",
    cell: ({ row }) => {
      return (
        <div>
          {" "}
          <p className="text-base mb-1">{row.original.phone.phoneNumber}</p>
          <p className="text-dark-gray text-sm">{row.original.phone.email}</p>
        </div>
      );
    },
  },
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
