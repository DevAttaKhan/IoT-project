import { SearchIcon } from "@/assets/icons";
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, useState } from "react";

export const TableSearchbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className=" hidden md:flex h-9 md:h-[45px] text-black rounded border  hover:bg-gray-50 transition-all">
        <input
          type="search"
          className={classNames(
            "w-full outline-none bg-inherit transition-all  overflow-hidden",
            [active ? " md:relative md:max-w-60 lg:max-w-72 px-2" : "w-0"]
          )}
        />
        <button
          onClick={() => setActive((prev) => !prev)}
          className="ml-auto  h-9 w-9 md:w-[45px] md:h-[45px] shrink-0 grid place-content-center"
        >
          <SearchIcon className="ml-1 mt-1" />
        </button>
      </div>
      <Menu as="div" className=" block md:hidden">
        <MenuButton className="ml-auto  h-9 w-9   shrink-0 grid place-content-center border rounded ">
          <SearchIcon className="ml-1 mt-1" />
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems
            as="div"
            className="absolute right-1 left-2 border  px-4 py-2 table-search--mobile z-10 mt-2  origin-top-right rounded-md shadow-lg focus:outline-none"
          >
            <input
              type="search"
              placeholder="Search"
              className="w-full outline-none  bg-inherit transition-all  overflow-hidden   shodow-lg rounded-lg "
            />
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};

//  w-[45px]
