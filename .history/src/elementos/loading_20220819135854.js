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
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const LoadingSVG = styled(loading)`
    z-index: 1000;
    width: 10%;

`;

const contenedor = styled.div`
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
    }else{
        cambiarestadoLoading(true);
    }
   
    }, 4000);
   //return clearTimeout(tiempo)
    return(()=>{clearTimeout(tiempo)})
}
},[estadoLoading,cambiarestadoLoading,estadoCompleto,cambiarestadoCompleto]);



    return (
        <>
        {estadoLoading===true
            ?
            <contenedor>
           <LoadingSVG></LoadingSVG>
           </contenedor>
            :
            <></>
        }
        
        </>

      );
}
 
export default Loading;