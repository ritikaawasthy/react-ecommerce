import "../../styles/styles.css";
import "./auth-page.css";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {useAuth} from '../../context/authContext';

function LoginPage(){
  let navigate=useNavigate();
  const [loginForm, setLoginForm]= useState({email:"", password:""})
  const [errorMsg, setErrorMsg]= useState("");
  const {setToken,setUser}= useAuth();

  const formChangeHandler=(event)=>setLoginForm({...loginForm, [event.target.name] : event.target.value});

  async function loginUser(event){
    event.preventDefault();
    try{
      const response= await axios.post(`/api/auth/login`, JSON.stringify({
        email: loginForm.email, password:loginForm.password
      }));
      navigate('/');
      setToken(()=>response.data.encodedToken)
      setUser(()=>({email: response.data.email}))
    }catch(error){
      console.log(error)
      setErrorMsg(()=>error.message)
      setTimeout(() => setErrorMsg(() =>""), 4000);
    }
  }
  return(
    <section className="auth-page-container container fl-center">
        <article className="card card-shadow">
          <div className="background">
            <img src="https://picsum.photos/id/168/800/600?grayscale" className="img-responsive" alt=""></img>
          </div>
          <div className="card-content stacked fl-center">
            <div className="auth-page-head">
              <button className="btn btn-float primary f-m"><FontAwesomeIcon icon={faArrowLeft} /></button>
                <h2 className="center primary-col f-xl fw-li">Login</h2>
                <button className="btn btn-float primary f-m"><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>

            <form onChange={(event)=>formChangeHandler(event)}  onSubmit={(event)=>loginUser(event)} className="auth-page-form-s white-trans-bg">
            <div >

              <div className="input-container primary-col ">
                <input placeholder=" " name="email" className="input w-l f-m primary-col" type="email" required></input>
                <label className="input-label  f-m fw-li">Email</label>
              </div>
              <div className="input-container primary-col ">
                <input placeholder=" " name="password" className="input w-l  f-m primary-col" type="password" required></input>
                <label className="input-label  f-m fw-li">Password</label>
              </div>
              <div className="auth-btn-container">
                <input type="submit" name="submitBtn" className="btn f-s primary" value="Login" ></input>
                <p className="fw-bb">{errorMsg}</p>
              </div>

            </div>

            </form>
            <div className="card-content inline end primary-col ">
              <i className="fa-brands fa-google  f-m"></i>
              <i className="fa-brands fa-facebook  f-m"></i>
              <i className="fa-brands fa-twitter  f-m"></i>
            </div>
          </div>

        </article>
    </section>
  );

}

export {LoginPage}
