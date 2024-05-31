import { CalendarIcon, SearchIcon } from "@/assets/icons";
import {
  DataTable,
  SelectDropdown,
  TableButton,
  TableDropdownFilter,
  TableSearchbar,
} from "@/components/common";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { EVENTS_FILTER_OPTIONS } from "../events";
import { AlarmData, AlarmHistoryColumns, IAlarm } from "./data";
import { getFilterValues } from "@/lib/utils";
import { useState } from "react";
import { Table } from "@tanstack/react-table";

export const AlarmHistoryTable = () => {
  const [table, setTable] = useState<Table<IAlarm>>();

  return (
    <div className="   w-full bg-white rounded-2xl md:p-8 p-5  mt-11 ">
      <div className="flex md:flex-row md:gap-0 gap-4  flex-col w-full mb-16 justify-between">
        <h2 className="font-bold text-2xl text-gray-700 flex gap-x-2 items-center">
          Alarms History
        </h2>

        <div className="flex flex-wrap md:flex-nowrap gap-3 items-center gap-x-2 self-end">
          <TableSearchbar />
          <TableButton>
            <ArrowPathIcon className="w-5" />
          </TableButton>
          <TableButton>
            <span>CSV</span>
          </TableButton>
          <TableButton>
            <span>PDF</span>
          </TableButton>
          <TableButton>
            <CalendarIcon />
          </TableButton>

          <TableDropdownFilter
            title="Alarm Type"
            options={getFilterValues(AlarmData, "type")}
            column={table?.getColumn("type")}
          />
        </div>
      </div>

      <div className=" overflow-x-auto pb-5 text-xs">
        <DataTable
          columns={AlarmHistoryColumns}
          data={AlarmData}
          setTable={setTable}
        />
      </div>
    </div>
  );
};
