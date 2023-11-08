import { Outlet } from "react-router-dom";
import "./Layout.css";
import { SideNav } from "./SideNav";
import { Header } from "./Header";
import { FunctionComponent } from "react";

export const Layout: FunctionComponent = (): JSX.Element => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-container">
        <SideNav />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
