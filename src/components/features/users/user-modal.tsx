import { Modal } from "@/components/common";
import classNames from "classnames";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  modalType?: string;
  setModalType:  React.Dispatch<React.SetStateAction<string>>;
};

const inputClasses = `pl-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#121F3E] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[52px] p-2 placeholder:text-xl outline-none
placeholder:text-lg`;


export const UserModal = ({ isOpen, setIsOpen, modalType,setModalType }: Props) => {

  
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        setModalType("add");
      }}
      widthClass="max-w-[600px]"
    >
      <>
        <h1 className="text-2xl mb-4">{modalType} User</h1>
        <form className="px-2 py-2">
          <div className="flex flex-col gap-8 ">
            <div>
              <input
                type="text"
                name=""
                placeholder="Username"
                className={classNames(
                  inputClasses,
                  "outline-none rounded-md w-full"
                )}
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                placeholder="Location"
                className={classNames(
                  inputClasses,
                  "outline-none rounded-md w-full"
                )}
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                placeholder="Phone#"
                className={classNames(
                  inputClasses,
                  "outline-none rounded-md w-full"
                )}
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                placeholder="Email"
                className={classNames(
                  inputClasses,
                  "outline-none rounded-md w-full"
                )}
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                placeholder="Site Location"
                className={classNames(
                  inputClasses,
                  "outline-none rounded-md w-full"
                )}
              />
            </div>
          </div>
          <div className="flex gap-2 pt-8">
            <button className="primary-button w-[6rem]">{modalType}</button>
            <button className="secondary-button w-[6rem]">cancel</button>
          </div>
        </form>
      </>
    </Modal>
  );
};
