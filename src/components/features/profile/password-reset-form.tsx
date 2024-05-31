import classNames from "classnames";

const inputPadding = " py-2 px-3 lg:px-6 lg:py-3 ";
const inputRadius = "rounded-lg md:rounded-xl lg:rounded-2xl";

const inputClass = classNames(
  "w-full border outline-bluebonnet text-sm md:text-base",
  inputPadding,
  inputRadius
);

const labelClass = "block basis-[20%] mb-2 text-sm";

export const PasswordResetForm = () => {
  return (
    <form>
      <div className="max-w-96 mb-3">
        <label htmlFor="phone" className={labelClass}>
          Old Password
        </label>
        <div className=" w-full basis-[80%]">
          <input
            id="phone"
            name="phone"
            type="text"
            className={inputClass}
            placeholder="Old Password"
          />
        </div>
      </div>
      <div className="max-w-96 ">
        <label htmlFor="phone" className={labelClass}>
          New Password
        </label>
        <div className=" w-full basis-[80%]">
          <input
            id="phone"
            name="phone"
            type="text"
            className={inputClass}
            placeholder="New Password"
          />
        </div>
      </div>
      <input
        type="submit"
        value="Upate"
        className=" mt-4 px-5 py-1 lg:px-8 lg:py-2 rounded bg-bluebonnet text-white max-w-max ml-auto cursor-pointer hover:bg-opacity-70 "
      />
    </form>
  );
};
