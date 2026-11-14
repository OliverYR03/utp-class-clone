import Nav from "../../components/Nav.jsx";
import Aside from "../../components/Aside.jsx";
import { Outlet } from "react-router-dom";

function ClassProfesorLayout() {

    
  return (
    <div className="min-h-screen bg-back-class">
        <Aside/>
        <div className="">
            <Nav />
            <main className="mx-auto w-full max-w-[1328px] px-5 pb-8 pt-3">
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default ClassProfesorLayout