import Logo from "../../../assets/images/logo.png";
import { SunIcon } from "@/assets/icons";
import { AvatarMenu } from "./avatar-menu";
import { Notifications } from "./notifications";
import { SearchBar } from "./searchbar";

export const Header = () => {
  return (
    <header className="bg-cetacean-blue  px-3 md:px-5 lg:px-12 ">
      <div className="flex justify-between  items-center ">
        <div className="LOGO shrink-0">
          <img src={Logo} alt="octatech" />
        </div>

        <div className="flex gap-3 md:gap-7">
          <div className="flex items-center gap-3 md:gap-6 py-5 md:py-7">
            <SearchBar />
            <Notifications />
            <AvatarMenu />
          </div>
          <button className="md:ps-5 md:border-l border-slate-700 ">
            <SunIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
