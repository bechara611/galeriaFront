
import styled, { css } from "styled-components";
const Label= styled.label`
margin-bottom: 5px;
width: 51%;
    ${props=>props.fondoVerde && css`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    box-shadow:inset 0px 1px 0px 0px #3e7327;
	/* background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%); */
	background: rgb(14,171,80);
	border-radius: 600px;
	
	border:1px solid rgb(14,171,80);
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	
    &:hover{
        background: rgb(15,171,80);
    }
    `}

`

export default Label;