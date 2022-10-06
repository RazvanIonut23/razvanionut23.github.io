import React, { useState, useEffect } from "react";
import s from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useScroll } from "./useScroll";

function Header({ homeNav, projects, aboutNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  const { y, x, scrollDirection } = useScroll();

  const styleNav = {
    active: {
      visibility: "visible",
      transition: "all 2s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 2s",
      transform: "translateY(-100%)",
    },
  };

  const [atTop, setAtTop] = useState(true);

  function listenScrollEvent() {
    if (window.scrollY > 50) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <nav style={scrollDirection === "down" ? styleNav.active : styleNav.active}>
      <div className={s.navInner}>
        <p>{"< razvan />"}</p>
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
