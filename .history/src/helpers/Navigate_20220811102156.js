import {useNavigate} from 'react-router-dom'
const Navegar = (link='/') => {
    const navigate= useNavigate();
    navigate('/')
}
 
export default Navegar;