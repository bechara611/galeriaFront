import {NavLink } from 'react-router-dom'
import Navegar from '../helpers/Navigate';

const Gallery = () => {
    return ( <>
        <h1>GALLERY PART</h1>
        <NavLink to="/">Login</NavLink>
        <button onClick={()=>{ 
            Navegar('/');
         }}>Login</button>
        </> );
}
 
export default Gallery;