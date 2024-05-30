import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react/jsx-runtime";

const notifications = [
  {
    title: "Main Fail - Grid Outag",
    subtitle: "Main Fail - Grid Outag",
    dateAndTime: "Apr 18,2022 | 22:24 15 Days | 01:05 hrs",
    color: "blue",
    href: "#",
  },
  {
    title: "Main Fail - Grid Outag",
    subtitle: "Main Fail - Grid Outag",
    dateAndTime: "Apr 18,2022 | 22:24 15 Days | 01:05 hrs",
    color: "green",
    href: "#",
  },
  {
    title: "Main Fail - Grid Outag",
    subtitle: "Main Fail - Grid Outag",
    dateAndTime: "Apr 18,2022 | 22:24 15 Days | 01:05 hrs",
    color: "blue",
    href: "#",
  },
];

export const Notifications = () => {
  return (
    <Menu as="div" className="relative  ">
      <MenuButton className="relative flex max-w-xs items-center rounded-full text-gray-400 text-sm focus:outline-none ">
        <div className="relative">
          <BellIcon className="h-7 w-7 text-white" />
          <span className="absolute -top-3 left-3 w-6 h-6 text-xs text-white bg-bluebonnet rounded-full border-2 border-white grid place-content-center">
            18
          </span>
        </div>
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
        <MenuItems className="absolute right-0 z-10 mt-2 w-[280px] origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none">
          <div className="flex justify-between border-b pt-2 pb-2  mb-2 px-4">
            <h4 className="text-black text-md font-semibold">Notification</h4>
            <button className="text-[10px] font-bold text-blue-700">
              CLEAR ALL
            </button>
          </div>
          <div className="border-b ">
            {notifications.map((item, i) => (
              <MenuItem key={item.title + i}>
                <div className="flex gap-x-2 cursor-pointer px-4 py-2 hover:bg-gray-100">
                  <span className="w-3 h-3 block bg-blue-700 rounded-full mt-2"></span>
                  <div>
                    <p className="text-sm  mb-1">{item.title}</p>
                    <p className="text-xs mb-2 text-slate-500">{item.title}</p>
                    <p className="text-sm  mb-1">{item.dateAndTime}</p>
                  </div>
                </div>
              </MenuItem>
            ))}
          </div>
          <button className="py-2 text-xs w-full font-bold text-blue-700 text-center">
            VIEW ALL
          </button>
        </MenuItems>
      </Transition>
    </Menu>
  );
};
