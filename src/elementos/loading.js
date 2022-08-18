import React,{useEffect} from 'react';
import styled,{keyframes} from 'styled-components'



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
 
const ContenedorAlerta = styled.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease;
 
    p {
 
        background: ${(props) => {
            if(props.tipo === 'error'){
                return "#E34747";
            } else if (props.tipo === 'exito') {
                return "#43A854";
            } else {
                return '#000';
            }
        }};
        color: #fff;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;



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
            <ContenedorAlerta>
            <p>LOADING</p>
            </ContenedorAlerta>
            :
            <></>
        }
        
        </>

      );
}
 
export default Loading;