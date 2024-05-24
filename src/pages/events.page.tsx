import { FilterBar, StatsCards } from "@/components/common";
import { SITE_COLLECTION_LIST } from "@/components/common/stats-cards";
import { EventsTable } from "@/components/features/events";

export const EventsPage = () => {
  return (
    <>
      <FilterBar screenName="Site Collection" />
      <StatsCards data={SITE_COLLECTION_LIST} />
      <EventsTable />
    </>
  );
};
