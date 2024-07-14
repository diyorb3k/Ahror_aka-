// rrd imports
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
