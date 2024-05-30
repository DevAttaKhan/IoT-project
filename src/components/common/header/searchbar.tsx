import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react/jsx-runtime";

export const SearchBar = () => {
  return (
    <>
      <div className=" items-center hidden md:flex w-[200px] lg:w-[272px] py-2 px-2 lg:py-4 lg:px-5  text-sm text-gray-900 rounded-full bg-gray-50 overflow-hidden">
        <input
          type="search"
          className=" w-full flex-1 outline-none me-3 bg-gray-50"
        />
        <div className="-mb-1">
          <MagnifyingGlassIcon className="w-5" />
        </div>
      </div>

      <Menu as="div" className=" relative block md:hidden ">
        <MenuButton className="text-white flex outline-none">
          <MagnifyingGlassIcon className="w-6" />
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
          <MenuItems className="fixed  left-0 right-2 top-[70px]  border">
            <div className="flex  py-2 px-2 lg:py-4 lg:px-5  text-sm text-gray-900   bg-white">
              <input
                type="search"
                className=" w-full flex-1 outline-none me-3"
              />
              <div className="-mb-2">
                <MagnifyingGlassIcon className="w-5" />
              </div>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};
