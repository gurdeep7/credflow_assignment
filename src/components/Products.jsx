import axios from "axios";
import { useEffect, useRef } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { FilterDiv, ProductDiv } from "../designs/Product"
import { addtoCart } from "../redux/action";

export const Products = ()=>{
let totalPages = useRef(0)
    const [products,setProducts] = useState([])
    const [page,setPage] = useState(1)
    const [show,setShow] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{

    },[show])

      useEffect(()=>{
        axios.get(`https://api.sampleapis.com/wines/reds`)
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
        totalPages = Math.floor(res.data.length / 9)
        console.log(totalPages)
        let arr =[]
        setTimeout(()=>{for(let i = 0; i <9; i++){
            arr.push(res.data[i])
            
        }
        console.log(arr)
        setShow(arr)},300)
      
       
      })
    },[])
    
   const showProducts = ()=>{
       let arr =[]
       for(let i = page*9-9; i < page*9; i++){
           arr.push(products[i])
       }
       console.log("work")
       setShow(arr)
   }
return(<>
<FilterDiv>
    <div>Filters</div>
    <button>
        Rating 4.8 and above
    </button>
    <br />
    <button>
        Reviews 50 and above
    </button>
</FilterDiv>
<ProductDiv>
    Products
    <div>
        {
            show.map((e)=>{
                return <div style={{height:"550px"}} key={e.id}>
                    <img style={{height:"300px",width:"33%"}} src={e.image}></img>
                    <h4>Winery:{e.winery}</h4>
                    <p>Wine:{e.wine}</p>
                    <p>
                        Ratings:{e.rating.average}
                    </p>
                    <h6>Reviews:{e.rating.reviews}</h6>
                    <button on onClick={()=>{dispatch(addtoCart(e))}}>ADD TO CART</button>
                    </div>
                    
            })
        }
        
    </div>
    <button style={{height:"30px",margin:"10px"}} disabled={page === 1} onClick={()=>{setPage(page-1)
    showProducts()
    }} >Previous</button>
        <button style={{height:"30px",margin:"10px"}} disabled={page === totalPages} onClick={()=>{setPage(page+1)
    showProducts()
    }}>Next</button>
</ProductDiv>
</>)
}