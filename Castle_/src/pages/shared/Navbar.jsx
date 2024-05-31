import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="container mx-auto py-3 mb-3 border-b-2 border-primary">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                      : "text-black font-bold text-lg rounded-lg px-5 py-2"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                      : "text-black font-bold text-lg rounded-lg px-5 py-2"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/review"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                      : "text-black font-bold text-lg rounded-lg px-5 py-2"
                  }
                >
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/update_profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                      : "text-black font-bold text-lg rounded-lg px-5 py-2"
                  }
                >
                  Update
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                      : "text-black font-bold text-lg rounded-lg px-5 py-2"
                  }
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="text-primary font-bold btn btn-ghost text-3xl">
            Castle
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                    : "text-black font-bold text-lg rounded-lg px-5 py-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                    : "text-black font-bold text-lg rounded-lg px-5 py-2"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                    : "text-black font-bold text-lg rounded-lg px-5 py-2"
                }
              >
                Review
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/update_profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                    : "text-black font-bold text-lg rounded-lg px-5 py-2"
                }
              >
                Update
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border border-primary font-bold text-lg rounded-lg px-5 py-2"
                    : "text-black font-bold text-lg rounded-lg px-5 py-2"
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user.photoURL ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                  />
                </div>
              </div>
              <div>
                <button onClick={handleSignOut} className="btn btn-primary">
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
