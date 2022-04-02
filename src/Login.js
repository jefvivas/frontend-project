import FormElement from './components/FormElement'
import imagem from './login.png'
import Navbar from './components/Navbar';
import {useState} from 'react'
import {Link} from 'react-router-dom'

import iconImage from './icon.png'
import closedIcon from './closedIcon.png'



function Login() {

  const [data,setData] = useState({login:'', password:''})
  const [invisible,setInvisible] = useState(true)

  const handleForm = (e) => {
    setData(oldData => {
      return{
        ...oldData,
        [e.target.name] : e.target.value 
      }
    })
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(data)
  }

  const handleInvisibility = () => {
    setInvisible(!invisible)
  }


  return (
    <div className='container--login'>
        <Navbar/>
        <img className = 'image' src = {imagem} alt = 'imagem'/>
       
        <div className='form'>
          <form onSubmit={handleSubmit}>
              <FormElement placeholder = 'Login' name = 'login' type = 'text' value = {data.login} onChange={handleForm}/>
             <span 
                className='span--input'><FormElement placeholder = 'Senha' name = 'password' type = {invisible? 'password': 'text'}
                value = {data.password} onChange={handleForm}/> 
                <img className='icon--image' src = {invisible?iconImage:closedIcon} alt = 'icon' onClick={handleInvisibility}/> 
              </span> 
          </form>
          <button type = 'submit' className='loginButton' onClick={handleSubmit}> Entrar </button>
          <Link to = {'/signup'} style={{ textDecoration: 'none', color:'#25BE25' }} >
            <h3 className='signUp-btn'>Cadastre-se</h3>
          </Link>
        </div>
    </div>
  
  );
}

export default Login;
