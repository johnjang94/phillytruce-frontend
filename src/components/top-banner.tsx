import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { FaBatteryFull } from "react-icons/fa6";
import MenuDrawer from "./menu-drawer";

// Define the prop types
interface TopBannerProps {
  page:
    | "home"
    | "reports"
    | "messages"
    | "edit"
    | "create"
    | "profile"
    | "resources"
    | "settings";
}

export default function TopBanner({ page }: TopBannerProps) {
  const getPageTitle = () => {
    switch (page) {
      case "reports":
        return "Reports";
      case "messages":
        return "Messages";
      case "edit":
        return "Edit Report";
      case "create":
        return "Create New Report";
      case "profile":
        return "Profile";
      case "resources":
        return "Resources";
      case "settings":
        return "Settings";
      default:
        return "Welcome Alyssa!";
    }
  };

  const showMenuDrawer = true

  return (
    <header>
      <div className="bg-primary justify-between flex rounded-t-2xl p-3 px-10 text-white items-center">
        <p>Time</p>
        <div className="space-x-5 flex">
          <MdOutlineSignalCellularAlt />
          <FaWifi />
          <FaBatteryFull />
        </div>
      </div>
      { showMenuDrawer ? <MenuDrawer /> :
      <div className="p-4 bg-primary font-normal text-center flex items-center justify-start px-4 space-x-32">
        <div className="rounded-full w-5 bg-slate-400">P</div>
        <h1 className="text-white">{getPageTitle()}</h1>
      </div>
}
    </header>
  );
}
