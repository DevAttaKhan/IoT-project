import { SelectDropdown } from "@/components/common";
import { FILTER_OPTIONS } from "../dashboard/data";
import { HardwareData, columns } from "./data";
import { LocationIcon, SearchIcon, ToolboxIcon } from "@/assets/icons";
import { DataTable } from "@/components/common";
import { useMemo, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

export const HardwaresTable = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (id: string) => {
    console.log(id);
    setOpenModal(true);
  };

  const sitelocationColumns = useMemo(
    () => columns({ openModal: handleModal }),
    []
  );

  return (
    <>
      <div className=" lg:w-2/3 w-full bg-white rounded-2xl md:p-8 p-5 ">
        <div className="flex md:flex-row md:gap-0 gap-4  flex-col w-full mb-16 justify-between">
          <h2 className="font-bold text-2xl text-gray-700 flex gap-x-2 items-center">
            <ToolboxIcon />
            Installed Hardwares
          </h2>

          <div className="flex flex-wrap md:flex-nowrap gap-3 items-center gap-x-2">
            <button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-4 py-4 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
              <SearchIcon />
            </button>
            <button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
              <PlusIcon className=" h-6 w-6 text-black" />
            </button>
            <SelectDropdown label="Filter" options={FILTER_OPTIONS} />
          </div>
        </div>

        <div className="md:overflow-x-visible overflow-x-auto">
          <DataTable columns={sitelocationColumns} data={HardwareData} />
        </div>
      </div>
    </>
  );
};
