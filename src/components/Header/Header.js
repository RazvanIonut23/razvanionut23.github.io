import React, { useState } from "react";
import s from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/L.svg";

function Header({ homeNav, projects, aboutNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return (
    <nav>
      <div className={s.navInner}>
        <img
          src={logo}
          alt="assas"
          className={s.logo}
          onClick={() => navigate("/")}
        ></img>
        {/* <p>{"< razvan />"}</p> */}
        <ul>
          <Link to={"/"}>
            <li className={homeNav ? s.locationNav : s.notLocationNav}>Home</li>
          </Link>
          <Link to={"/projects"}>
            <li className={projects ? s.locationNav : s.notLocationNav}>
              Projects
            </li>
          </Link>
          <Link to={"/about"}>
            <li className={aboutNav ? s.locationNav : s.notLocationNav}>
              About
            </li>
          </Link>
        </ul>

        <div
          className={isOpen ? s.hamburgerOpen : s.hamburger}
          onClick={handleOpen}
        >
          <div className={s.bar1}></div>
          <div className={s.bar2}></div>
          <div className={s.bar3}></div>
        </div>

        <div className={isOpen ? s.navLowOpen : s.navLowClosed}>
          <Link to={"/"} className={s.navItemLow}>
            Home
          </Link>
          <Link to={"/projects"} className={s.navItemLow}>
            Projects
          </Link>
          <Link to={"/about"} className={s.navItemLow}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
