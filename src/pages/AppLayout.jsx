import React from "react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
const AppLayout = () => {
  return (
    <div>
      {/* sidebar */}
      <Sidebar />
      {/*map  */}
      <Map />
    </div>
  );
};

export default AppLayout;
