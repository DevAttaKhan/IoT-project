import { WheelIcon } from "@/assets/icons";
import { FilterBar, StatsCards } from "@/components/common";
import { HARDWARE_COLLECTION_LIST } from "@/components/common/stats-cards";
import {
  BreakdownChart,
  HardwaresTable,
} from "@/components/features/hardwares";
import { BreakdownLineChart } from "@/components/features/hardwares/line-chart";

export const HardwaresPage = () => {
  return (
    <div>
      <FilterBar
        icon={<WheelIcon />}
        screenName="Hardware Onboarding"
        hidefilters
      />
      <StatsCards data={HARDWARE_COLLECTION_LIST} />
      <div className="flex lg:flex-row flex-col  gap-4">
        <HardwaresTable />

        <div className="lg:w-1/3 w-full ">
          <div className="bg-white rounded-2xl px-6 py-4 mb-4">
            <BreakdownChart />
          </div>
          <div className="bg-white rounded-2xl px-6 py-4">
            <BreakdownLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};
