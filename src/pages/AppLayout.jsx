import React from "react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />

      <Map />
    </div>
  );
};

export default AppLayout;
