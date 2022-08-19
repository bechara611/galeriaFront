import React,{useEffect} from 'react';
import styled,{css, keyframes} from 'styled-components'
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
    z-index: 1000;
    width: 7vw;
    fill:red;
    color:red;
    opacity:.6;
    @media (max-width: 500px) {
        width: 20vw;
  }
  @media (max-width: 231px) {
        width: 30vw;
  }

  &:hover
    {
        background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
        background-color:#378de5;
    }
    ${props=>props.fondoNegro && css`
    background: black;
    color:#fff;
    `}

`;

const Contenedor = styled.div`
 z-index: 1000;
   
    width:100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown2} 2s infinite;
`
