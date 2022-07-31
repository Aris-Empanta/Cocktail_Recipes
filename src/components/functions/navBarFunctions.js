
    //Below functions show and hide the submenu when hovering on "Search" link
    export const showSubMenu = () => {

        let subMenu = document.getElementById("subMenu")
        
        subMenu.style.display = "flex"
    }

    export const hideSubMenu = () => {
        
        let subMenu = document.getElementById("subMenu")
        
        subMenu.style.display = "none"
    }
 
    //With this function, in small screens we make the navbar appear when we click the bar icon
    export const showNavBar = () => {

        let wrapper = document.getElementById("smallNavWrapper")
        let page = document.getElementById("homePage")
        let subMenu = document.getElementById("subMenu")

        wrapper.style.transform = "translateX(0)"
        wrapper.style.transition = "transform 1s"
        page.style.overflowY = "hidden"
        subMenu.style.display = "none"        
    }

    //With this function, we make the navbar disappear when we click the "X" icon
    export const hideNavBar = () => {

        let wrapper = document.getElementById("smallNavWrapper")
        let page = document.getElementById("homePage")
        let subMenu = document.getElementById("smallSubMenu")

        
        wrapper.style.transform = "translateX(-100vw)"
        page.style.overflowY = "scroll"
        subMenu.style.display = "none"            
    }

    //With that function in small screens, when click on search element we show or hide the sub-menu.
    export const manageSubMenu = () => {

        const subMenu = document.getElementById("smallSubMenu")

        subMenu.style.display !== "flex" ? subMenu.style.display = "flex" : subMenu.style.display = "none"
    }    