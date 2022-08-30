import SidebarOption from "./SidebarOption";
import { sidebar } from "../assets/data";

const Sidebar = () => {
  return (
    <div className="w-56">
      {sidebar?.map((sidebarItem) => (
        <SidebarOption active={sidebarItem.optionItems} key={sidebarItem.id} sidebarItem={sidebarItem} />
      ))}
    </div>
  );
};

export default Sidebar;
