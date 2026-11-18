import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import SidebarAdmin from "../../components/Aside/SidebarAdmin";

function PortalAdminOutlet() {
  return (
    <div className="flex min-h-screen bg-back-class">
      <SidebarAdmin />

      <div className="flex min-w-0 flex-1 flex-col">
        <Nav />

        <main className="mx-auto w-full max-w-[1328px] flex-1 px-5 pb-8 pt-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default PortalAdminOutlet;