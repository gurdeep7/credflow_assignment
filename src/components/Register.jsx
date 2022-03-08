import { useEffect } from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContextProvider"
import { Div } from "../designs/Register"
export const Register = ()=>{
    const [form,setForm] = useState({})
    const{token, handleToken} = useContext(AuthContext)
    useEffect(()=>{
        setForm({
            name:"",
            email:"",
            mobile:""
        })
    },[]) 
    

    const handleChange = ({target:{name,value}})=>{
        setForm({
            ...form,
            [name]:value
        })
        console.log(form)
    }
    const navigate = useNavigate()
    return<Div>
        <h2>Register Here</h2>
        <input type="text" onChange={handleChange} name= "name" placeholder="Enter Your Name"/>
        <input type="text" onChange={handleChange} name="email" placeholder="Enter a Email"/>
        <input type="password" onChange={handleChange} name="password" placeholder="Enter a password"/>
        <input type="text" onChange={handleChange} name="address" placeholder="Enter Your address"/>
        <input type="number" onChange={handleChange} name="mobile" placeholder="Enter Your Mobile Number"/>

        <button onClick={()=>{
            if(form.email.length < 7){
                alert("enter valid email")
                return
            }
            if(form.name.length < 5){
                alert("enter valid name")
                return
            }
            if(form.mobile.length != 10){
                alert("enter valid Mobile Number")
                return
            }
            
            navigate("/thankyou")
        }}>Place Order </button>
    </Div>
}