import "./navbar.css"
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
import { useState } from "react"

const Navbar = () => {
  const [active, setActive] = useState("navBar")

  // Function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar")
  }
  // Function to remove navbar
  const removeNavbar = () => {
    setActive("navBar")
  }
  return (
    <>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="./" className="logo flex">
              <h1>
                <MdOutlineTravelExplore />
                Travel.
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="# " className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="# " className="navLink">
                  Packages
                </a>
              </li>
              <li className="navItem">
                <a href="# " className="navLink">
                  Shop
                </a>
              </li>
              <li className="navItem">
                <a href="# " className="navLink">
                  About
                </a>
              </li>
              <li className="navItem">
                <a href="# " className="navLink">
                  pages
                </a>
              </li>
              <li className="navItem">
                <a href="# " className="navLink">
                  News
                </a>
              </li>
              <li className="navItem">
                <a href="# " className="navLink">
                  Contact
                </a>
              </li>

              <button className="btn">
                <a href="# ">Book Now</a>
              </button>
            </ul>

            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNav} className="toggleNav">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
    </>
  )
}

export default Navbar
