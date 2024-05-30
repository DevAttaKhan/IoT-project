import { Modal } from "./modal";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const WarningPrompt = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      widthClass="w-[495px]"
    >
      <div className="text-center pt-16 mb-16">
        <h3 className="text-3xl font-medium mb-6">
          User Deletion Confirmation
        </h3>
        <p className="mb-6 text-xl w px-12">
          Are you certain about deleting this user
        </p>

        <div className="flex gap-2 items-center justify-center">
          <button className="w-[88px] py-3 rounded bg-bluebonnet text-white text-sm">
            Yes
          </button>
          <button
            className="w-[88px] py-3 rounded bg-[#6E6E6E] text-white text-sm"
            onClick={() => setIsOpen(false)}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default WarningPrompt;
