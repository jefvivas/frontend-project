import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import './Login.css'
import './Signup.css'


const App = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path = '/' element = {<Login />} />
                    <Route path = '/signup' element = {<Signup />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App