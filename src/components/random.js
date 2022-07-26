import { NavBar } from './navBar';
import { useEffect, useState } from 'react';
import axios from "axios"
import "../css/random.css"

/*We below component, a user can generate a random cocktail recipe on buttons click. */
export const Random = () => {

    const [recipe, setRecipe] = useState("")    
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [alcoholic, setAlcoholic] = useState("")
    const [glass, setGlass] = useState("")
    const [image, setImage ] = useState("")    
    const [ingredients, setIngredients] = useState([])
    const [loaded, setLoaded] = useState(true)
    const [myQuote, setMyQuote] = useState("Are you in doubt? Let me decide for you!")

    
    /*Below, we set a condition for the component, so that the loading element is displayed during
      the delay that happens when axios is fetching the data from cocktail DB */
    useEffect(() => {
        let loader = document.getElementById("loaderRandom")

        if(loaded === true){
          loader.style.display = "none"
        } else {
          loader.style.display = "initial"
        }
      })

    
    //With below function, axios fetches a random's cocktail's recipe from the database on button's click.  
    const random = () => {
        
        //Reseting all cocktails info in every button's click.
        setRecipe("")
        setName("")
        setAlcoholic("")
        setCategory("")
        setGlass("")
        setImage("")
        setIngredients([])
        setLoaded(false)   

        //The quote while fetching a different random cocktail
        if(myQuote === "There you Have it!"){
          setMyQuote("Not satisfied? Let's try another one.")
        }
             
        
        //Fetcing the random cocktail's info.
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((response) => {
                      //Ceasing the display of the loading element
                      setLoaded(true)
                      //Changing the quote
                      setMyQuote("There you Have it!") 
                      //Setting all state according to the fetched data
                      setRecipe(response.data.drinks[0].strInstructions)
                      setName(response.data.drinks[0].strDrink)
                      setAlcoholic(response.data.drinks[0].strAlcoholic)
                      setCategory(response.data.drinks[0].strCategory)
                      setGlass(response.data.drinks[0].strGlass)
                      setImage(response.data.drinks[0].strDrinkThumb) 

                      /*With below loop, we fetch all the ingredients needed for each specific cocktail,
                       independantly of the amount of ingredients existing.*/
                      let i=1

                      while(response.data.drinks[0]["strIngredient" + i]){   
                        setIngredients([...ingredients, response.data.drinks[0]["strIngredient" + i]]) 
                        i++
                      }
                  })

            }


    return (<div>
                <NavBar />
                <p>{ myQuote }</p>
                <button onClick={ random }>GET COCKTAIL</button>
                <img src= { image } /><br></br>  
                        { name }<br></br>
                        { recipe }<br></br>
                        { alcoholic }<br></br>
                        { glass }<br></br>
                        { category }<br></br>
                        { ingredients.map(item => <p>{ item }</p>) }
                <p id="loaderRandom">...loading</p>
            </div>)
}