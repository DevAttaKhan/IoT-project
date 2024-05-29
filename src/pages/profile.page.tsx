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
import { SelectDropdown } from "@/components/common";
// import { CameraIcon } from "@heroicons/react/24/outline";

const tabClasses =
  "outline-none data-[selected]:text-[#1921FA] cursor-pointer  flex items-center gap-4";

export const ProfilePage = () => {
  return (
    <div className="">
      <TabGroup as="div" className="flex flex-col md:flex-row">
        <TabList as="div" className="basis-[30%] flex flex-col gap-8 mb-8">
          <div className="mb-4">
            <div className="relative">
              <img src={ProfileAvatar} alt="" />
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
          className="basis-[70%] bg-white px-10 py-12 rounded-2xl-md shadow-sm"
        >
          <TabPanel>
            <h1 className="text-2xl mb-8">Basic information</h1>
            <form className="flex flex-col gap-8 ">
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="name" className="block basis-[20%] mb-2 ">
                  Full Name
                </label>
                <div className=" w-full basis-[80%] flex">
                  <input
                    id="name"
                    name="firstName"
                    type="text"
                    autoComplete="text"
                    className="w-full  border px-6 py-3 rounded-s-2xl outline-bluebonnet "
                    placeholder="Tony"
                  />
                  <input
                    id="name"
                    name="firstName"
                    type="text"
                    autoComplete="text"
                    className="w-full  border px-6 py-3 rounded-e-2xl outline-bluebonnet "
                    placeholder="Nguyen"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="email" className="block basis-[20%] mb-2 ">
                  Email
                </label>
                <div className=" w-full basis-[80%]">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full  border px-6 py-3 rounded-2xl outline-bluebonnet "
                    placeholder="tony@example.com"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="phone" className="block basis-[20%] mb-2 ">
                  Phone
                </label>
                <div className=" w-full basis-[80%]">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="w-full  border px-6 py-3 rounded-2xl outline-bluebonnet "
                    placeholder="(342)3934 3445 33"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label
                  htmlFor="organization"
                  className="block basis-[20%] mb-2 "
                >
                  Organization
                </label>
                <div className=" w-full basis-[80%]">
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className="w-full  border px-6 py-3 rounded-2xl outline-bluebonnet "
                    placeholder="Client Care"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label
                  htmlFor="departement"
                  className="block basis-[20%] mb-2 "
                >
                  Department
                </label>
                <div className=" w-full basis-[80%]">
                  <input
                    id="departement"
                    name="departement"
                    type="text"
                    className="w-full  border px-6 py-3 rounded-2xl outline-bluebonnet "
                    placeholder="Your Department"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-start md:items-start mb-2">
                <label
                  htmlFor="location"
                  className="block basis-[20%]  mb-2  md:pt-3"
                >
                  Location
                </label>
                <div className="  w-full basis-[80%]">
                  <SelectDropdown
                    label="Select Country"
                    options={[
                      { id: 1, value: "United States" },
                      { id: 2, value: "Canada" },
                      { id: 3, value: "Egnland" },
                    ]}
                    containerClass="w-full mb-5 "
                    buttonClass="rounded-2xl  justify-between px-6  select_country "
                    itemsContainerClass="w-full "
                  />
                  <input
                    id="state"
                    name="state"
                    type="text"
                    className="w-full mb-5 border px-6 py-3 rounded-2xl outline-bluebonnet "
                    placeholder="City"
                  />
                  <input
                    id="state"
                    name="state"
                    type="text"
                    className="w-full  border px-6 py-3 rounded-2xl outline-bluebonnet "
                    placeholder="State"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="address" className="block basis-[20%] mb-2">
                  Address
                </label>
                <div className=" w-full basis-[80%]">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    // autoComplete=""
                    className="w-full  border px-6 py-3 rounded-2xl outline-bluebonnet "
                    placeholder="Your address"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-start md:items-center">
                <label htmlFor="zipcode" className="block basis-[20%] mb-2">
                  Zip code
                </label>
                <div className=" w-full basis-[80%]">
                  <input
                    id="departement"
                    name="departement"
                    type="text"
                    // autoComplete=""
                    className="w-full  border px-6 py-3 rounded-2xl outline-bluebonnet "
                    placeholder="480000"
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Save Changes"
                className=" px-8 py-3 rounded bg-bluebonnet text-white max-w-max ml-auto cursor-pointer hover:bg-opacity-70 "
              />
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
