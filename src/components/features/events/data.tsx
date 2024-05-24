import { ColumnDef } from "@tanstack/react-table";

export const EVENTS_FILTER_OPTIONS = [
  { id: 1, value: "Option 1" },
  { id: 2, value: "Option 2" },
  { id: 3, value: "Option 3" },
  { id: 4, value: "Option 4" },
];

export interface Employee {
  id: string;
  name: string;
  department: string;
  email: string;
  location: string;
  status: "active" | "vacation" | "other leave" | "left";
}

export const employeeData: Employee[] = [
  {
    id: "1",
    name: "John Doe",
    department: "HR",
    email: "john.doe@example.com",
    location: "New York",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    department: "IT",
    email: "jane.smith@example.com",
    location: "San Francisco",
    status: "vacation",
  },
  {
    id: "3",
    name: "Bob Johnson",
    department: "Finance",
    email: "bob.johnson@example.com",
    location: "Chicago",
    status: "other leave",
  },
  {
    id: "4",
    name: "Alice Brown",
    department: "Marketing",
    email: "alice.brown@example.com",
    location: "Denver",
    status: "left",
  },
  {
    id: "5",
    name: "David Wilson",
    department: "Sales",
    email: "david.wilson@example.com",
    location: "Houston",
    status: "active",
  },
  {
    id: "6",
    name: "Emily Taylor",
    department: "Engineering",
    email: "emily.taylor@example.com",
    location: "Denver",
    status: "vacation",
  },
  {
    id: "7",
    name: "Michael Lee",
    department: "IT",
    email: "michael.lee@example.com",
    location: "Seattle",
    status: "other leave",
  },
  {
    id: "8",
    name: "Olivia Hernandez",
    department: "Finance",
    email: "olivia.hernandez@example.com",
    location: "Denver",
    status: "left",
  },
  {
    id: "9",
    name: "Sophia Martinez",
    department: "Marketing",
    email: "sophia.martinez@example.com",
    location: "Atlanta",
    status: "active",
  },
  {
    id: "10",
    name: "James Adams",
    department: "Sales",
    email: "james.adams@example.com",
    location: "New York",
    status: "vacation",
  },
  {
    id: "11",
    name: "James Frost",
    department: "Finance",
    email: "james.frost@example.com",
    location: "Denver",
    status: "active",
  },
  {
    id: "12",
    name: "Lucy Heinz",
    department: "IT",
    email: "lucy.heinz@example.com",
    location: "New York",
    status: "active",
  },
];

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "department",
    header: "department",
  },
  {
    accessorKey: "email",
    header: "email",
  },
  {
    accessorKey: "location",
    header: "location",
  },
];
