import FormElement from './components/FormElement'
import imagem from './login.png'
import Navbar from './components/Navbar';
import {useState} from 'react'
import {Link} from 'react-router-dom'

import iconImage from './icon.png'
import closedIcon from './closedIcon.png'



function Login() {

  const [invisible,setInvisible] = useState(true)
  const[loginData,setLoginData] = useState({login:'',password:''})

  const handleForm = (e) => {
    setLoginData(oldData => {
      return{
        ...oldData,
        [e.target.name] : e.target.value 
      }
    })
  }


  const handleInvisibility = () => {
    setInvisible(!invisible)
  }

    const sendData = () =>{
      fetch('http://localhost:4001/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: { 'Content-Type': 'application/json',mode: 'no-cors' }
      
  }).then(res => res.json())
  .then(json => console.log(json))

  }




  return (
    <div className='container--login'>
        <Navbar/>
        <img className = 'image' src = {imagem} alt = 'imagem'/>
       
        <div className='form'>
          <form onSubmit={sendData}>
              <FormElement placeholder = 'Login' name = 'login' type = 'text' value = {loginData.login} onChange={handleForm}/>
             <span 
                className='span--input'><FormElement placeholder = 'Senha' name = 'password' type = {invisible? 'password': 'text'}
                value = {loginData.password} onChange={handleForm}/> 
                <img className='icon--image' src = {invisible?iconImage:closedIcon} alt = 'icon' onClick={handleInvisibility}/> 
              </span> 
          </form>
          <button type = 'submit' className='loginButton' onClick={sendData}> Entrar </button>
          <Link to = {'/signup'} style={{ textDecoration: 'none', color:'#25BE25' }} >
            <h3 className='signUp-btn'>Cadastre-se</h3>
          </Link>
        </div>
    </div>
  
  );
}

export default Login;
