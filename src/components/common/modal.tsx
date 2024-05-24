import { Dialog, Transition } from "@headlessui/react";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: React.ReactElement;
};

export const Modal = ({ children, isOpen }: Props) => {
  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          {children}
        </Dialog>
      </Transition>
    </>
  );
};
