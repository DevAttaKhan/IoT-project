import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Column } from "@tanstack/react-table";
import { Fragment, useState } from "react";

interface Props<TData, TValue> {
  column?: Column<TData, TValue>;
  name?: string;
  title?: string;
  options: { label: string; value: string }[];
}

export const TableDropdownFilter = <TData, TValue>({
  title,
  options,
  column,
}: Props<TData, TValue>) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isSelected = selectedFilters.includes(e.target.name);
    let filterValues: string[] = [];
    if (isSelected) {
      filterValues = selectedFilters.filter((el) => el !== e.target.name);
      setSelectedFilters(filterValues);
    } else {
      filterValues = [...selectedFilters, e.target.name];
      setSelectedFilters(filterValues);
    }

    column?.setFilterValue(filterValues.length ? filterValues : undefined);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    column?.setFilterValue(undefined);
  };

  return (
    <Menu as="div" className="relative text-left shrink-0">
      <MenuButton className="w-full h-[45px] flex gap-2 items-center  rounded-md border justify-center bg-white px-3 text-md text-slate-400 hover:bg-gray-50">
        {title}
        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" />
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
          static={true}
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {options.map((el, i) => {
            return (
              <label
                key={i}
                htmlFor={el.label}
                className="text-start  text-sm w-full hover:bg-gray-50 flex px-4 py-2 gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={el.label}
                  name={el.label}
                  checked={selectedFilters.includes(el.label)}
                  onChange={handleFilterSelect}
                />

                {el.value}
              </label>
            );
          })}
          {selectedFilters.length ? (
            <button
              onClick={clearFilters}
              className="py-2 text-xs w-full font-bold text-blue-700 text-center uppercase hover:bg-gray-100"
            >
              clear filters
            </button>
          ) : null}
        </MenuItems>
      </Transition>
    </Menu>
  );
};
