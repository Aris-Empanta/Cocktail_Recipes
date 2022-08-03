import {useParams} from 'react-router-dom';
import Axios from "axios"
import { useEffect, useState } from 'react';
import "../css/dynamicCocktail.css"


/*Below component, is dynamically generated every time we click to a cocktail we want to check.
  It contains all the information needed to made that cocktail. */
export const DynamicCocktail = () => {    
    
    const [recipe, setRecipe] = useState("")    
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [alcoholic, setAlcoholic] = useState("")
    const [glass, setGlass] = useState("")
    const [image, setImage ] = useState("")
    const [axiosReference, setAxiosReference] = useState(0)
    const [ingredients, setIngredients] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    //We need the useParams hook, to fetch the data from the url so that we render the component accordingly. 
    const params = useParams();

    //We render all the info we need to make the cocktail. 
    useEffect(() => {

      /*Below, we set a condition for the component, so that the loading element is displayed during
        the delay that happens when axios is fetching the data from cocktail DB */
      let loader = document.getElementById("loaderRecipe")

      if(loaded === false){
          loader.style.display = "initial"
        } else {
          loader.style.display = "none"
        }
        
        /*We fetch the cocktails' informations, depending of the cocktail name in the url.*/
        Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + params.cocktailName).then((response) => {
                
                //Ceasing the display of the loading element
                setLoaded(true)

                
                let cocktailInfo = document.querySelector(".cocktailInfo")        

                cocktailInfo.style.display = "flex" 
                
               
                for(let i=0; i< response.data.drinks.length; i++){
                    if(params.cocktailName === response.data.drinks[i].strDrink) {
                      
                      setRecipe(response.data.drinks[i].strInstructions)
                      setName(response.data.drinks[i].strDrink)
                      setAlcoholic(response.data.drinks[i].strAlcoholic)
                      setCategory(response.data.drinks[i].strCategory)
                      setGlass(response.data.drinks[i].strGlass)
                      setImage(response.data.drinks[i].strDrinkThumb)                        
                      
                      /* State updates in conjunction with useEffect, causes component to re-render, with unwanted side effects,
                        like fetching the data infinite times. That's why I used the trick below to fetch the data needed
                        only once, with the axiosReference condition.  */
                      let array = []                      
                      let j=1

                      while(response.data.drinks[i]["strIngredient" + j] !== null){   
                        array.push(response.data.drinks[i]["strIngredient" + j])
                        j++
                      }                                        
                    
                      if(axiosReference === 0){
                        setAxiosReference(1)
                        setIngredients(array)
                      }
                    }                  
                  }                 
                }
              ).catch((e)=> console.log(e))                
            }            
          )

  return (
          <div className='dynamicCocktail'>           
            <div className='cocktailInfo'>
                    <img className="cocktailImage" src= { image } />
                    <div className='infoWrapper'>                  
                      <p><span className='infoLabel'>Name: </span><span className='fetchedInfo'>{ name }</span></p>                      
                      <p><span className='infoLabel'>Alcoholic: </span><span className='fetchedInfo'>{ alcoholic === "Alcoholic" ? "Yes" : "No" }</span></p>
                      <p><span className='infoLabel'>Glass to be served: </span><span className='fetchedInfo'>{ glass }</span></p>
                      <p><span className='infoLabel'>Category: </span><span className='fetchedInfo'>{ category }</span></p>
                      <p><span className='infoLabel'>Ingredients: </span><span className='fetchedInfo'></span></p>
                      <ul className='ingredients'>{ ingredients.map(item => <li className='fetchedInfo'>{ item }</li>) }</ul>
                      <p><span className='infoLabel'>How to make: </span><span className='fetchedInfo'>{ recipe }</span></p>
                    </div>
                  </div>
            <p id="loaderRecipe">Please wait...</p>
          </div>
        );
      }