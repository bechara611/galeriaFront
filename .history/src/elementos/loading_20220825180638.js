import React,{useEffect} from 'react';
import styled,{keyframes} from 'styled-components'
import {ReactComponent as loading} from './../imagenes/loading.svg'



const slideDown2 = keyframes`
   
    
    90% {
        transform: rotate(360deg);
        opacity: 1;
    }
 
    100% {
        transform: rotate(360deg);
        opacity: 1;
   
    }
`;
 
const LoadingSVG = styled(loading)`
    z-index: 100000000000000000000000000000000000000000;
    width: 5vw;
    fill:red;
    color:red;
    opacity:.6;
    @media (max-width: 500px) {
        width: 20vw;
  }
  @media (max-width: 231px) {
        width: 30vw;
  }
`;

const Contenedor = styled.div`
 z-index: 1000000000000000000000000000000000000000000;
   
    width:100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
   display:none;
    justify-content: center;
    align-items: center;
    animation: ${slideDown2} 2s infinite;
    
`



const Loading = ({estadoLoading, cambiarestadoLoading,estadoCompleto,cambiarestadoCompleto}) => {
useEffect(()=>{

    
    let tiempo;
if (estadoLoading===true) {
   tiempo= setTimeout(() => {
    if(estadoCompleto===true){

        cambiarestadoLoading(false);
        cambiarestadoCompleto(false)
        
    }else{
        cambiarestadoLoading(true);
    }
   
    }, 2000);
   //return clearTimeout(tiempo)
    return(()=>{clearTimeout(tiempo)})
}
},[estadoLoading,cambiarestadoLoading,estadoCompleto,cambiarestadoCompleto]);



    return (
        <>
        {estadoLoading===true
            ?
            <Contenedor>
           <LoadingSVG></LoadingSVG>
           </Contenedor>
            :
            <></>
        }
        
        </>

      );
}
 
export default Loading;