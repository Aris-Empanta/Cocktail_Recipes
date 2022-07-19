import Axios from "axios"
import { useEffect, useState } from 'react';
import "../css/allCocktails.css"

function AllCoctails() {

  const [cocktail, setCocktail] = useState([])
  const [axiosReference, setAxiosReference] = useState(0)
  
  useEffect(() => {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    /*With below call, we fetch all the data from cocktail DB API*/ 
    for(let i=0; i<alphabet.length; i++) {
        Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+alphabet[i]).then((response) => {
        if(axiosReference === i){
          for(let j=0; j< response.data.drinks.length; j++){
            setCocktail(oldArray => [...oldArray, response.data.drinks[j].strDrink])
          }     
          //axiosReference purpose is to avoid infinite loops, due to component re-rendering when state is upadated.
          setAxiosReference(i+1)  
         }       
        }
       )
      }

     setInterval(() => {
      //random
     },3000)

     }
    )
   

  const searchCocktails = () => {
      let searchBar = document.getElementById('searchBar').value
      searchBar=searchBar.toLowerCase();
      let cocktails = document.getElementsByClassName('cocktails');
        
      for (let i = 0; i < cocktails.length; i++) { 
          if (!cocktails[i].innerHTML.toLowerCase().includes(searchBar)) {            
            cocktails[i].style.display="none";
          }
          else {              
            cocktails[i].style.display="initial";            
          }
        }   
      }
    
  


  return (
    <div className="App">
      <input type="text" placeholder="Search cocktail..." id="searchBar" onKeyUp={ searchCocktails }/>
      {cocktail.map(item => <a href={ item } target="_blank" className="cocktails"><h1 >{ item }</h1></a>)}
    </div>
  );
}

export default AllCoctails;