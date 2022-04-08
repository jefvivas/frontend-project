import { useNavigate} from "react-router-dom";


export function PrivateRoute({ children }) {
    const auth = localStorage.getItem('token')
    const navigate = useNavigate()
    return auth ? children : navigate('/');
}