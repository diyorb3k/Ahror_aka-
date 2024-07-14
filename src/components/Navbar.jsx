// rrd imports
import { Link } from "react-router-dom";

// components
import NavbarLinks from "./NavbarLinks";

// context
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function Navbar() {
  const { a } = useContext(GlobalContext);
  return (
    <div className="bg-base-200 mb-10">
      <div className="navbar max-w-6xl mx-auto px-3">
        <div className="navbar-start">
          <Link to="/" className="btn btn-primary">
            <span>DStore</span>
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavbarLinks />
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex align-center items-center gap-5">
            <div className="avatar">
              <p>{a}</p>
              <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <button className="btn btn-secondary">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
