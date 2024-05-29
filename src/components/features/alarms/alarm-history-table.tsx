import { CalendarIcon, SearchIcon } from "@/assets/icons";
import { DataTable, SelectDropdown } from "@/components/common";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { EVENTS_FILTER_OPTIONS } from "../events";
import { AlarmData, AlarmHistoryColumns } from "./data";

export const AlarmHistoryTable = () => {
  return (
    <div className="   w-full bg-white rounded-2xl md:p-8 p-5  mt-11 ">
      <div className="flex md:flex-row md:gap-0 gap-4  flex-col w-full mb-16 justify-between">
        <h2 className="font-bold text-2xl text-gray-700 flex gap-x-2 items-center">
          Alarms History
        </h2>

        <div className="flex flex-wrap md:flex-nowrap gap-6  gap-x-2">
          <button className="inline-flex w-full border justify-center rounded-md bg-white px-4 py-4 text-md items-center font-normal  shadow-sm hover:bg-gray-50">
            <SearchIcon />
          </button>
          <button className="inline-flex w-full border justify-center rounded-md bg-white px-4 py-4 text-md items-center font-normal  shadow-sm hover:bg-gray-50">
            <ArrowPathIcon className="w-5" />
          </button>
          <button className="inline-flex w-full border justify-center rounded-md bg-white px-4 py-3 text-md items-center font-normal  shadow-sm hover:bg-gray-50">
            PDF
          </button>
          <button className="inline-flex w-full border justify-center rounded-md bg-white px-4 py-3 text-md items-center font-normal  shadow-sm hover:bg-gray-50">
            CSV
          </button>
          <button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-3 text-md items-center font-normal border hover:bg-gray-50">
            <CalendarIcon />
          </button>

          <SelectDropdown
            label="Alarm Type"
            options={EVENTS_FILTER_OPTIONS}
            buttonClass="w-36"
          />
        </div>
      </div>

      <div className=" overflow-x-auto text-xs pb-4">
        <DataTable columns={AlarmHistoryColumns} data={AlarmData} />
      </div>
    </div>
  );
};
