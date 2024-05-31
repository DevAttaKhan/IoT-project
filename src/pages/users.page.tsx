import { UsersIcon } from "@/assets/icons";
import {
  FilterBar,
  StatsCards,
  USER_COLLECTION_LIST,
} from "@/components/common";
import { UsersTable } from "@/components/features/users";

export const UsersPage = () => {
  return (
    <div>
      <FilterBar screenName="Manage Users" hidefilters icon={<UsersIcon />} />
      <StatsCards data={USER_COLLECTION_LIST} />
      <UsersTable />
    </div>
  );
};
