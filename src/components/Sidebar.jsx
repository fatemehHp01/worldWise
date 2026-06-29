import { NavLink, Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
export default function Sidebar({ children }) {
  return (
    <aside className="sidebar">
      <Logo />
      <AppNav />
      <main className="app-main">
        <Outlet />
      </main>
    </aside>
  );
}
