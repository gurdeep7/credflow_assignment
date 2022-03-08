import styled from "styled-components";

export const NavbarDiv= styled.div`
    background-color: #28a5cf ;
    width:100% ;
    height:150px ;

    & > button:nth-child(1){
    float:left ;
       height :30px ;
       background-color: lightgray;
       margin:10px ;
    }
    & > button:nth-child(2){
    float:left ;
       height :30px ;
       background-color: lightgray;
       margin:10px ;
    }
    & > button:nth-child(3){
    float:right ;
       height :30px ;
       background-color: #bb3636;
       margin:10px ;
    }
    & > button:nth-child(4){
    float:right ;
       height :30px ;
       background-color: #72bb36;
       margin:10px ;
    }
    

    & > div{
        margin:0px ;
        font-size:70px;
        background: -webkit-linear-gradient(#0ce92a, #333333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    }

    & > p {
        margin-top: 0px ;
        color: pink ;
        font-size: xx-large ;
        position: relative;
        margin: auto ;
        width:fit-content ;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
    }
    @keyframes example {
  0%   {color:red; left:-200px; }
  25%  {color:yellow; left:0px; }
  50%  {color:blue; left:200px; }
  75%  {color:green; left:0px; }
  100% {color:red; left:-200px; }
}
`
