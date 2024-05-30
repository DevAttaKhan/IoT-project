import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import UserIconImage from "../../../assets/images/user.png";
import { Fragment } from "react/jsx-runtime";
import {
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const userNavigation = [
  { name: "Your Profile", href: "profile", icon: <UserIcon className="w-5" /> },
  {
    name: "Log out",
    href: "/",
    icon: <ArrowLeftStartOnRectangleIcon className="w-5" />,
  },
];

export const AvatarMenu = () => {
  return (
    <Menu as="div" className="relative shrink-0">
      <MenuButton className="relative flex max-w-xs items-center rounded-full  text-sm focus:outline-none">
        <div className="AVATAR flex items-start gap-3">
          <img className="h-16 w-16 rounded-lg" src={UserIconImage} alt="" />
          <div className="hidden md:block">
            <h3 className="text-white text-lg font-medium mb-1 leading-none">
              Ricardo Gomez
            </h3>
            <p className="text-start text-white text-xs">Superadmin</p>
          </div>
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
        <MenuItems className="absolute right-0 z-10 mt-2 w-[200px] origin-top-right rounded-md bg-white py-2 shadow-lg focus:outline-none cursor-pointer">
          {userNavigation.map((item) => (
            <MenuItem
              key={item.name}
              as="div"
              className="mb-3 hover:bg-slate-100 py-2 px-4"
            >
              <Link
                to={item.href}
                className="flex gap-x-3 items-center text-[15px] text-gray-700 font-semibold "
              >
                {item.icon}
                {item.name}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};
