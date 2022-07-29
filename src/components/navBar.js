import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"
import "../css/navBar.css"


//The navigation bar, a component I added only in the components I wanted.
export const NavBar = () => {

 

    const showNavBar = () => {
        

        
            document.getElementById("smallNavWrapper").style.transform = "translateX(0)"
            document.getElementById("homePage").style.overflowY = "hidden"
            document.getElementById("subMenu").style.display = "none"
        
    }

    const hideNavBar = () => {
        

        
            document.getElementById("smallNavWrapper").style.transform = "translateX(-100vw)"
            document.getElementById("homePage").style.overflowY = "scroll"
            document.getElementById("subMenu").style.display = "none"
            
    }

    //Below functions show and hide the submenu when hovering on "Search" link
    const showSubMenu = () => {
        document.getElementById("subMenu").style.display = "flex"
    }

    const hideSubMenu = () => {
        document.getElementById("subMenu").style.display = "none"
    }

    return(
        <div>
            <button id="barsMenu" onClick={ showNavBar  }>< FontAwesomeIcon  icon= { faBars }/> </button>
            <div id="navWrapper"> 
                
                <ul id="navLinks">                    
                    <li>
                        <a href="#/" >Home</a>
                    </li>
                    <li>
                        <a href="#/all-cocktails" >All Cocktails</a>
                    </li>
                    <li onMouseOver={ showSubMenu }
                        onMouseLeave= { hideSubMenu }
                        id="searchLinks" >
                        Search&nbsp;<span>< FontAwesomeIcon icon={ faChevronDown } /></span>
                        <div id="subMenu">
                            <a  href="#/by-ingredient" >By ingredient</a>
                            <a  href="#/by-name" >By name</a>
                        </div>
                    </li>   
                    <li>
                        <a href="#/random" >Random</a>
                    </li>           
                </ul>   
            </div>                    
            <div id="smallNavWrapper"> 
                <button id="xButton" onClick={ hideNavBar }><FontAwesomeIcon icon={faX} /></button>
                <ul id="smallNavLinks">                    
                    <li>
                        <a href="#/" >Home</a>
                    </li>
                    <li>
                        <a href="#/all-cocktails" >All Cocktails</a>
                    </li>
                    <li onMouseOver={ showSubMenu }
                        onMouseLeave= { hideSubMenu }
                        id="smallSearchLinks" >
                        Search&nbsp;<span>< FontAwesomeIcon icon={ faChevronDown } /></span>
                        <div id="smallSubMenu">
                            <a  href="#/by-ingredient" >By ingredient</a>
                            <a  href="#/by-name" >By name</a>
                        </div>
                    </li>   
                    <li>
                        <a href="#/random" >Random</a>
                    </li>           
                </ul>   
            </div>                    
        </div>
       )
    }