import axios from "axios"
import { useEffect, useState } from "react"
import { NavBar } from './navBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../css/cocktailsGeneral.css"

//With below component, you can find all the cocktails made with the ingredient you put in the input field.
export const ByIngredient = () => {
    
    const [cocktailData, setCocktailData] = useState([])
    const [error, setError] = useState("")
    const [loaded, setLoaded] = useState(true)

    /*Below, we set a condition for the component, so that the loading element is displayed during
      the delay that happens when axios is fetching the data from cocktail DB */
    useEffect(() => {

        let loader = document.getElementById("loaderIngredient")       

        if(loaded === true){
          loader.style.display = "none"                   
        } else {
          loader.style.display = "initial"        
        }
      }
    )

    //With below function, you can find all the cocktails that have the ingredient you put.
    const findIngredient = () => {

      //Reseting state for each search
      setCocktailData([])
      setError("")
      setLoaded(false)

      let ingredient = document.getElementById("inputIngredient").value    
      //Fetching the cocktails
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient)
           .then((response) => {  
              setLoaded(true)                   
              for(let i=0; i< response.data.drinks.length; i++){                   
                  setCocktailData(oldArray => [...oldArray, [response.data.drinks[i].strDrink, response.data.drinks[i].strDrinkThumb]])                                                 
                }                                    
           }).catch(() => setError("No such cocktail exists"))   
    }
   
    return(<div>
             < NavBar />
             <div className="searchWrapper">
                <div class="inputGrid">
                  <div className="inputField">
                    <input type="text" id="inputIngredient" placeholder="Enter ingredient" />
                    <button id="searchIngredient" onClick={ findIngredient }><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                  </div>   
                  <p class="error">{ error }<span><div id="loaderIngredient">Please Wait...</div></span></p> 
                </div>             
                { cocktailData.map(item =>  <div className="outerWrapper">
                                              <a class="cocktailLink" href= { "#/" + item[0] } target="_blank">
                                                <div class="cocktailWrapper">                                          
                                                  <img id="cocktailImage" alt="please wait..." src={ item[1]} />
                                                  <p id="cocktailCaption">{ item[0] }</p>
                                                </div>
                                              </a>
                                            </div>)}                                                                            
             </div>
           </div>
          )
      }