import react from "react";
import NavItems from "../NavItems/NavItems";
import './Navbar.css'
import listIcon from '../../../constants/list.png'


const Navbar = (props) => {
  return (
  <header >
    <nav className="navbar">
    <a className="logolink"><span> To-Do List </span><img src={listIcon} /></a>
    <NavItems /></nav>
  </header>)
}

export default Navbar