import React,{useEffect} from 'react';
import styled,{keyframes} from 'styled-components'
import {ReactComponent as loading} from './../imagenes/loading.svg'


const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
        transform: rotate(360deg);
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
        transform: rotate(360deg);
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
        transform: rotate(360deg);
    }
`;
 
const LoadingSVG = styled(loading)`
    z-index: 1000;
    width: 7%;
    fill:red;
    color:red;
`;

const Contenedor = styled.div`
 z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease;
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