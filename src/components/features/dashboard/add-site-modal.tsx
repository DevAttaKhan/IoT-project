import { Modal } from "@/components/common";
type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const AddSiteModal = ({ isOpen, setIsOpen }: Props) => {
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
            placeholder="Site ID"
            className="w-full mb-5 border py-2 px-3 lg:px-6 lg:py-3 rounded outline-bluebonnet "
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full mb-5 border py-2 px-3 lg:px-6 lg:py-3 rounded outline-bluebonnet "
          />
          <input
            type="text"
            placeholder="Region"
            className="w-full mb-5 border py-2 px-3 lg:px-6 lg:py-3 rounded outline-bluebonnet "
          />
          <div className=" w-full mb-5 flex flex-col md:flex-row gap-3 md:gap-0 ">
            <input
              id="name"
              name="firstName"
              type="text"
              className="w-full border rounded-s  outline-bluebonnet py-2 px-3 lg:px-6 lg:py-3 "
              placeholder="Lat"
            />
            <input
              id="name"
              name="firstName"
              type="text"
              className="w-full border rounded-e outline-bluebonnet py-2 px-3 lg:px-6 lg:py-3 "
              placeholder="Lang"
            />
          </div>

          <input
            type="submit"
            value="Save Changes"
            className=" block mx-auto mt-7  px-5 py-2  rounded bg-bluebonnet text-white max-w-max ml-auto cursor-pointer hover:bg-blue-950 "
          />
        </form>
      </div>
    </Modal>
  );
};
