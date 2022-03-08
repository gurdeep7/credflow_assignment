import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Div } from "../designs/Cart"
import { Navbar } from "./Navbar"

export const Cart = ()=>{
    const cart = useSelector((state)=>({
        
        cart:state.cartState

    }))
    const navigate = useNavigate()
    console.log(cart.cart.cart,"ap")
    return <>
    <Navbar />
    <h2>Items In Cart</h2>
<Div>
{
            cart.cart.cart?.map((e)=>{
                return <div key={e.id}>
                    <img style={{height:"300px"}} src={e.image}></img>
                    <h4>Winery:{e.winery}</h4>
                    <p>Wine:{e.wine}</p>
                    </div>
                    
            })
        
        
    }             
</Div>
<button onClick={()=>{
    navigate("/register")
}}>Proceed To buy</button>

    </>
}