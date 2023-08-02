// Third party
import { Link, useLocation } from "react-router-dom";

// Images
import logo from "../../images/logo_principal_1.png";

// Types
import { Status } from "../../types";

// Hooks
import { useAuth } from "../../hooks";

// Styles
import "./styles.css";
import React from "react";

type NavLinks = {
  title: string;
  to: string;
  private?: boolean;
};

type Props = {
  status: Status;
};

const navLinks: NavLinks[] = [
  {
    to: "/#top",
    title: "Inicio",
  },
  { to: "/#aboutUs", title: "Acerca de Nosotros" },
  { to: "/#habitaciones", title: "Habicationes" },
  { to: "/#contactUs", title: "Contactanos" },
];

export default function Navbar({ status }: Props) {
  const router = useLocation();
  const { user, logout } = useAuth();
  function handleLogout() {
    logout();
  }
  return (
    <>
      <header className="position-sticky header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex px-1">
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={logo} alt="Logo" width="32" height="40" className="d-inline-block align-text-top me-2" />
              <strong>Hotel Industrial Genesis</strong>
            </Link>

            <div id="navbarNav">
              <ul className="navbar-nav">
                {navLinks.map((link, index) => (
                  <React.Fragment key={`${link.to}-${index}`}>
                    <li className="nav-item">
                      {/* <Link
                        className={`nav-link ${`${router.pathname}${router.hash}` === link.to && "active"}`}
                        aria-current="page"
                        to={link.to}
                      >
                        {link.title}
                      </Link> */}
                      <a
                        href={link.to}
                        className={`nav-link ${`${router.pathname}${router.hash}` === link.to && "active"}`}
                      >
                        {link.title}
                      </a>
                    </li>
                  </React.Fragment>
                ))}
                {user ? (
                  <>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${router.pathname === "/admin" && "active"}`}
                        aria-current="page"
                        to={"/admin"}
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button className={`nav-link btn`} aria-current="page" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${router.pathname === "/login" && "active"}`}
                      aria-current="page"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
