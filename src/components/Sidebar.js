import React from "react";
import "../styles/Sidebar.css";
import logo from "../Assets/Images/spotify2019-830x350.jpg";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "../DataLayer";
// import HomeIcon from "@mui/icons-material/Home";
import { Search, Home, LibraryMusic } from "@mui/icons-material";
function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="logo" />
      <SidebarOption title="Home" Icon={Home} />
      <SidebarOption title="Search" Icon={Search} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
