import { IStatsCard } from "@/types";
import { StatsCard } from "./stats-card";

type Props = { data: IStatsCard[] };

export const StatsCards = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 gap-7 mb-7 md:mb-12">
      {data.map((el) => (
        <StatsCard {...el} />
      ))}
    </div>
  );
};
