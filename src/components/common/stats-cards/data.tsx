import { IStatsCard } from "@/types";
import {
  ConfusedIcon,
  DizzyIcon,
  ExplodingIcon,
  SickIcon,
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
