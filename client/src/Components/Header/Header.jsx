import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo0.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="header_section">
      <div className="header container">
        <div className="header_container row align-items-center">
          <div className="col text-align-right d-flex justify-content-between align-items-center">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
            <div className="header_small" onClick={toggleMenu}>
              <MenuIcon style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div
            className={`header_navlist col mx-auto d-none d-md-block d-lg-block ${
              menuOpen ? "active" : ""
            }`}
          >
            <div className="d-flex gap-5 justify-content-end align-items-center">
              <div className="gap-3 d-flex">
                <div>Home</div>
                <div>How it Works</div>
              </div>
              <button>
                <a className="header_btn_blue" href="/login">
                  Sign In
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-item">Home</div>
          <div className="mobile-menu-item">How it Works</div>
          <div className="mobile-menu-item">
            <a className="header_btn_blue" href="/login">
              Sign In
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Header;
