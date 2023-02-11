import classes from "./index.module.css";
import SidebarRow from "../../components/SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
function Sidebar() {
  return (
    <>
      <div className={classes.sidebar}>
        <SidebarRow
          src={"https://avatars.githubusercontent.com/u/119784740?v=4"}
          title={"Amir Moradi"}
        />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title={"Covid-19 Information Center"}
        />
        <SidebarRow Icon={EmojiFlagsIcon} title={"Pages"} />
        <SidebarRow Icon={PeopleIcon} title={"Friends"} />
        <SidebarRow Icon={ChatIcon} title={"Messenger"} />
        <SidebarRow Icon={StorefrontIcon} title={"Marketplace"} />
        <SidebarRow Icon={VideoLibraryIcon} title={"Videos"} />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title={"More..."} />
      </div>
    </>
  );
}

export default Sidebar;
