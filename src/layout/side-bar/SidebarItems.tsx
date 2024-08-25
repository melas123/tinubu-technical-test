import { List } from "@mui/material";
import Menuitems from "./MenuItems";
import NavItem from "./NavItem";

const SidebarItems = () => {
  return (
    <List sx={{ pt: 0 }} className="sidebarNav" component="div">
      {Menuitems.map((item) => {
        return <NavItem item={item} key={item.id} />;
      })}
    </List>
  );
};
export default SidebarItems;
