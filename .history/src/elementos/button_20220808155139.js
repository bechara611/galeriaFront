import styled,{css} from 'styled-components';

const Boton= styled.button`
box-shadow: 3px 4px 0px 0px #1564ad;
    background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
	background-color:#79bbff;
	border-radius:42px;
	border:2px solid #337bc4;
	
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
	padding:6px 19px;
	text-decoration:none;
	text-shadow:0px 1px 5px #528ecc;
    ${props=>props.fondoNegro && css`
    background: black;
    color:#fff;
    `}

    &:hover
    {
        background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
	    background-color:#378de5;
    }

`


 
export default Boton;