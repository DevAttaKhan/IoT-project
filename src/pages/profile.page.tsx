import {
  ActiveNotificationIcon,
  ActivePasswordIcon,
  ActiveTrash,
  ActiveUserIcon,
  InActiveNotificationIcon,
  InActivePassword,
  InActiveTrashIcon,
  InActiveUser,
} from "@/assets/icons";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import classNames from "classnames";
import ProfileAvatar from "@/assets/images/profile-upload.png";
import { CameraIcon } from "@heroicons/react/24/outline";

const tabClasses =
  "outline-none data-[selected]:text-[#1921FA] cursor-pointer text-xl flex items-center gap-4";
const inputClasses = `border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[52px] p-2 placeholder:text-xl outline-none
`;

export const ProfilePage = () => {
  return (
    <div className="">
      <TabGroup as="div" className="flex flex-col md:flex-row">
        <TabList as="div" className="basis-[30%] flex flex-col gap-8 mb-8">
          <div className="mb-4">
            <div className="relative">
            <img src={ProfileAvatar} alt=""/>
            {/* <CameraIcon className="absolute rigth-10 bottom-10 w-10"/> */}
            </div>
            <h1 className="text-3xl">Profile Name</h1>
            <span className="text-sm text-slate-400">tony@example.com</span>
          </div>

          <Tab as="div" className={classNames(tabClasses)}>
            {({ selected }) => (
              <>
                {" "}
                {selected ? <ActiveUserIcon /> : <InActiveUser />}{" "}
                <div>Basic Information</div>
              </>
            )}
          </Tab>
          <Tab as="div" className={classNames(tabClasses)}>
            {({ selected }) => (
              <>
                {" "}
                {selected ? <ActivePasswordIcon /> : <InActivePassword />}{" "}
                <div>Password</div>
              </>
            )}
          </Tab>
          <Tab as="div" className={classNames(tabClasses)}>
            {({ selected }) => (
              <>
                {" "}
                {selected ? (
                  <ActiveNotificationIcon />
                ) : (
                  <InActiveNotificationIcon />
                )}{" "}
                <div>Notifications</div>
              </>
            )}
          </Tab>
          <Tab as="div" className={classNames(tabClasses)}>
            {({ selected }) => (
              <>
                {" "}
                {selected ? <ActiveTrash /> : <InActiveTrashIcon />}{" "}
                <div>Delete account</div>
              </>
            )}
          </Tab>
        </TabList>
        <TabPanels
          as="div"
          className="basis-[70%] bg-white px-10 py-12 rounded-md shadow-sm"
        >
          <TabPanel>
            {/* bassic information  */}
            <h1 className="text-2xl mb-8">Basic information</h1>
            <form className="flex flex-col gap-8 ">
              {/* row 1  */}
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="name" className="block basis-[20%] text-xl">
                  Full Name
                </label>
                <div className="mt-2 w-full basis-[80%] flex">
                  <input
                    id="name"
                    name="firstName"
                    type="text"
                    autoComplete="text"
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-tl-[10px] rounded-bl-[10px]"
                    )}
                    placeholder="Tony"
                  />
                  <input
                    id="name"
                    name="firstName"
                    type="text"
                    autoComplete="text"
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-tr-[10px] rounded-br-[10px]"
                    )}
                    placeholder="Nguyen"
                  />
                </div>
              </div>
              {/* row 2  */}
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="email" className="block basis-[20%] text-xl">
                  Email
                </label>
                <div className="mt-2 w-full basis-[80%]">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-[10px]"
                    )}
                    placeholder="tony@example.com"
                  />
                </div>
              </div>
              {/* row 3  */}
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="phone" className="block basis-[20%] text-xl">
                  Phone
                </label>
                <div className="mt-2 w-full basis-[80%]">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    // autoComplete=""
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-[10px]"
                    )}
                    placeholder="(342)3934 3445 33"
                  />
                </div>
              </div>
              {/* row 4  */}
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label
                  htmlFor="organization"
                  className="block basis-[20%] text-xl"
                >
                  Organization
                </label>
                <div className="mt-2 w-full basis-[80%]">
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    // autoComplete=""
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-[10px]"
                    )}
                    placeholder="Client Care"
                  />
                </div>
              </div>
              {/* row 5  */}
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label
                  htmlFor="departement"
                  className="block basis-[20%] text-xl"
                >
                  Department
                </label>
                <div className="mt-2 w-full basis-[80%]">
                  <input
                    id="departement"
                    name="departement"
                    type="text"
                    // autoComplete=""
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-[10px]"
                    )}
                    placeholder="Your Department"
                  />
                </div>
              </div>
              {/* row 6  */}
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="location" className="block basis-[20%] text-xl">
                  Location
                </label>
                <div className="mt-2 w-full basis-[80%]">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-[10px] bg-white"
                    )}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    // autoComplete=""
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-[10px]  mt-4"
                    )}
                    placeholder="State"
                  />
                </div>
              </div>
              {/* row 7  */}
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="address" className="block basis-[20%] text-xl">
                  Address
                </label>
                <div className="mt-2 w-full basis-[80%]">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    // autoComplete=""
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-[10px]"
                    )}
                    placeholder="Your address"
                  />
                </div>
              </div>
              {/* row 5  */}
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="zipcode" className="block basis-[20%] text-xl">
                  Zip code
                </label>
                <div className="mt-2 w-full basis-[80%]">
                  <input
                    id="departement"
                    name="departement"
                    type="text"
                    // autoComplete=""
                    className={classNames(
                      inputClasses,
                      "block w-full rounded-[10px]"
                    )}
                    placeholder="480000"
                  />
                </div>
              </div>
            </form>
          </TabPanel>
          <TabPanel>Password section</TabPanel>
          <TabPanel>Notifications section</TabPanel>
          <TabPanel>Delete account section</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};
