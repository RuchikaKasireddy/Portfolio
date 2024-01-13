import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Introduction");

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu(e) {
    setIsOpen(false);
    setActiveNav(e.target.innerHTML);
  }

  return (
    <>
      {isOpen && (
        <div
          className="burgerbackground"
          onClick={closeMenu}
        />
      )}
      <button className="burgerbutton" onClick={toggleMenu}>☰</button>
      <nav
        className={`burgernav ${isOpen ? "active" : ""}`}
      >
        <button
          className="burgerclose"
          onClick={closeMenu}
        >
          &times;
        </button>
        <ul className="burgerlist">
          <li className={activeNav === "Introduction" ? "active" : ""}>
            <a className="burgertext" href="#introduction" onClick={closeMenu}>
              Introduction
            </a>
          </li>
          <li className={activeNav === "About" ? "active" : ""}>
            <a className="burgertext" href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className={activeNav === "Work" ? "active" : ""}>
            <a className="burgertext" href="#work" onClick={closeMenu}>
              Work
            </a>
          </li>
          <a className="contacticons" href="https://www.github.com/aman04jdsj" target="_blank" rel="noreferrer">
            <AiOutlineGithub />
          </a>
          <a className="contacticons" href="https://www.linkedin.com/in/amanthirbhat" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin />
          </a>
          <a className="contacticons" href="mailto:aman04jdsj@gmail.com" target="_blank" rel="noreferrer">
            <AiOutlineMail />
          </a>
        </ul>
      </nav>
    </>
  );
}

export default BurgerMenu;
