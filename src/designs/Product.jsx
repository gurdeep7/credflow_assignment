import styled from "styled-components";


export const FilterDiv = styled.div`

display: inline-block ;
    background-color: gray;
    width: 25% ;
    height:1600px;

    & > button{
        width:200px ;
        height: 30px ;
        margin: 10px ;
    }
`

export const ProductDiv = styled.div`

display: inline-block ;
vertical-align: top ;
    
    width: 75% ;

    &>div{
        display: grid ;
       
        grid-template-columns: 1fr 1fr 1fr;
        background-color: lightcyan ;
    }

   
`