import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { showSubMenu, hideSubMenu, showNavBar, hideNavBar, manageSubMenu } from "./functions/navBarFunctions"
import "../css/navBar.css"


//The navigation bar, a component I added only in the components I wanted.
export const NavBar = () => {

    //With that listener, when widow increases in width, the small screen navbar hides again
    window.addEventListener("resize", () => {

        const navBar = document.getElementById("smallNavWrapper")
        let subMenu = document.getElementById("smallSubMenu")

        navBar.style.transition = "transform0s"

        if(window.innerWidth > 705 ) {
            navBar.style.transform = "translateX(-100vw)"        
            subMenu.style.display = "none" 
        } 
        
            
    })




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
                    <li onClick={ manageSubMenu }                       
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