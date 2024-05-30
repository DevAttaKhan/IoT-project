import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { PinIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import { FilterBar, StatsCards } from "@/components/common";
import { SITE_COLLECTION_LIST } from "@/components/common/stats-cards";
import classNames from "classnames";
import { BellIcon } from "@heroicons/react/24/outline";
import {
  SiteLocationTable,
  AlarmsStatsChart,
} from "@/components/features/dashboard";

export const DashboardPage = () => {
  return (
    <div>
      <FilterBar screenName="Site Collection" hidefilters />
      <StatsCards data={SITE_COLLECTION_LIST} />
      <div className="flex lg:flex-row flex-col  gap-4">
        <SiteLocationTable />

        <div className="lg:w-1/3 w-full ">
          <div className="bg-white rounded-2xl px-6 py-4 mb-4">
            <div className="flex items-center justify-between gap-x-5 mb-7">
              <div className="flex items-center gap-x-4">
                <PinIcon />
                <div className="">
                  <h3 className="text-gray-700 font-bold text-2xl mb-1">
                    Event
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Last Alert : Apr 14, 2024 | 22:24
                  </p>
                </div>
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
                    Filter
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
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
                  <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </MenuItem>
                      <form method="POST" action="#">
                        <MenuItem>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </MenuItem>
                      </form>
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
            <div className="border-b pb-4">
              <div className="flex gap-x-5 mb-4">
                <span className="w-[16px] h-[16px] block bg-cyan-500 rounded-full mt-2 "></span>
                <div>
                  <p className="text-md font-medium mb-1">
                    Main Fail - Grid Outage
                  </p>
                  <p className="text-[11px] mb-1 text-gray-400">
                    Grid Outage more than 4h
                  </p>
                  <p className="text-sm font-semibold mb-1 leading-loose">
                    Apr 18, 2024 | 22:24 <br />
                    15 days | 01:05 hrs
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 mb-4">
                <span className="w-[16px] h-[16px] block bg-red-500 rounded-full mt-2 "></span>
                <div>
                  <p className="text-md font-medium mb-1">
                    Main Fail - Grid Outage
                  </p>
                  <p className="text-[11px] mb-1 text-gray-400">
                    Grid Outage more than 4h
                  </p>
                  <p className="text-sm font-semibold mb-1 leading-loose">
                    Apr 18, 2024 | 22:24 <br />
                    15 days | 01:05 hrs
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                <span className="w-[16px] h-[16px] block bg-cyan-500 rounded-full mt-2 "></span>
                <div>
                  <p className="text-md font-medium mb-1">
                    Main Fail - Grid Outage
                  </p>
                  <p className="text-[11px] mb-1 text-gray-400">
                    Grid Outage more than 4h
                  </p>
                  <p className="text-sm font-semibold mb-1 leading-loose">
                    Apr 18, 2024 | 22:24 <br />
                    15 days | 01:05 hrs
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/events"
              className=" block min-w-max text-center uppercase text-blue-600 font-semibold pt-3 pb-2"
            >
              view detail
            </Link>
          </div>
          <div className="bg-white rounded-2xl px-6 py-4">
            <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700 flex gap-x-2 items-center pb-3">
              <BellIcon className="w-7 md:w-9" />
              Live Alarm Stats
            </h2>
            <AlarmsStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};
