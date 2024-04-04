import { useState } from "react"
import logo from '../assets/img/logo img food villa.jpeg'
import { Link } from "react-router-dom"
import useOnline from "../Utils/useOnline"


const Title = () =>(
    <a href="/ ">
    <img 
    className='h-20 py-2'
    src={logo} alt="logo" />
    </a>
  )

  
 
  
  
  const Header = () =>{
    const [ isLoggedIn, setIsLoggedIn] = useState(true)

    const isOnline = useOnline()

    return (
      <div className="flex justify-between bg-pink-50 shadow-lg">
    <Title/>
       <div className="nav-items">
        <ul className="flex py-6 ">

        <Link to="/"><li className="px-2">Home</li></Link>
         <Link to="/About"><li className="px-2">About</li></Link> 
         <Link to="/Contact"><li className="px-2">Contact</li></Link> 
         <Link to="/Cart"><li className="px-2">Cart</li></Link> 

        </ul>
          
       </div>
       <h1>{isOnline? "✅":"🔴"}</h1>
       {
         isLoggedIn ?  <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=> setIsLoggedIn(true)}>Login</button>
       }
      </div>

    )
  }

  export default Header;