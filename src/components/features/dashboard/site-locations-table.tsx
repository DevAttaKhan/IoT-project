import { TableButton, TableSearchbar } from "@/components/common";
import { ISiteLocation, columns, siteLocations } from "./data.tsx";
import { LocationIcon } from "@/assets/icons";
import { DataTable } from "@/components/common";
import { useMemo, useState } from "react";
import { SiteLocationModal } from "./site-location-modal.tsx";
import { SearchByName } from "@/lib/utils.ts";
import { Table } from "@tanstack/react-table";
import { PlusIcon } from "@heroicons/react/24/outline";
import { AddSiteModal } from "./add-site-modal.tsx";
import { SiteMap } from "./site-map.tsx";

export const SiteLocationTable = () => {
  const [addSiteModal, setAddSiteModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [table, setTable] = useState<Table<ISiteLocation>>();

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
      <div className=" lg:w-2/3 w-full bg-white rounded-2xl md:p-8 p-5 relative ">
        <div className="flex md:flex-row md:gap-0 gap-4   w-full mb-16 justify-between">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700 flex gap-x-2 items-center">
            <LocationIcon />
            Site Locations
          </h2>

          <div className="flex flex-wrap md:flex-nowrap gap-3 items-center gap-x-2 self-end">
            <TableSearchbar
              onChange={(value) =>
                SearchByName(value, table?.getColumn("siteId"))
              }
            />
            <TableButton onClick={() => setAddSiteModal(true)}>
              <PlusIcon className=" h-6 w-6 text-black" />
            </TableButton>
          </div>
        </div>
        <div className="mb-20 relative h-96 rounded-md overflow-hidden">
          <SiteMap />
        </div>
        <div className="md:overflow-x-visible  overflow-x-auto pb-4">
          <DataTable
            columns={sitelocationColumns}
            data={siteLocations}
            setTable={setTable}
          />
        </div>
      </div>
      <SiteLocationModal isOpen={openModal} setIsOpen={setOpenModal} />
      <AddSiteModal isOpen={addSiteModal} setIsOpen={setAddSiteModal} />
    </>
  );
};
