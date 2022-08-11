import {NavLink,useNavigate } from 'react-router-dom'

const Gallery = () => {
    return ( <>
        <h1>GALLERY PART</h1>
        <NavLink to="/">Login</NavLink>
        <button onClick={()=>{ 
            const navigate = useNavigate();
            navigate('/')

         }}>Login</button>
        </> );
}
 
export default Gallery;