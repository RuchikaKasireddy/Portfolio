import React, { useState } from 'react';

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
        </ul>
      </nav>
    </>
  );
}

export default BurgerMenu;
