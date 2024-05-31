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
import {
  BasicInformationForm,
  PasswordResetForm,
} from "@/components/features/profile";
import { CameraIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { WarningPrompt } from "@/components/common";

const tabClasses =
  "outline-none data-[selected]:text-[#1921FA] cursor-pointer  flex items-center gap-4";

export const ProfilePage = () => {
  const [showWarning, setShowWarning] = useState(false);

  return (
    <>
      <div className="pt-4">
        <TabGroup as="div" className="flex flex-col md:flex-row">
          <TabList as="div" className="basis-[30%] ">
            <div className=" mb-10 md:mb-14 lg:mb-16">
              <div className="mb-5 relative w-max profile-avatar bg-[#F6EFFF] shadow-lg">
                <img src={ProfileAvatar} alt="" />
                <button className="absolute bottom-0 right-3 w-[42px] h-[42px] bg-white hover:bg-gray-100 rounded-2xl grid place-content-center">
                  <CameraIcon className="w-4" />
                </button>
              </div>
              <h1 className="text-2xl leading-none mb-2">Tony Nguyen</h1>
              <span className="text-base text-slate-400">tony@example.com</span>
            </div>
            <div className="flex flex-col gap-8 mb-8">
              <Tab as="div" className={classNames(tabClasses)}>
                {({ selected }) => (
                  <>
                    {selected ? <ActiveUserIcon /> : <InActiveUser />}
                    <div>Basic Information</div>
                  </>
                )}
              </Tab>
              <Tab as="div" className={classNames(tabClasses)}>
                {({ selected }) => (
                  <>
                    {selected ? <ActivePasswordIcon /> : <InActivePassword />}
                    <div>Password</div>
                  </>
                )}
              </Tab>
              <Tab as="div" className={classNames(tabClasses)}>
                {({ selected }) => (
                  <>
                    {selected ? (
                      <ActiveNotificationIcon />
                    ) : (
                      <InActiveNotificationIcon />
                    )}
                    <div>Notifications</div>
                  </>
                )}
              </Tab>
              <Tab as="div" className={classNames(tabClasses)}>
                {({ selected }) => (
                  <>
                    {selected ? <ActiveTrash /> : <InActiveTrashIcon />}
                    <div>Delete account</div>
                  </>
                )}
              </Tab>
            </div>
          </TabList>
          <TabPanels
            as="div"
            className="basis-[70%] bg-white px-5  md:px-8 lg:px-10 py-12 rounded-2xl shadow-sm"
          >
            <TabPanel>
              <BasicInformationForm />
            </TabPanel>
            <TabPanel>
              <PasswordResetForm />
            </TabPanel>
            <TabPanel>Notifications section</TabPanel>
            <TabPanel>
              <p>
                Once your account is deleted, all your data including files,
                messages, and personal information will be permanently removed
                and cannot be recovered.
              </p>
              <button
                onClick={() => setShowWarning(true)}
                className=" mt-4 px-5 py-1 lg:px-8 lg:py-2 rounded bg-red-600 text-white max-w-max ml-auto cursor-pointer hover:bg-opacity-70 "
              >
                Delete Accout
              </button>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      <WarningPrompt
        isOpen={showWarning}
        setIsOpen={setShowWarning}
        title="Acount deletion confirmation"
        description="Are you sure about deleting this Account"
      />
    </>
  );
};
