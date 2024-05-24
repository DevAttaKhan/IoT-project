import { DataTable } from "@/components/common/data-table";
import { EVENTS_FILTER_OPTIONS, columns, employeeData } from "./data";
import { SelectDropdown } from "@/components/common";
import { DownloadIcon, SearchIcon, TumbtackIcon } from "@/assets/icons";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export const EventsTable = () => {
  return (
    <div className="   w-full bg-white rounded-2xl md:p-8 p-5 ">
      <div className="flex md:flex-row md:gap-0 gap-4  flex-col w-full mb-16 justify-between">
        <h2 className="font-bold text-2xl text-gray-700 flex gap-x-2 items-center">
          <div>
            <TumbtackIcon />
          </div>
          Events
        </h2>

        <div className="flex flex-wrap md:flex-nowrap gap-6  gap-x-2">
          <button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-4 py-4 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
            <SearchIcon />
          </button>
          <button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
            <PlusIcon className=" h-6 w-6 text-black" />
          </button>
          <button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
            <MinusIcon className=" h-6 w-6 text-black" />
          </button>
          <button className="inline-flex w-full shadow justify-center gap-x-1.5 rounded-md bg-white px-4 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
            <DownloadIcon />
          </button>

          <SelectDropdown label="Filter" options={EVENTS_FILTER_OPTIONS} />
        </div>
      </div>

      <div className="md:overflow-x-visible overflow-x-auto">
        <DataTable columns={columns} data={employeeData} />
      </div>
    </div>
  );
};
