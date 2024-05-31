import { PinIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import { FilterBar, StatsCards } from "@/components/common";
import { SITE_COLLECTION_LIST } from "@/components/common/stats-cards";
import { BellIcon } from "@heroicons/react/24/outline";
import {
  SiteLocationTable,
  AlarmsStatsChart,
} from "@/components/features/dashboard";

export const DashboardPage = () => {
  return (
    <div>
      <FilterBar screenName="Dashboard" hidefilters />
      <StatsCards data={SITE_COLLECTION_LIST} />
      <div className="flex lg:flex-row flex-col  gap-4">
        <SiteLocationTable />

        <div className="lg:w-1/3 w-full ">
          <div className="bg-white rounded-2xl px-6 py-4 mb-4">
            <div className="flex items-center  gap-x-5 mb-7">
              <PinIcon />
              <div>
                <h3 className="text-gray-700 font-bold text-2xl mb-1">
                  Events
                </h3>
                <p className="text-gray-400 text-xs">
                  Last Alert : Apr 14, 2024 | 22:24
                </p>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex gap-x-5 mb-4">
                <span className="w-[16px] h-[16px] block bg-cyan-500 rounded-full mt-2 "></span>
                <div>
                  <p className="text-md font-medium mb-1">
                    Main Fail - Grid Outage
                  </p>
                  <p className="text-[11px] mb-1 text-gray-400">
                    Grid Outage more than 4h
                  </p>
                  <p className="text-sm font-semibold mb-1 leading-loose">
                    Apr 18, 2024 | 22:24 <br />
                    15 days | 01:05 hrs
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 mb-4">
                <span className="w-[16px] h-[16px] block bg-red-500 rounded-full mt-2 "></span>
                <div>
                  <p className="text-md font-medium mb-1">
                    Main Fail - Grid Outage
                  </p>
                  <p className="text-[11px] mb-1 text-gray-400">
                    Grid Outage more than 4h
                  </p>
                  <p className="text-sm font-semibold mb-1 leading-loose">
                    Apr 18, 2024 | 22:24 <br />
                    15 days | 01:05 hrs
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                <span className="w-[16px] h-[16px] block bg-cyan-500 rounded-full mt-2 "></span>
                <div>
                  <p className="text-md font-medium mb-1">
                    Main Fail - Grid Outage
                  </p>
                  <p className="text-[11px] mb-1 text-gray-400">
                    Grid Outage more than 4h
                  </p>
                  <p className="text-sm font-semibold mb-1 leading-loose">
                    Apr 18, 2024 | 22:24 <br />
                    15 days | 01:05 hrs
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/alarms-history"
              className=" block min-w-max text-center uppercase text-blue-600 font-semibold pt-3 pb-2"
            >
              view detail
            </Link>
          </div>
          <div className="bg-white rounded-2xl px-6 py-4">
            <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700 flex gap-x-2 items-center pb-3">
              <BellIcon className="w-7 md:w-9" />
              Live Alarm Stats
            </h2>
            <AlarmsStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};
