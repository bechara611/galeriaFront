import {useNavigate} from 'react-router-dom'
const Navegar = (link='/') => {
    const navigate= useNavigate();
    return(<>
        navigate('/')
        </>)
    
}
 
export default Navegar;