import {useNavigate} from 'react-router-dom'
const Navegar = (link='/') => {
    let navigate= useNavigate();
    navigate('/');
    
}
 
export default Navegar;