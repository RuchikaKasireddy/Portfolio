import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineFilePdf,
} from "react-icons/ai";
import pdf from "./AmanTBhat_Resume.pdf";
import { Link, useLocation } from "react-router-dom";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu(e) {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && <div className="burgerbackground" onClick={closeMenu} />}
      <button className="burgerbutton" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`burgernav ${isOpen ? "active" : ""}`}>
        <button className="burgerclose" onClick={closeMenu}>
          &times;
        </button>
        <ul className="burgerlist">
          <li className={pathname === "/" ? "active" : ""}>
            <Link to="/" className="burgertext" onClick={closeMenu}>
              Introduction
            </Link>
          </li>
          <li className={pathname === "/about" ? "active" : ""}>
            <Link to="/about" className="burgertext" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className={pathname === "/work" ? "active" : ""}>
            <Link to="/work" className="burgertext" onClick={closeMenu}>
              Work
            </Link>
          </li>
          <a className="burgertext" href={pdf} target="_blank" rel="noreferrer">
            <div className="resumeburger">
              <AiOutlineFilePdf /> Resume
            </div>
          </a>
          <a
            className="contacticons"
            href="https://www.github.com/aman04jdsj"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <a
            className="contacticons"
            href="https://www.linkedin.com/in/amanthirbhat"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            className="contacticons"
            href="mailto:aman04jdsj@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
        </ul>
      </nav>
    </>
  );
}

export default BurgerMenu;
