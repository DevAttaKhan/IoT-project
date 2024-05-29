import { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// IMAGES
import Logo from "../../assets/images/logo.png";
import UserIcon from "../../assets/images/user.png";
import { MoonIcon, SearchIcon, SunIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "profile" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
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
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#000239]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-[1440px] px-5 py-3 md:py-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center gap-1 gap-x-2 ">
                      <img src={Logo} alt="" />
                    </div>
                  </div>
                  <div className="hidden md:flex ">
                    <div className="ml-4 flex items-center gap-5  pe-8  border-e-2 me-5 border-slate-700 md:ml-6">
                      <SearchBar />
                      <Notifications />
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <MenuButton className="relative flex max-w-xs items-center rounded-full  text-sm focus:outline-none">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <div className="flex items-center">
                              <img
                                className="h-16 w-16 rounded-lg"
                                src={UserIcon}
                                alt=""
                              />
                              <div className="ms-3">
                                <h3 className="text-white text-xl font-semibold mb-2">
                                  Ricardo Gomez
                                </h3>
                                <p className="text-start text-white text-md">
                                  Superadmin
                                </p>
                              </div>
                            </div>
                          </MenuButton>
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
                          <MenuItems className="absolute right-0  z-10 mt-2 w-[200px] origin-top-right rounded-md bg-white px-4 py-4 pb-2 shadow-lg focus:outline-none">
                            {userNavigation.map((item) => (
                              <MenuItem key={item.name}>
                                {({ active }) => (
                                  <div className="flex gap-x-3  items-center mb-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="size-5"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                      />
                                    </svg>

                                    <Link
                                      to={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block text-[15px] text-gray-700 font-semibold "
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  </div>
                                )}
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Transition>
                      </Menu>
                    </div>
                    <div className="flex">
                      <button type="button">
                        <SunIcon />
                      </button>
                      <button type="button">
                        <MoonIcon />
                      </button>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
};

const SearchBar = () => {
  return (
    <form className="max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 end-0 flex items-center pe-5 pointer-events-none">
          <SearchIcon className="w-5" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-[300px] p-4 py-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 "
        />
      </div>
    </form>
  );
};

const Notifications = () => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex max-w-xs items-center rounded-full text-gray-400 text-sm focus:outline-none ">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white  rounded-lg focus:outline-none d">
            <BellIcon className="h-7 w-7 text-white" />
            <span className="sr-only">Notifications</span>
            <div className="absolute top-0 right-0 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-700 border-2 border-white rounded-full">
              20
            </div>
          </div>
        </MenuButton>
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
        <MenuItems className="absolute right-0 z-10 mt-2 w-[280px] origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none p-4">
          <div className="flex justify-between border-b pt-2 pb-2 mb-4">
            <h4 className="text-black text-md font-semibold">Notification</h4>
            <button
              type="button"
              className="text-[10px] font-bold text-blue-700"
            >
              CLEAR ALL
            </button>
          </div>
          <div className="border-b pb-2">
            {notifications.map((item, i) => (
              <MenuItem key={item.title + i}>
                {({ active }: { active: boolean }) => (
                  <div className="flex gap-x-2">
                    <span className="w-[12px] h-[12px] block bg-blue-700 rounded-full mt-2"></span>
                    <div>
                      <p className="text-sm font-semibold mb-1">{item.title}</p>
                      <p className="text-[11px] mb-2 text-slate-500">
                        {item.title}
                      </p>
                      <p className="text-sm font-semibold mb-1">
                        {item.dateAndTime}
                      </p>
                    </div>
                  </div>
                )}
              </MenuItem>
            ))}
          </div>
          <button
            type="button"
            className="py-2 text-[10px] w-full font-bold text-blue-700 text-center"
          >
            VIEW ALL
          </button>
        </MenuItems>
      </Transition>
    </Menu>
  );
};
