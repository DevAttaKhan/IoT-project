// MainLayout.jsx
import React from "react";
import Navbar from "./Navbar";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// IMAGES

import Globe from "../images/Globe.svg";
import Pin from "../images/Pin.svg";
import Bell from "../images/Bell.svg";
import Map from "../images/map.svg";
import {
  ConfusedIcon,
  DizzyIcon,
  ExplodingIcon,
  LocationIcon,
  SickIcon,
  GlobIcon,
  PinIcon,
  BellIcon,
  MapSvg,
  SearchIcon,
} from "@/assets/icons";
import { Modal } from "@/components/common";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const DashboardPage = () => {
  return (
    <div className="p-6 max-w-[1360px] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:mb-10 mb-7">
        <h2 className=" text-3xl text-gray-700 font-bold flex gap-x-2 items-center">
          <GlobIcon />
          Site Collection
        </h2>

        <div className="flex gap-x-2">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex items-center w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md font-normal text-slate-400 shadow-sm hover:bg-gray-50">
                Region
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
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
                  </Menu.Item>
                  <Menu.Item>
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
                  </Menu.Item>
                  <Menu.Item>
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
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
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
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
                City
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
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
                  </Menu.Item>
                  <Menu.Item>
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
                  </Menu.Item>
                  <Menu.Item>
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
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
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
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
                Site
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
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
                  </Menu.Item>
                  <Menu.Item>
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
                  </Menu.Item>
                  <Menu.Item>
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
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
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
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 gap-7 mb-7 md:mb-12">
        <div className="bg-red-500 p-4 pb-5 px-8 text-white rounded-lg">
          <div className=" grid place-content-center bg-white p-[6px] size-9 rounded-md mb-4">
            <ExplodingIcon />
          </div>

          <h2 className="text-[22px] font-semibold mb-3">Critical</h2>
          <h3 className="text-[17px]">Status</h3>
          <p className="text-[13px]">Current Status of site</p>
        </div>
        <div className="bg-green-500 p-4 pb-5 px-8 text-white rounded-lg">
          <div className=" grid place-content-center bg-white p-[6px] size-9 rounded-md mb-4">
            <DizzyIcon />
          </div>
          <h2 className="text-[22px] font-semibold mb-3">Undetermined</h2>
          <h3 className="text-[17px]">Source</h3>
          <p className="text-[13px]">Current Power Source</p>
        </div>
        <div className="bg-orange-400 p-4 pb-5 px-8 text-white rounded-lg">
          <div className=" grid place-content-center bg-white p-[6px] size-9 rounded-md mb-4">
            <ConfusedIcon />
          </div>
          <h2 className="text-[22px] font-semibold mb-3">Infinitehr</h2>
          <h3 className="text-[17px]">Estimated Backup</h3>
          <p className="text-[13px]">Current Battery Backup Available</p>
        </div>
        <div className="bg-indigo-950 p-4 pb-5 px-8 text-white rounded-lg">
          <div className=" grid place-content-center bg-white p-[6px] size-9 rounded-md mb-4">
            <SickIcon />
          </div>
          <h2 className="text-[22px] font-semibold mb-3">Site Load</h2>
          <h3 className="text-[17px]">0kW</h3>
          <p className="text-[13px]">Current Site Load</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col  gap-4">
        <div className=" lg:w-2/3 w-full bg-white rounded-2xl md:p-8 p-5 ">
          <div className="flex md:flex-row md:gap-0 gap-4  flex-col w-full mb-16 justify-between">
            <h2 className="font-bold text-2xl text-gray-700 flex gap-x-2 items-center">
              <LocationIcon />
              Site Locations
            </h2>

            <div className="flex flex-wrap md:flex-nowrap gap-3 items-center gap-x-2">
              <SearchIcon />

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
                    Filter
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
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
                      </Menu.Item>
                      <Menu.Item>
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
                      </Menu.Item>
                      <Menu.Item>
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
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
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
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
                    Filter
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
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
                      </Menu.Item>
                      <Menu.Item>
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
                      </Menu.Item>
                      <Menu.Item>
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
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
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
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
                    Filter
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
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
                      </Menu.Item>
                      <Menu.Item>
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
                      </Menu.Item>
                      <Menu.Item>
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
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
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
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="mb-28">
            <MapSvg />
          </div>
          <div className="md:overflow-x-visible overflow-x-auto">
            <table
              id="customers"
              className="md:mx-6 mx-0 md:w-full w-max table-fixed"
            >
              <tr className="border-b">
                <th className="md:pr-0 pr-4 text-gray-400 tracking-wide font-medium text-md  uppercase text-left pb-2">
                  Site #
                </th>
                <th className="md:pr-0 pr-4 text-gray-400 tracking-wide font-medium text-md uppercase text-left pb-2">
                  Location
                </th>
                <th className="md:pr-0 pr-4 text-gray-400 tracking-wide font-medium text-md uppercase text-left pb-2">
                  Vibration Sensor
                </th>
                <th className="md:pr-0 pr-4 text-gray-400 tracking-wide font-medium text-md uppercase text-left pb-2">
                  Smart Lock
                </th>
              </tr>
              <tr className="border-b">
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">HAU1724</td>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">
                  216 Maxine Garden
                </td>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">
                  <span className="w-[12px] h-[12px] inline-block me-2 bg-green-500 rounded-full"></span>
                  <span>ON</span>
                </td>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">
                  <span className="w-[12px] h-[12px] inline-block me-2 bg-red-600 rounded-full"></span>
                  <span>CLOSE</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">HAU1724</td>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">
                  216 Maxine Garden
                </td>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">
                  <span className="w-[12px] h-[12px] inline-block me-2 bg-green-500 rounded-full"></span>
                  <span>ON</span>
                </td>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">
                  <span className="w-[12px] h-[12px] inline-block me-2 bg-red-600 rounded-full"></span>
                  <span>CLOSE</span>
                </td>
              </tr>
              <tr>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">HAU1724</td>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">
                  216 Maxine Garden
                </td>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">
                  <span className="w-[12px] h-[12px] inline-block me-2 bg-green-500 rounded-full"></span>
                  <span>ON</span>
                </td>
                <td className="md:pr-0 pr-4 pt-6 pb-10 font-medium">
                  <span className="w-[12px] h-[12px] inline-block me-2 bg-red-600 rounded-full"></span>
                  <span>CLOSE</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
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
                  <Menu.Button className="inline-flex w-full border justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-md items-center font-normal text-slate-400 shadow-sm hover:bg-gray-50">
                    Filter
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
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
                      </Menu.Item>
                      <Menu.Item>
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
                      </Menu.Item>
                      <Menu.Item>
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
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
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
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
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
            <button
              type="button"
              className="w-full text-center uppercase text-blue-600 font-semibold pt-3 pb-2"
            >
              view detail
            </button>
          </div>
          <div className="bg-white rounded-2xl px-6 py-4">
            <h2 className="font-bold text-2xl text-gray-700 flex gap-x-2 items-center pb-3">
              <BellIcon />
              Live Alarm Stats
            </h2>
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="278.51"
              height="349.381"
              viewBox="0 0 278.51 289.381"
            >
              <g
                id="ringProgress"
                transform="translate(-2.855 35.768) rotate(-8)"
              >
                <path
                  id="Path_1941"
                  data-name="Path 1941"
                  d="M144.922,277.614A117.919,117.919,0,1,0,48,63.892L71.649,104.7A70.751,70.751,0,1,1,129.8,232.936Z"
                  transform="translate(10.831 -27.728)"
                  fill="#c9c9c9"
                />
                <path
                  id="Path_1942"
                  data-name="Path 1942"
                  d="M150.355,222.766A139.055,139.055,0,0,0,38.032,29.777L29,110.411a57.917,57.917,0,0,1,46.783,80.38Z"
                  transform="translate(95.4 -29.777)"
                  fill="#ed4b3e"
                />
                <path
                  id="Path_1944"
                  data-name="Path 1944"
                  d="M251.255,48.745a117.919,117.919,0,0,0-27.578,234.216,121.828,121.828,0,0,0,52.928-5.317l-15.085-44.69a74.694,74.694,0,0,1-32.106,3.19A70.751,70.751,0,0,1,245.96,95.615Z"
                  transform="translate(-120.066 -27.728)"
                  fill="#3cd860"
                />
                <text
                  id="_28_"
                  data-name="28%"
                  transform="translate(212.686 100.666) rotate(8)"
                  fill="#fff"
                  font-size="13"
                  font-family="Poppins-SemiBold, Poppins"
                  font-weight="600"
                >
                  <tspan x="-26.598" y="0">
                    28%
                  </tspan>
                </text>
              </g>
            </svg>
            <ul className="flex flex-wrap gap-y-4 mt-6 mb-4 ml-8">
              <li className="text-md font-medium w-1/2 items-center flex">
                <span className="block w-4 h-4 bg-red-500 mr-5"></span>
                <span>Critical</span>
              </li>
              <li className="text-md font-medium w-1/2 items-center flex">
                <span className="block w-4 h-4 bg-green-500 mr-5"></span>
                <span>Activated</span>
              </li>
              <li className="text-md font-medium w-1/2 items-center flex">
                <span className="block w-4 h-4 bg-gray-300 mr-5"></span>
                <span>Deactivated</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
