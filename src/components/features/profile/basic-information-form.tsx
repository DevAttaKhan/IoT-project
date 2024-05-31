import { SelectDropdown } from "@/components/common";
import classNames from "classnames";

const inputPadding = " py-2 px-3 lg:px-6 lg:py-3 ";
const inputRadius = "rounded-lg md:rounded-xl lg:rounded-2xl";

const inputClass = classNames(
  "w-full border outline-bluebonnet text-sm md:text-base",
  inputPadding,
  inputRadius
);

const labelClass = "block basis-[20%] mb-2 text-sm";

export const BasicInformationForm = () => {
  return (
    <>
      <h1 className="text-2xl mb-8">Basic information</h1>
      <form className="flex flex-col gap-5 md:gap-8 ">
        <div className="flex md:flex-row flex-col items-start md:items-center">
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <div className=" w-full basis-[80%] flex flex-col md:flex-row gap-3 md:gap-0 ">
            <input
              id="name"
              name="firstName"
              type="text"
              autoComplete="text"
              className={classNames(
                "w-full border rounded-s-lg rounded-e-lg md:rounded-e-none  md:rounded-s-2xl lg:rounded-s-2xl outline-bluebonnet ",
                inputPadding
              )}
              placeholder="Tony"
            />
            <input
              id="name"
              name="firstName"
              type="text"
              autoComplete="text"
              className={classNames(
                "w-full  border rounded-s-lg rounded-e-lg md:rounded-s-none md:rounded-e-xl lg:rounded-e-2xl outline-bluebonnet ",
                inputPadding
              )}
              placeholder="Nguyen"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-center">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <div className=" w-full basis-[80%]">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              placeholder="tony@example.com"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-center">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <div className=" w-full basis-[80%]">
            <input
              id="phone"
              name="phone"
              type="text"
              className={inputClass}
              placeholder="(342)3934 3445 33"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-center">
          <label htmlFor="organization" className={labelClass}>
            Organization
          </label>
          <div className=" w-full basis-[80%]">
            <input
              id="organization"
              name="organization"
              type="text"
              className={inputClass}
              placeholder="Client Care"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-center">
          <label htmlFor="departement" className={labelClass}>
            Department
          </label>
          <div className=" w-full basis-[80%]">
            <input
              id="departement"
              name="departement"
              type="text"
              className={inputClass}
              placeholder="Your Department"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-start mb-2">
          <label htmlFor="location" className={labelClass}>
            Location
          </label>
          <div className="  w-full basis-[80%]">
            <SelectDropdown
              label="Select Country"
              options={[
                { id: 1, value: "United States" },
                { id: 2, value: "Canada" },
                { id: 3, value: "Egnland" },
              ]}
              containerClass="w-full mb-5 "
              buttonClass="justify-between px-6"
              itemsContainerClass="w-full "
            />
            <input
              id="state"
              name="state"
              type="text"
              className={classNames("mb-3", inputClass)}
              placeholder="City"
            />
            <input
              id="state"
              name="state"
              type="text"
              className={inputClass}
              placeholder="State"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-center">
          <label htmlFor="address" className={labelClass}>
            Address
          </label>
          <div className=" w-full basis-[80%]">
            <input
              id="address"
              name="address"
              type="text"
              // autoComplete=""
              className={inputClass}
              placeholder="Your address"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-center">
          <label htmlFor="zipcode" className={labelClass}>
            Zip code
          </label>
          <div className=" w-full basis-[80%]">
            <input
              id="departement"
              name="departement"
              type="text"
              className={inputClass}
              placeholder="480000"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Save Changes"
          className="  px-5 py-1 lg:px-8 lg:py-3 rounded bg-bluebonnet text-white max-w-max ml-auto cursor-pointer hover:bg-opacity-70 "
        />
      </form>
    </>
  );
};
