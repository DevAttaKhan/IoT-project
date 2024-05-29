import { Modal, SelectDropdown } from "@/components/common";
type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const AddHardwareModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      widthClass="max-w-[495px]"
    >
      <div>
        <h4 className="mb-6">Add hardware</h4>
        <form>
          <input
            type="text"
            placeholder="Chip ID"
            className="w-full mb-5 border px-6 py-3 rounded outline-bluebonnet "
          />
          <input
            type="text"
            placeholder="Site ID"
            className="w-full mb-5 border px-6 py-3 rounded outline-bluebonnet "
          />
          <input
            type="text"
            placeholder="Site #"
            className="w-full mb-5 border px-6 py-3 rounded outline-bluebonnet "
          />

          <SelectDropdown
            label="Assign Manger"
            options={[{ id: 1, value: "jhon doe" }]}
            containerClass="w-full "
            buttonClass="justify-between px-6"
            itemsContainerClass="w-full"
          />
        </form>
      </div>
    </Modal>
  );
};
