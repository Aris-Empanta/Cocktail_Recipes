import "../css/home.css"
import { NavBar } from './navBar';
import Axios from "axios"


function Home() {



  const fetchData = () => {



    Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
         .then((res) => { 

          let i=1

          while(res.data.drinks[1]["strIngredient"+i] !== null){
            console.log(res.data.drinks[1]["strIngredient"+i])
            i += 1  
          }
         })
  }


  return (<div> 
            <div id="homePage">
              <NavBar />
              <button onClick={ fetchData }>FETCH</button>
            </div>           
          </div>
    );
    }

export default Home;