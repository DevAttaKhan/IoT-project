import { SelectDropdown, TableSearchbar } from "@/components/common";
import { FILTER_OPTIONS, columns, siteLocations } from "./data.tsx";
import { LocationIcon, MapSvg, SearchIcon } from "@/assets/icons";
import { DataTable } from "@/components/common";
import { useMemo, useState } from "react";
import { SiteLocationModal } from "./site-location-modal.tsx";

export const SiteLocationTable = () => {
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
      <div className=" lg:w-2/3 w-full bg-white rounded-2xl md:p-8 p-5 relative ">
        <div className="flex md:flex-row md:gap-0 gap-4   w-full mb-16 justify-between">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700 flex gap-x-2 items-center">
            <LocationIcon />
            Site Locations
          </h2>

          <TableSearchbar />
        </div>
        <div className="mb-28">
          <MapSvg />
        </div>
        <div className="md:overflow-x-visible  overflow-x-auto pb-4">
          <DataTable columns={sitelocationColumns} data={siteLocations} />
        </div>
      </div>
      <SiteLocationModal isOpen={openModal} setIsOpen={setOpenModal} />
    </>
  );
};
