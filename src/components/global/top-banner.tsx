import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { FaBatteryFull } from "react-icons/fa6";

interface TopBannerProps {
  page:
    | "home"
    | "login"
    | "login-otp"
    | "reports"
    | "reports-view"
    | "more"
    | "messages"
    | "edit"
    | "create"
    | "profile"
    | "resources"
    | "settings"
    | "contacts"
    ;
}

export default function TopBanner({ page }: TopBannerProps) {
  const getPageTitle = () => {
    switch (page) {
      case "home":
        return "Welcome Alyssa!";
      case "login":
        return "";
      case "login-otp":
        return "";
      case "reports":
        return "Reports";
      case "reports-view":
        return "Report";
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
        case "contacts":
        return "Contacts";
      default:
        return "";
    }
  };

  const hideDivPaths = ["login", "login-otp"];

  return (
    <header>
      <div className="p-4 bg-primary font-normal text-center flex items-center justify-start px-4 space-x-32">
        {!hideDivPaths.includes(page) && (
          <div className="rounded-full w-5 bg-slate-400">P</div>
        )}
        <h1 className="text-white">{getPageTitle()}</h1>
      </div>
    </header>
  );
}
