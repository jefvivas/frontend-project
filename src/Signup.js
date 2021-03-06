import Navbar from "./components/Navbar";
import FormElement from "./components/FormElement";
import { useState } from "react";
import imagem from "./login.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    login: "",
    password: "",
    passwordConfirmation: "",
  });
  const [erroSignUp, setErroSignUp] = useState("");

  const navigate = useNavigate();

  const handleSignupForm = (e) => {
    setSignupData((oldSignupData) => {
      return {
        ...oldSignupData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      sendData();
    }
  }

  const sendData = async () => {
    const response = await fetch("http://localhost:4001/register", {
      method: "POST",
      body: JSON.stringify(signupData),
      headers: { "Content-Type": "application/json", mode: "no-cors" },
    });

    const json = await response.json();
    console.log(json)
    if (json.statusCode === 200) {
      navigate("/");
    }else if (json.body === "Campo name não enviado para criação de conta"){
      setErroSignUp('Preencha o campo de nome')
    }
    else if (json.body === "Campo login não enviado para criação de conta"){
      setErroSignUp('Preencha o campo de login')
    }
    else if (json.body === "Campo password não enviado para criação de conta"){
      setErroSignUp('Preencha o campo de senha')
    }
    else if (json.body === "Campo passwordConfirmation não enviado para criação de conta"){
      setErroSignUp('Preencha o campo de confirmação')
    }
     else if (json.body   === "Este usuário já existe") {
      setErroSignUp("Usuario já cadastrado");
    } else {
      setErroSignUp("Senhas não coincidem");
    }
  };

  return (
    <div className="container--signup">
      <Navbar />
      <img className="image--signup" src={imagem} alt="imagem" />
      <div className="form">
        {erroSignUp ? <span className="erroLogin">{erroSignUp}</span> : ""}

        <form>
          <FormElement
            placeholder="Nome"
            name="name"
            type="text"
            value={signupData.name}
            onChange={handleSignupForm}
            onKeyPress={handleKeyPress}
          />
          <FormElement
            placeholder="Login"
            name="login"
            type="text"
            value={signupData.login}
            onChange={handleSignupForm}
            onKeyPress={handleKeyPress}
          />
          <FormElement
            placeholder="Senha"
            name="password"
            type="password"
            value={signupData.password}
            onChange={handleSignupForm}
            onKeyPress={handleKeyPress}
          />
          <FormElement
            placeholder="Confirmação de Senha"
            name="passwordConfirmation"
            type="password"
            value={signupData.passwordConfirmation}
            onChange={handleSignupForm}
            onKeyPress={handleKeyPress}
          />
        </form>
        <button type="submit" className="loginButton" onClick={sendData}>
          {" "}
          Criar conta{" "}
        </button>
      </div>
    </div>
  );
};

export default Signup;
