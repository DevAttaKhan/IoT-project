import { Modal } from "@/components/common";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  modalType?: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
};

export const UserModal = ({
  isOpen,
  setIsOpen,
  modalType,
  setModalType,
}: Props) => {
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
          <div className="flex flex-col   ">
            <input
              type="text"
              name=""
              placeholder="Username"
              className="w-full mb-5 border py-2 px-3 lg:px-6 lg:py-3 rounded outline-bluebonnet "
            />
            <input
              type="text"
              name=""
              placeholder="Location"
              className="w-full mb-5 border py-2 px-3 lg:px-6 lg:py-3 rounded outline-bluebonnet "
            />
            <input
              type="text"
              name=""
              placeholder="Phone#"
              className="w-full mb-5 border py-2 px-3 lg:px-6 lg:py-3 rounded outline-bluebonnet "
            />
            <input
              type="text"
              name=""
              placeholder="Email"
              className="w-full mb-5 border py-2 px-3 lg:px-6 lg:py-3 rounded outline-bluebonnet "
            />
            <input
              type="text"
              name=""
              placeholder="Site Location"
              className="w-full mb-5 border py-2 px-3 lg:px-6 lg:py-3 rounded outline-bluebonnet "
            />
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
