import {
  BoxIcon,
  FileIcon,
  GearsIcon,
  GridIcon,
  ProfileIcon,
} from "@/assets/icons";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const IconMap = {
  dashboard: <GridIcon />,
  hardwares: <BoxIcon />,
  users: <ProfileIcon />,
  alarms: <FileIcon />,
};

export const Navbar = () => {
  return (
    <>
      <CurvedNavbar />
      <SimpleNavbar />
    </>
  );
};

const CurvedNavbar = () => {
  const location = useLocation();
  const activeRouteRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    activeRouteRef.current && activeRouteRef.current.classList.add("animate");
    setTimeout(() => {
      activeRouteRef.current &&
        activeRouteRef.current.classList.remove("animate");
    }, 650);
  }, [location]);

  return (
    <div className=" hidden sm:block fixed z-50 left-0 right-0 bottom-9">
      <div className=" bg-[#000239] justify-between relative md:w-[500px] w-[320px] h-[70px] flex items-center rounded-[23px] mx-auto ">
        <ul className="flex justify-between w-full">
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <Link to="/dashboard">
              <GridIcon />
            </Link>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <Link to="/hardwares">
              <BoxIcon />
            </Link>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <div
              className="top-[-57%] absolute w-[80px] h-[80px]  bg-blue-800  rounded-full border-[8px] border-[#f3f4f6] transition duration-[500ms]
          before:content-[''] before:absolute before:bg-transparent before:top-1/2 before:left-[-24px] before:w-[20px] before:h-[20px] before:rounded-tr-[20px] before:shadow-[1px_-10px_0_0_#f3f4f6] after:content-[''] after:absolute after:bg-transparent after:top-1/2 after:right-[-24px] after:w-[20px] after:h-[20px] after:rounded-tl-[20px] after:shadow-[0_-10px_0_0_#f3f4f6]
          "
            >
              <button
                type="button"
                className="flex items-center justify-center w-full h-full bg-blue-800 rounded-full  "
              >
                <span ref={activeRouteRef}>
                  {IconMap[
                    location.pathname.replace("/", "") as keyof typeof IconMap
                  ] || <GearsIcon />}
                </span>
              </button>
            </div>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <Link to="users">
              <ProfileIcon />
            </Link>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-[1] flex items-center justify-center">
            <Link to="alarms">
              <FileIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const SimpleNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 sm:hidden block bg-cetacean-blue py-2">
      <ul className="max-w-96 mx-auto flex justify-around  ">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              classNames("block p-2 rounded", { "bg-blue-900 ": isActive })
            }
          >
            <GridIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hardwares"
            className={({ isActive }) =>
              classNames("block p-2 rounded", { "bg-blue-900 ": isActive })
            }
          >
            <BoxIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="users"
            className={({ isActive }) =>
              classNames("block p-2 rounded", { "bg-blue-900 ": isActive })
            }
          >
            <ProfileIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="alarms"
            className={({ isActive }) =>
              classNames("block p-2 rounded", { "bg-blue-900 ": isActive })
            }
          >
            <FileIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
