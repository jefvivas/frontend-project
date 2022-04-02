import Navbar from "./components/Navbar"
import FormElement from "./components/FormElement"
import { useState  } from "react"
import imagem from './login.png'
import {useNavigate} from 'react-router-dom'

const Signup = () =>{

    const[signupData,setSignupData] = useState({name:'',login:'',password:'',passwordConfirmation:''})
    const[erroLogin,setErroLogin] = useState('')

    const navigate = useNavigate()

    const handleSignupForm = (e) => {
        setSignupData(oldSignupData => {
            return{
                ...oldSignupData,
                [e.target.name] : e.target.value
            }
        })
    }

    const sendData = () =>{
        fetch('http://localhost:4001/register', {
        method: 'POST',
        body: JSON.stringify(signupData),
        headers: { 'Content-Type': 'application/json',mode: 'no-cors' }
        
    }).then(res => res.json())
    .then(json => {
        if(json.message === 'Usuario criado com sucesso'){
            navigate('/')
        } else if(json.message === 'Usuario ja existe'){
            setErroLogin('Usuario já cadastrado')
        }else{
            setErroLogin('Senhas não coincidem')
        }
    })

    }


    return(
        <div className="container--signup">
            <Navbar/>
            <img className = 'image--signup' src = {imagem} alt = 'imagem'/>
            <div className='form'>
            {erroLogin?<span className='erroLogin'>{erroLogin}</span>:''}

                <form >
                    <FormElement placeholder = 'Nome' name = 'name' type = 'text' value = {signupData.name} onChange = {handleSignupForm} />
                    <FormElement placeholder = 'Login' name = 'login' type = 'text' value = {signupData.login} onChange = {handleSignupForm} />
                    <FormElement placeholder = 'Senha' name = 'password' type = 'password' value = {signupData.password} onChange = {handleSignupForm}/>
                    <FormElement placeholder = 'Confirmação de Senha' name = 'passwordConfirmation' type = 'password' value = {signupData.passwordConfirmation} onChange = {handleSignupForm}/>

                </form>
                <button type = 'submit' className='loginButton' onClick={sendData} > Criar conta </button>
        </div>
        </div>
    )
}

export default Signup