import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
    
      <nav class="navbar navbar-inverse bg-gradient-to-r from-cyan-500 to-blue-500">
  <div class="container-fluid text-black">
    <div class="navbar-header">
      <Link to="/" class="navbar-brand text-black text-center text-xxl ">🛒FASHIONSTA</Link>
    </div>
    <ul class="nav  navbar-right   text-black  d-flex ms-auto order-0  space-x-6 ">
    <li className="nav-item  ">
                <NavLink to="/" className="nav-link text-black">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link  text-black">
                  Category
                </NavLink>
              </li>
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link text-black">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link text-black">
                      Login
                    </NavLink>
                  </li>
                </>
              ) :(
                <>
                   <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle text-black"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li className="nav-item">
                <NavLink to="/cart" className="nav-link  text-black">
                  Cart (0)
                </NavLink>
              </li>
    </ul>
   
  </div>
</nav>



    </>
  );
};

export default Header;