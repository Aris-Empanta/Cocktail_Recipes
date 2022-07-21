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
                    <a href="#/" target="_blank">Home</a>
                </li>
                <li>
                    <a href="#/all-cocktails"  target="_blank">All Cocktails</a>
                </li>
                <li onMouseOver={ showSubMenu }
                    onMouseLeave= { hideSubMenu }
                    id="searchLinks">
                    Search&nbsp;<span>< FontAwesomeIcon icon={ faChevronDown } /></span>
                    <div id="subMenu">
                        <a  href="#/by-ingredient" target="_blank">By ingredient</a>
                        <a  href="#/by-name" target="_blank">By name</a>
                    </div>
                </li>               
            </ul>
            
        </div>
    )
}