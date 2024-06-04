import { Modal } from "@/components/common";
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
            placeholder="Region"
            className="w-full mb-5 border px-6 py-3 rounded outline-bluebonnet "
          />
          <input
            type="text"
            placeholder="Coordinates"
            className="w-full mb-5 border px-6 py-3 rounded outline-bluebonnet "
          />
          <input
            type="text"
            placeholder="Gateway Model"
            className="w-full mb-5 border px-6 py-3 rounded outline-bluebonnet "
          />
          <input
            type="text"
            placeholder="Firmware"
            className="w-full mb-5 border px-6 py-3 rounded outline-bluebonnet "
          />
          <input
            type="text"
            placeholder="Variant"
            className="w-full mb-5 border px-6 py-3 rounded outline-bluebonnet "
          />

          <input
            type="submit"
            value="Save Changes"
            className=" block mx-auto  px-5 py-2  rounded bg-bluebonnet text-white max-w-max ml-auto cursor-pointer hover:bg-blue-950 "
          />

          {/* <SelectDropdown
            label="Assign Manger"
            options={[{ id: 1, value: "jhon doe" }]}
            containerClass="w-full "
            buttonClass="justify-between px-6"
            itemsContainerClass="w-full"
          /> */}
        </form>
      </div>
    </Modal>
  );
};
