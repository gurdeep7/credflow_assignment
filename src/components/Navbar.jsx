
import { useNavigate } from "react-router-dom"
import { NavbarDiv } from "../designs/Navbar"


export const Navbar= ()=>{

const navigate = useNavigate()
    return <NavbarDiv>
        <button>Register</button>
        <button>Login</button>
        
        <button>Log Out</button>
        
        <button onClick={()=>{
            navigate("/cart")
        }}>Cart</button>
        
        <div>Wine Shop</div>
        <p>We Deal in Best Wines</p>

    </NavbarDiv>
}