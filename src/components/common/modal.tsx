import { CloseIcon } from "@/assets/icons";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import classNames from "classnames";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
  widthClass?: string;
};

export const Modal = ({ children, isOpen, widthClass, onClose }: Props) => {
  return (
    <>
      <Transition
        enter="ease-out duration-300"
        enterFrom="opacity-0 transform-[scale(95%)]"
        enterTo="opacity-100 transform-[scale(100%)]"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 transform-[scale(100%)]"
        leaveTo="opacity-0 transform-[scale(95%)]"
        show={isOpen}
      >
        <Dialog
          as="div"
          className="relative z-50 focus:outline-none "
          onClose={onClose}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 bg-black bg-opacity-25 ">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel
                  className={classNames(
                    "relative shadow-lg rounded-xl p-4 md:p-6 lg:p-9 bg-white w-[90%]",
                    widthClass
                  )}
                >
                  <button
                    onClick={onClose}
                    className="absolute top-2 right-2 md:top-5 md:right-5 lg:top-7 lg:right-7"
                  >
                    <CloseIcon />
                  </button>
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
