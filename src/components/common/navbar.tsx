import { BoxIcon, FileIcon, GridIcon, ProfileIcon } from "@/assets/icons";

export const Navbar = () => {
  return (
    <>
      <div className="bg-[#000239] justify-between relative md:w-[500px] w-[320px] h-[70px] flex items-center rounded-[23px] mx-auto mt-[60px]">
        <ul className="flex justify-between w-full">
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <button type="button">
              <GridIcon />
            </button>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <button type="button">
              <BoxIcon />
            </button>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <div
              className="top-[-57%] absolute w-[80px] h-[80px] bg-blue-800  rounded-full border-[8px] border-[#f3f4f6] transition duration-[500ms]
            before:content-[''] before:absolute before:bg-transparent before:top-1/2 before:left-[-24px] before:w-[20px] before:h-[20px] before:rounded-tr-[20px] before:shadow-[1px_-10px_0_0_#f3f4f6] after:content-[''] after:absolute after:bg-transparent after:top-1/2 after:right-[-24px] after:w-[20px] after:h-[20px] after:rounded-tl-[20px] after:shadow-[0_-10px_0_0_#f3f4f6]
            "
            >
              <button
                type="button"
                className="flex items-center justify-center w-full h-full"
              >
                <GridIcon />
              </button>
            </div>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <button type="button">
              <ProfileIcon />
            </button>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <button type="button">
              <FileIcon />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
