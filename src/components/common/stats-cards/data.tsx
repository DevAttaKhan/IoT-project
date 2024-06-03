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
    name: "Critical Alarms",
    type: "Status",
    description: "Current Status of site",
    color: "bg-red-500",
    icon: <ExplodingIcon />,
  },
  {
    name: "Major Alarms",
    type: "Estimated Backup",
    description: "Current Battery Backup Abailable",
    color: "bg-orange-400 ",
    icon: <ConfusedIcon />,
  },
  {
    name: "Online Sites",
    type: "Source",
    description: "Current Power Source",
    color: "bg-green-500",
    icon: <DizzyIcon />,
  },
  {
    name: "Offline Sites",
    type: "0kW",
    description: "Current Site Load",
    color: "bg-indigo-950 ",
    icon: <SickIcon />,
  },
];

export const USER_COLLECTION_LIST: IStatsCard[] = [
  {
    name: "Total Users",
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
    name: "Active Viewers",
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
    description: "Total Installed",
    color: "bg-[#0F5EF9]",
    icon: <SquaresIcon />,
  },
  {
    name: "Active Hardware",
    type: "710",
    description: "Online IoT Hardware",
    color: "bg-green-500",
    icon: <SquaresIcon />,
  },
  {
    name: "Offline Hardware",
    type: "90",
    description: "Offline IoT Hardware",
    color: "bg-indigo-950 ",
    icon: <SquaresIcon />,
  },
  {
    name: "Locations",
    type: "20+",
    description: "   ",
    color: "bg-orange-400 ",
    icon: <SquaresIcon />,
  },
];
