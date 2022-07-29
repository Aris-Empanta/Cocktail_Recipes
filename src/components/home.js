import "../css/home.css"
import { NavBar } from './navBar';
import cocktail from "../images/cocktail.jpg"


export const Home = () => {


  /* */
  return (<div> 
            <div id="homePage">
              <NavBar />  
                <div id="homeWrapper">
                  <div id="welcomeWrapper">
                    <h1 id="welcomeTitle">Aris' Cocktails</h1>
                    <p id="welcomeText">An app where you can find any cocktail recipe!</p>
                  </div>
                  <img id="homeImage" src={ cocktail } />
                </div>
                <div class="wave"></div>                                            
            </div>           
          </div>
    );
  }