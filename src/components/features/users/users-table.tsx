import { DataTable } from "@/components/common/data-table";
import { EVENTS_FILTER_OPTIONS, columns, UserData } from "./data.tsx";
import { SelectDropdown } from "@/components/common";
import { ChartIcon, SearchIcon } from "@/assets/icons";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import { UserModal } from "./user-modal.tsx";

export const UsersTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("Add");

  const handleModal = (id: number) => {
    setOpenModal(true);
    setModalType("Edit")
  };

  const userColumns = useMemo(
    () => columns({ openModal: handleModal }),
    []
  );

  return (
    <div className="   w-full bg-white rounded-2xl md:p-8 p-5 ">
      <div className="flex md:flex-row md:gap-0 gap-4  flex-col w-full mb-16 justify-between">
        <h2 className="font-bold text-2xl text-gray-700 flex gap-x-2 items-center">
          <div>
            <ChartIcon />
          </div>
          User List
        </h2>

        <div className="flex flex-wrap md:flex-nowrap gap-6  gap-x-2">
          <button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-4 py-4 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
            <SearchIcon />
          </button>
          <button 
          className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50"
          onClick={()=> setOpenModal(true)}
          >
            <PlusIcon className=" h-6 w-6 text-black" />
          </button>
          <SelectDropdown label="Filter" options={EVENTS_FILTER_OPTIONS} />
        </div>
      </div>

      <div className="md:overflow-x-visible overflow-x-auto">
        <DataTable columns={userColumns} data={UserData} />
      </div>
       {/* add user dialog */}
      <UserModal isOpen={openModal} setIsOpen={setOpenModal} modalType={modalType} setModalType={setModalType}/>
    </div>
  );
};
