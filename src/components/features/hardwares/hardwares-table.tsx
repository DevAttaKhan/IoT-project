import {
  TableButton,
  TableDropdownFilter,
  TableSearchbar,
  WarningPrompt,
} from "@/components/common";
import { HardwareData, IHardware, columns } from "./data";
import { ToolboxIcon } from "@/assets/icons";
import { DataTable } from "@/components/common";
import { useMemo, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Table } from "@tanstack/react-table";
import { AddHardwareModal } from "./add-hardware-modal";
import { SearchByName, getFilterValues } from "@/lib/utils";

export const HardwaresTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [table, setTable] = useState<Table<IHardware>>();

  const handleEdit = (row: IHardware) => {
    console.log(row);
    setOpenModal(true);
  };

  //use to export to csv
  // console.log(table?.getFilteredRowModel());

  const hardareColumns = useMemo(
    () => columns({ handleEdit, promptWarning: setShowWarning }),
    []
  );

  return (
    <>
      <div className=" lg:w-2/3 w-full bg-white rounded-2xl md:p-8 p-5 relative">
        <div className="flex md:flex-row md:gap-0 gap-4  flex-col w-full mb-16 justify-between">
          <h2 className="font-bold text-lg  lg:text-1xl xl:text-2xl text-gray-700 flex gap-x-2 items-center">
            <ToolboxIcon />
            Installed Hardwares
          </h2>

          <div className="flex flex-wrap md:flex-nowrap gap-3 items-center gap-x-2 self-end">
            <TableSearchbar
              onChange={(value) =>
                SearchByName(value, table?.getColumn("chipId"))
              }
            />
            <TableButton onClick={() => setOpenModal(true)}>
              <PlusIcon className=" h-6 w-6 text-black" />
            </TableButton>

            <TableDropdownFilter
              title="Site"
              options={getFilterValues(HardwareData, "site")}
              column={table?.getColumn("site")}
            />
          </div>
        </div>

        <div className="md:overflow-x-visible overflow-x-auto pb-4">
          <DataTable
            columns={hardareColumns}
            data={HardwareData}
            setTable={setTable}
          />
        </div>
      </div>

      <AddHardwareModal isOpen={openModal} setIsOpen={setOpenModal} />
      <WarningPrompt
        isOpen={showWarning}
        setIsOpen={setShowWarning}
        title="hardware deletion confirmation"
        description="Are you sure about deleting this hardware"
      />
    </>
  );
};
