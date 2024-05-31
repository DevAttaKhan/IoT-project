import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { ActiveAlarmColumns, AlarmData, IAlarm } from "./data";
import { SearchByName, exportExcel, getFilterValues } from "@/lib/utils";
import { useState } from "react";
import { Table } from "@tanstack/react-table";
import {
  DataTable,
  TableButton,
  TableDropdownFilter,
  TableSearchbar,
} from "@/components/common";

export const ActiveAlarmTable = () => {
  const [table, setTable] = useState<Table<IAlarm>>();

  const handleCsvExport = () => {
    const rows = table?.getFilteredRowModel().rows;
    exportExcel(rows);
  };

  return (
    <div className="relative w-full bg-white rounded-2xl md:p-8 p-5">
      <div className="flex md:flex-row md:gap-0 gap-4  flex-col w-full mb-16 justify-between">
        <h2 className="font-bold text-2xl text-gray-700 flex gap-x-2 items-center">
          Active Alarms
        </h2>

        <div className="flex flex-wrap md:flex-nowrap gap-3 items-center gap-x-2 self-end">
          <TableSearchbar
            onChange={(value) =>
              SearchByName(value, table?.getColumn("alarmId"))
            }
          />
          <TableButton>
            <ArrowPathIcon className="w-5" />
          </TableButton>
          <TableButton onClick={handleCsvExport}>
            <span className="text-xs">CSV</span>
          </TableButton>
          <TableButton>
            <span className="text-xs">PDF</span>
          </TableButton>

          <TableDropdownFilter
            title="Alarm Type"
            options={getFilterValues(AlarmData, "type")}
            column={table?.getColumn("type")}
          />
        </div>
      </div>

      <div className="md:overflow-x-visible overflow-x-auto pb-5">
        <DataTable
          columns={ActiveAlarmColumns}
          data={AlarmData}
          setTable={setTable}
        />
      </div>
    </div>
  );
};
