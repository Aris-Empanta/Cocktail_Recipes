import axios from "axios"
import { useEffect, useState } from 'react';
import { NavBar } from './navBar';
import { showScrollUp } from "./functions/generalFunctions";
import { scrollUp } from "./functions/generalFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import "../css/cocktailsGeneral.css"

//Below component displays all cocktails of the database in alphabetical order
export const AllCoctails = () => {


  const [cocktailData, setCocktailData] = useState([])
  const [axiosReference, setAxiosReference] = useState(0)
  const [loaded, setLoaded] = useState(false)
  
  /*With below listener, the scrollUp button will appear whenever
    the scrolling distance from top is more than 0*/
  window.addEventListener("scroll", showScrollUp)
    
  useEffect(() => {

      /*Below, we set a condition for the component, so that the loading element is displayed during
        the delay that happens when axios is fetching the data from cocktail DB */
      let loader = document.getElementById("loaderName")

      if(loaded === true){
        loader.style.display = "none"
      } else {
        loader.style.display = "initial"
      }
      //Fetching the data needed from cocktail DB
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a" )
           .then((response) => {  
              //Ceasing the display of the loading element
              setLoaded(true)     

              /* State updates in conjunction with useEffect, causes component to re-render, with unwanted side effects,
                like fetching the data infinite times. That's why I used the trick below to fetch the data needed
                only once, with the axiosReference condition.  */
              let array = []                      
              let j=1

              for(let i=0; i< response.data.drinks.length; i++){     
                  array.push([response.data.drinks[i].strDrink, response.data.drinks[i].strDrinkThumb])                                                 
                } 

              if(axiosReference === 0){ 
                  setAxiosReference(1)
                  setCocktailData(array)
                }                                             
              })
            }
           )

  /*With below function we can switch between the desired cocktail's first alphabet character. */
  const chooseFirstLetter = (code) => {    
    
    const character = document.getElementById(code).innerText.toLowerCase()
    //Reseting state for each search
    setLoaded(false)    
    setCocktailData([])

    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + character )
         .then((response) => {
              //Ceasing the loader element display
              setLoaded(true)             

              //Building a 2-dimantional array with the cocktail name and its image
              for(let i=0; i< response.data.drinks.length; i++){        
                   setCocktailData(oldArray => [...oldArray, [response.data.drinks[i].strDrink, response.data.drinks[i].strDrinkThumb]])                                       
                  }                 
                }
              )
            }


  return (
    <div>
      <NavBar /> 
      <div id="allCocktailsWrapper">     
        <div id="buttonWrapper">    
          <button className="alphabetButton" id="a" onClick={ () => chooseFirstLetter("a") }>A</button> 
          <button className="alphabetButton" id="b" onClick={ () => chooseFirstLetter("b") }>B</button>  
          <button className="alphabetButton" id="c" onClick={ () => chooseFirstLetter("c") }>C</button> 
          <button className="alphabetButton" id="d" onClick={ () => chooseFirstLetter("d") }>D</button> 
          <button className="alphabetButton" id="e" onClick={ () => chooseFirstLetter("e") }>E</button> 
          <button className="alphabetButton" id="f" onClick={ () => chooseFirstLetter("f") }>F</button>  
          <button className="alphabetButton" id="g" onClick={ () => chooseFirstLetter("g") }>G</button> 
          <button className="alphabetButton" id="h" onClick={ () => chooseFirstLetter("h") }>H</button> 
          <button className="alphabetButton" id="i" onClick={ () => chooseFirstLetter("i") }>I</button>
          <button className="alphabetButton" id="j" onClick={ () => chooseFirstLetter("j") }>J</button>   
          <button className="alphabetButton" id="k" onClick={ () => chooseFirstLetter("k") }>K</button> 
          <button className="alphabetButton" id="l" onClick={ () => chooseFirstLetter("l") }>L</button> 
          <button className="alphabetButton" id="m" onClick={ () => chooseFirstLetter("m") }>M</button> 
          <button className="alphabetButton" id="n" onClick={ () => chooseFirstLetter("n") }>N</button> 
          <button className="alphabetButton" id="o" onClick={ () => chooseFirstLetter("o") }>O</button> 
          <button className="alphabetButton" id="p" onClick={ () => chooseFirstLetter("p") }>P</button> 
          <button className="alphabetButton" id="q" onClick={ () => chooseFirstLetter("q") }>Q</button> 
          <button className="alphabetButton" id="r" onClick={ () => chooseFirstLetter("r") }>R</button> 
          <button className="alphabetButton" id="s" onClick={ () => chooseFirstLetter("s") }>S</button>
          <button className="alphabetButton" id="t" onClick={ () => chooseFirstLetter("t") }>T</button>
          <button className="alphabetButton" id="v" onClick={ () => chooseFirstLetter("v") }>V</button>
          <button className="alphabetButton" id="w" onClick={ () => chooseFirstLetter("w") }>W</button>
          <button className="alphabetButton" id="y" onClick={ () => chooseFirstLetter("y") }>Y</button>
          <button className="alphabetButton" id="z" onClick={ () => chooseFirstLetter("z") }>Z</button>
        </div>          
        <p id="loaderName">Please wait...</p>
      </div> 
      <button class="scrollUp" onClick={ scrollUp }>< FontAwesomeIcon icon={ faAnglesUp } /></button>  
      <div className="searchWrapper">
        {cocktailData.map(item => <a class="cocktailLink" href= { "#/" + item[0] } target="_blank">
                                                <div class="cocktailWrapper">                                          
                                                  <img id="cocktailImage" alt="please wait..." src={ item[1]} />
                                                  <p id="cocktailCaption">{ item[0] }</p>
                                                </div>
                                              </a>)}
      </div>                           
    </div>
  );
}