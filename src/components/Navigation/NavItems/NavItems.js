import react from "react";
import NavItem from "../NavItem/NavItem";
import './NavItems.css'
import UserLogo from '../../../constants/user.png'
import BoardLogo from '../../../constants/board.png'

const NavItems = (props) => {
    return (
        <ul className="nav-items">
            <NavItem link="/Account"><img src={UserLogo} /></NavItem>
            <NavItem link="/"><img src={BoardLogo} /></NavItem>
        </ul>)
}

export default NavItems