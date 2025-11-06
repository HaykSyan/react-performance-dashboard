import { NavLink } from "react-router-dom";
import { Card } from "../ui/Card";
import { DashboardIcon, GrowIcon } from "../ui/icons/Icons";

export default function Sidebar() {
  return (
    <aside>
      <Card className="py-4 px-2.5 space-y-4 flex flex-col gap-1 rounded-full!">
        <NavLink to="/dashboard">
          <DashboardIcon />
        </NavLink>
        <NavLink to="/performance">
          <GrowIcon />
        </NavLink>
      </Card>
    </aside>
  );
}
