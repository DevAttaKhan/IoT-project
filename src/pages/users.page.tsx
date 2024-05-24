
import { UsersIcon } from "@/assets/icons";
import { StatsCards, USER_COLLECTION_LIST } from "@/components/common";
import { UsersTable } from "@/components/features/users";

export const UsersPage = () => {
  return (
    <div className="p-6 max-w-[1360px] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:mb-10 mb-7">
        <h1 className=" text-3xl text-gray-700 font-bold flex gap-x-2 items-center">
          <UsersIcon />
          Manage user
        </h1>
      </div>
      <StatsCards data={USER_COLLECTION_LIST} />
    <UsersTable />
    </div>
  );
};
