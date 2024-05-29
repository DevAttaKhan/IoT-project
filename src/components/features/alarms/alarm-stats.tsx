import classNames from "classnames";
import { AlarmStateData } from "./data";

export const AlarmStats = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap  md:gap-0 gap-6 mb-[72px] py-0 px-0 md:py-5 md:px-10 rounded-xl md:shadow-lg  md:bg-white ">
      {AlarmStateData.map((el, i) => (
        <Stat key={i} data={el} />
      ))}
    </div>
  );
};

const Stat = ({ data }: { data: (typeof AlarmStateData)[0] }) => {
  return (
    <div className=" text-center flex-1 px-2  bg-white   p-3 rounded-xl md:rounded-none  stat-card ">
      <p className={classNames("text-3xl font-semibold mb-3", data.color)}>
        {data.count}
      </p>
      <p className="text-[#6E6E6E] mb-7 ">{data.type}</p>
      <p className="text-dark-gray text-sm">{data.siteCount} Site</p>
    </div>
  );
};
