import "../../styles/styles.css";
import "./auth-page.css";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useAuth} from '../../context/authContext'
import { useNavigate } from 'react-router';
import {checkPasswordExp, checkPasswordMatch} from './utility.jsx';

function SignupPage(){
  let navigate = useNavigate();

  const [signupForm, setSignupForm]= useState({
    'firstName': "",
    'lastName': "",
    'email': "",
    'password': "",
    'password2': "",
    'submitBtn': "",
    'error-msg': ""
  });

const {setToken,setUser}= useAuth();
const [errorMsg, setErrorMsg]= useState("");

const formChangeHandler=(event)=>setSignupForm({...signupForm, [event.target.name] : event.target.value})

const passwordValidation =(event)=>{
  console.log(event.target.value, signupForm.password2)
  if(!checkPasswordMatch(event.target.value, signupForm.password2)){
    setErrorMsg(()=>"Password does not match");
    setTimeout(() => setErrorMsg(() =>""), 2000);
  }
}

async function signupUser(event){
  event.preventDefault();
  if(checkPasswordExp(signupForm.password)){
    try{
      const response= await axios.post(`/api/auth/signup`, JSON.stringify({
        email: signupForm.email, password:signupForm.password, firstName: signupForm.firstName, lastName:signupForm.lastName
      }));
    localStorage.setItem("authToken", response.data.encodedToken);
    setToken(()=>response.data.encodedToken)
    setUser(()=>({email: response.data.email}))
    console.log(response)
    setErrorMsg(()=>"success")
    navigate('/');
  }catch(error){
    setErrorMsg(()=>error.message)
    setTimeout(() => setErrorMsg(() =>""), 4000);
  }
  }else{
    setErrorMsg(()=>"Password is too weak, It should be atleast 8 characters long, have atleast 1 upper case and special character");
    setTimeout(() => setErrorMsg(() =>""), 4000);
  }

}


  return (
    <section className="auth-page-container container fl-center">
        <article className="card card-shadow">
          <div className="background">
            <img src="https://picsum.photos/id/168/800/600?grayscale" className="img-responsive" alt=""></img>
          </div>
          <div className="card-content stacked fl-center">
            <div className="auth-page-head">
              <button className="btn btn-float primary f-m"><FontAwesomeIcon icon={faArrowLeft} /></button>
                <h2 className="center primary-col f-xl fw-li">Sign Up</h2>
                <button className="btn btn-float primary f-m"><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>

            <form onChange={(event)=>formChangeHandler(event)}  onSubmit={(event)=>signupUser(event)} className="auth-page-form white-trans-bg">
            <div >
              <div className="card-content inline ">
                <div className="input-container primary-col">
                  <input placeholder=" " name="firstName" className="input primary-col w-m  f-m" type="text" required></input>
                  <label className="input-label  f-m fw-li">First Name</label>
                </div>
                <div className="input-container primary-col ">
                  <input placeholder=" " name="lastName" className="input w-m  f-m primary-col" type="text" required></input>
                  <label className="input-label  f-m fw-li">Last Name</label>
                </div>
              </div>
              <div className="input-container primary-col ">
                <input placeholder=" " name="email" className="input w-l f-m primary-col" type="email" required></input>
                <label className="input-label  f-m fw-li">Email</label>
              </div>
              <div className="input-container primary-col ">
                <input placeholder=" " name="password" className="input w-l  f-m primary-col" type="password" required></input>
                <label className="input-label  f-m fw-li">Password</label>
              </div>
              <div className="input-container primary-col ">
                <input placeholder=" " name="password2" className="input w-l  f-m primary-col" type="password" required onChange={(event)=>passwordValidation(event)}></input>
                <label className="input-label  f-m fw-li">Re-enter Password</label>
              </div>
              <div className="auth-btn-container">
                <input type="submit" name="submitBtn" className="btn f-s primary" value="signup" ></input>
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


export {SignupPage}
