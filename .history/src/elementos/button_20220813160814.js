import styled,{css} from 'styled-components';

const Boton= styled.button`
margin-bottom: 5px;
		
    ${props=>props.fondoVerde && css`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    box-shadow:inset 0px 1px 0px 0px #3e7327;
	/* background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%); */
	background: rgb(14,171,80);
	
	border-radius:600px;
	border:1px solid rgb(14,171,80);
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #5b8a3c;
    &:hover{
        background: rgb(15,171,80);
    }
    `}
    
    ${props=>props.fondoAzul && css`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   
	background: rgb(2,102,213);
	
	border-radius:600px;
	border:1px solid rgb(2,102,213);
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #283966;
    &:hover{
		background: rgb(3,102,213);
    }
    `}

    ${props=>props.fondoBlanco2 && css`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	
	background: rgb(2,102,213,0);
	
	border:0px solid rgb(2,102,213,0);
	display:inline-block;
	cursor:pointer;
	color:#666666;
	color: aqua;
	font-family:Arial;
	font-size:12px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
    &:hover{
        text-decoration: underline;
    }

    `}

    @media ${`(max-width:226px )`} {
        font-size:10px;
        text-align: center;
        padding:12px;
		
  }

  @media ${`(max-width:168px )`} {
        font-size:9px;
        text-align: center;
        padding:8px;
		overflow-wrap: normal;
		justify-content: center;
   align-self: center;
   align-items: center;		
   width: 70vw;
  }


`


 
export default Boton;