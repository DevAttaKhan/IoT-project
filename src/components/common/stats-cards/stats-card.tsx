import { IStatsCard } from "@/types";
import classNames from "classnames";

type Props = IStatsCard;

export const StatsCard = ({ type, name, description, icon, color }: Props) => {
  return (
    <div className={classNames(" p-4 pb-5 px-8 text-white rounded-lg", color)}>
      <div className=" grid place-content-center bg-white p-[6px] size-9 rounded-md mb-4">
        {icon}
      </div>

      <h2 className="text-[22px] font-semibold mb-3">{name}</h2>
      <h3 className="text-[17px]">{type}</h3>
      <p className="text-[13px]">{description}</p>
    </div>
  );
};
