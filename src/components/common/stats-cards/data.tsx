import { IStatsCard } from "@/types";
import {
  ConfusedIcon,
  DizzyIcon,
  ExplodingIcon,
  SickIcon,
  SquaresIcon,
  UserIcon,
} from "@/assets/icons";

export const SITE_COLLECTION_LIST: IStatsCard[] = [
  {
    name: "Critical",
    type: "Status",
    description: "Current Status of site",
    color: "bg-red-500",
    icon: <ExplodingIcon />,
  },
  {
    name: "Undetermin ed",
    type: "Source",
    description: "Current Power Source",
    color: "bg-green-500",
    icon: <DizzyIcon />,
  },
  {
    name: "Infinitehr",
    type: "Estimated Backup",
    description: "Current Battery Backup Abailable",
    color: "bg-orange-400 ",
    icon: <ConfusedIcon />,
  },
  {
    name: "Site Load",
    type: "0kW",
    description: "Current Site Load",
    color: "bg-indigo-950 ",
    icon: <SickIcon />,
  },
];

export const USER_COLLECTION_LIST: IStatsCard[] = [
  {
    name: "Total Managers",
    type: "600+",
    description: "Current Status of site",
    color: "bg-[#0F5EF9]",
    icon: <UserIcon />,
  },
  {
    name: "Active Managers",
    type: "490",
    description: "Current Power Source",
    color: "bg-[#3CD860]",
    icon: <UserIcon />,
  },
  {
    name: "Total Sites",
    type: "290",
    description: "Current Battery Backup Abailable",
    color: "bg-[#FF8D0E]",
    icon: <UserIcon />,
  },
  {
    name: "Active Members",
    type: "12k+",
    description: "Current Site Load",
    color: "bg-[#1D1C1C] ",
    icon: <UserIcon />,
  },
];

export const HARDWARE_COLLECTION_LIST: IStatsCard[] = [
  {
    name: "Total Hardware",
    type: "800+",
    description: "Current Status of site",
    color: "bg-[#0F5EF9]",
    icon: <SquaresIcon />,
  },
  {
    name: "Active Hardware",
    type: "710",
    description: "Current Power Source",
    color: "bg-green-500",
    icon: <SquaresIcon />,
  },
  {
    name: "Locations",
    type: "20+",
    description: "Current Battery Backup Available",
    color: "bg-orange-400 ",
    icon: <SquaresIcon />,
  },
  {
    name: " Disable Hardware",
    type: "90",
    description: "Current Site Load",
    color: "bg-indigo-950 ",
    icon: <SquaresIcon />,
  },
];
