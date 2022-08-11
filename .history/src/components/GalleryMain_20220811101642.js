import {NavLink,Navigate} from 'react-router-dom'

const Gallery = () => {
    return ( <>
        <h1>GALLERY PART</h1>
        <NavLink to="/">Login</NavLink>
        <button onClick={()=>{Navigate('/')}}>Login</button>
        </> );
}
 
export default Gallery;