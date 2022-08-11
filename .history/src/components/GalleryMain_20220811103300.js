import {NavLink,useNavigate } from 'react-router-dom'


const Gallery = () => {
    let navegar = useNavigate();

    return ( <>
        <h1>GALLERY PART</h1>
        <NavLink to="/">Login</NavLink>
        <button onClick={()=>{ 
            
            navegar('/');
         }}>Login</button>
        </> );
}
 
export default Gallery;