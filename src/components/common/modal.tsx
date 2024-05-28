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
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none "
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
                    "relative shadow-lg rounded-xl p-9 bg-white w-[90%]",
                    widthClass
                  )}
                >
                  <button onClick={onClose} className="absolute top-7 right-7">
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
