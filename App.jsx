import Navbar from "./src/Components/Navbar"
import Newsboard from "./Newsboard"
import {useState} from "react";


const App = () => {
 
  const[category,setCategory]=useState("general");
  return (  
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/> 
    </div>
    
  )
}
export default App;

