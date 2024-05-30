import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Fragment } from "react";

type Props = {
  name?: string;
  label?: string;
  icon?: React.ReactNode;
  buttonClass?: string;
  containerClass?: string;
  itemsContainerClass?: string;
  options: { id: number; value: string }[];
};

export const SelectDropdown = ({
  label,
  options,
  icon,
  buttonClass,
  containerClass,
  itemsContainerClass,
}: Props) => {
  return (
    <Menu
      as="div"
      className={classNames("relative inline-block text-left", containerClass)}
    >
      <div>
        {label && (
          <MenuButton
            className={classNames(
              "rounded-md inline-flex w-full border justify-center gap-x-1.5  bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50",
              buttonClass
            )}
          >
            {label}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </MenuButton>
        )}

        {icon && <MenuButton>{icon}</MenuButton>}
      </div>

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
          className={classNames(
            "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            itemsContainerClass
          )}
        >
          <div className="py-1">
            {options.map((el, i) => {
              return (
                <MenuItem key={i}>
                  {({ active }: { active: boolean }) => (
                    <div
                      className={classNames("block px-4 py-2 text-sm w-full", {
                        "bg-gray-100 text-gray-900": active,
                        "text-gray-700": !active,
                      })}
                    >
                      {el.value}
                    </div>
                  )}
                </MenuItem>
              );
            })}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};
