import "../css/navBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export const NavBar = () => {


    //Below functions show and hide the submenu when hovering on "Search" link
    const showSubMenu = () => {
        document.getElementById("subMenu").style.display = "flex"
    }

    const hideSubMenu = () => {
        document.getElementById("subMenu").style.display = "none"
    }

    return(
        <div>
            <ul id="navLinks">
                <li>
                    <a href="#/" >Home</a>
                </li>
                <li>
                    <a href="#/all-cocktails" >All Cocktails</a>
                </li>
                <li onMouseOver={ showSubMenu }
                    onMouseLeave= { hideSubMenu }
                    id="searchLinks">
                    Search&nbsp;<span>< FontAwesomeIcon icon={ faChevronDown } /></span>
                    <div id="subMenu">
                        <a  href="#/by-ingredient" >By ingredient</a>
                        <a  href="#/by-name" >By name</a>
                    </div>
                </li>               
            </ul>
            
        </div>
    )
}