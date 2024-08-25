import { AppBar } from "@mui/material";
import SidebarItems from "./SidebarItems";

function Sidebar() {
  return (
    <AppBar
      sx={{
        width: { md: "20%", xs: "100%" },
        left: `0px`,
        top: "unset",
        height: "100%",
        backgroundColor: "#333333",
        position: { md: "fixed", xs: "relative" },
      }}
    >
      <SidebarItems />
    </AppBar>
  );
}

export default Sidebar;
