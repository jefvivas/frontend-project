import { useNavigate } from "react-router-dom";

function Hello() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", false);
    localStorage.setItem("user", "");
    navigate("/");
  };

  return (
    
    localStorage.getItem('token')==='true' && localStorage.getItem('user')!==''?
    
    <div>
      {console.log(localStorage.getItem('user')==='')}
      <h1>Hello, {localStorage.getItem("user")}</h1>
      <button onClick={logout}>logout</button>
    </div>:
    <div>
      <h1>Faça login com alguma conta</h1>
    </div>
  );
}

export default Hello;
