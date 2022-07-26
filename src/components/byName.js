import axios from "axios"
import { useEffect, useState } from "react"
import { NavBar } from './navBar';

//With below component, you can find all the cocktails that contain the name you put in the input field.
export const ByName = () => {

      const [cocktailData, setCocktailData] = useState([])
      const [error, setError] = useState("")
      const [loaded, setLoaded] = useState(true)

      /*Below, we set a condition for the component, so that the loading element is displayed during
        the delay that happens when axios is fetching the data from cocktail DB */
      useEffect(() => {

          let loader = document.getElementById("loaderName")

          if(loaded === true){
            loader.style.display = "none"
          } else {
            loader.style.display = "initial"
          }
        }
      )
    
    //With below function, you can find all the cocktails that have the name you put.  
    const findName = () => {

        //Reseting state for each search
        setCocktailData([])
        setError("")
        setLoaded(false)

        let name = document.getElementById("inputName").value    
       
        //Fetching the cocktails
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name)
            .then((response) => {  
                setLoaded(true)                   
                for(let i=0; i< response.data.drinks.length; i++){        
                    setCocktailData(oldArray => [...oldArray, [response.data.drinks[i].strDrink, response.data.drinks[i].strDrinkThumb]])                                       
                  }                                   
              }).catch(() => setError("no such cocktail"))    
        }

    return(<div>
             <NavBar />
             <div className="inputWrapper">
                <div className="inputField">
                  <input type="text" placeholder="Enter cocktail name" id="inputName" />
                  <button id="searchName" onClick={ findName }>Search</button>
                </div >               
                { cocktailData.map(item => <a class="cocktailLink" href= { "#/" + item[0] } target="_blank">
                                              <div class="cocktailWrapper">                                          
                                                <img id="cocktailImage" alt="please wait..." src={ item[1]} />
                                                <p id="cocktailCaption">{ item[0] }</p>
                                              </div>
                                            </a>)}
                <p>{ error }</p>
                <p id="loaderName">...loading</p>
              </div>
           </div>)
}