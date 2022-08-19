import Separador from "../../img/Separador.svg"
import FacebookLogo from "../../img/facebook-logo.png"
import GoogleLogo from "../../img/google-logo.png"
import GsLogo from "../../img/gs-logo.png"
import checkDone from "../../img/check.png"
import { useState } from "react";
import {Link} from 'react-router-dom';

const Register = () => {

const [name,setName] = useState ("");
const [email,setEmail] = useState ("");
const [pass,setPass] = useState ("");
const [doublePass,setDoublePass] = useState ("");

//const form = document.querySelector("[data-register-form]");

    const createUser = async (e) => {
       e.preventDefault();
       if(pass !== doublePass){
        console.log("contraseñas no coinciden");
       } else {
 
           try {
            const object = {
                username: name,
                email: email,
                password: pass,
            };    
               console.log(object)
            const response = await fetch("http://localhost:3001/auth/registro", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body:JSON.stringify(object),
            });
            const res = await response.json();
            showRegisterMessage();
            return res;
          } catch (error) {
        
            console.log(error);
          }
    }    
}
  
// FUNCION PARA REDIRECCIONAR AL LOGIN Y MOSTRAR MENSAJE DE ARRIBO CORREO
    
const showRegisterMessage = () =>{
    const message = document.querySelector("[data-message-container]")
    const cuerpo = document.querySelector("body");
    message.style.display = "block";
    message.style.height = `${cuerpo.clientHeight}px`;
    window.scrollTo(0,0)
    console.log(message);
}

return(
    <div className="login__container" data-register-container>
        <div className="login__logo-container">
            <img className="logo__item" src={GsLogo}/>
        </div>
        <h2 className="container__title">Creá tu <span>cuenta</span></h2>
        <form className="input__container" data-register-form>
            <input type="email" className="input-container__item"  placeholder="Correo electrónico" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <input type="text" className="input-container__item" id="user-input" placeholder="Nombre de usuario" value={name}  onChange={(e)=> setName(e.target.value)}required/>
            <input type="password" className="input-container__item" id="pass-input" placeholder="Contraseña" value={pass}  onChange={(e)=> setPass(e.target.value)} required/>
            <input type="password" className="input-container__item" id="second-pass-input" placeholder="Repetir contraseña" value={doublePass}  onChange={(e)=> setDoublePass(e.target.value)} required/>
            <button className="input-container__button" onClick={createUser}>Crear cuenta</button>
        </form>
        <img src={Separador} alt="" className="login__separador"/>
        <div className="redes__container">
            <div className="redes__img-container">
                <img src={FacebookLogo} alt="Facebook"  />
            </div>
            <div className="redes__img-container">
                <img src={GoogleLogo} alt="Google"  />
            </div>
        </div>
    
        <div className="message-container" data-message-container>
            <div className="message-container__box">
                <h4 className="message-container__title">¡Felicitaciones!</h4>
                <img className="message-container__img" src={checkDone}/>
                <h5 className="message-container__sub-title">Tu cuenta fue creada con exito.</h5>
                <p className="message-container__details">Enviamos un mail a tu correo</p>
                <Link to="/login" ><button className="message-container__button">Iniciar Sesion</button></Link>
            </div>
        </div>
    </div>
)

}
export default Register