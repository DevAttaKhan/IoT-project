import { DataTable } from "@/components/common/data-table";
import { columns, UserData, IUser } from "./data.tsx";
import {
  TableButton,
  TableDropdownFilter,
  TableSearchbar,
} from "@/components/common";
import { ChartIcon } from "@/assets/icons";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";
import { UserModal } from "./user-modal.tsx";
import WarningPrompt from "@/components/common/warning-prompt.tsx";
import { SearchByName, getFilterValues } from "@/lib/utils.ts";
import { Table } from "@tanstack/react-table";

export const UsersTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("Add");
  const [isDeleting, setIsDeleting] = useState(false);
  const [table, setTable] = useState<Table<IUser>>();

  const handleModal = (_id: number) => {
    setOpenModal(true);
    setModalType("Edit");
  };

  const userColumns = useMemo(
    () => columns({ openModal: handleModal, onDelete: setIsDeleting }),
    []
  );

  return (
    <div className=" relative  w-full bg-white rounded-2xl md:p-8 p-5 ">
      <div className="flex md:flex-row md:gap-0 gap-4  flex-col w-full mb-16 justify-between">
        <h2 className="font-bold text-2xl text-gray-700 flex gap-x-2 items-center">
          <div>
            <ChartIcon />
          </div>
          User List
        </h2>

        <div className="flex flex-wrap md:flex-nowrap gap-3 items-center gap-x-2 self-end">
          <TableSearchbar
            onChange={(value) => SearchByName(value, table?.getColumn("name"))}
          />
          <TableButton onClick={() => setOpenModal(true)}>
            <PlusIcon className=" h-6 w-6 text-black" />
          </TableButton>

          <TableDropdownFilter
            title="Site ID"
            options={getFilterValues(UserData, "siteId")}
            column={table?.getColumn("siteId")}
          />
        </div>
      </div>

      <div className="md:overflow-x-visible overflow-x-auto pb-5">
        <DataTable columns={userColumns} data={UserData} setTable={setTable} />
      </div>
      {/* add user dialog */}
      <UserModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        modalType={modalType}
        setModalType={setModalType}
      />
      <WarningPrompt isOpen={isDeleting} setIsOpen={setIsDeleting} />
    </div>
  );
};
