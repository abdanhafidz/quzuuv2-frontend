"use client"
import React from "react"
import loginStyle from "./style.module.css";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { FormEvent } from 'react'
import loginHandler from "./LoginHandler"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react'
const login = () => {
  const router = useRouter()
  const [loader,setLoader] = useState(<>Sign In</>)
  const loginRequest = async (event: FormEvent<HTMLFormElement>)=> {
    setLoader(<div className="lds-dual-ring"></div>)
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const res = await loginHandler(formData)
    .then((res:any)=>{
      setLoader(<>Sign In</>)
      if(res == "ok"){
        router.push("/app")
      }else{
        toast.error(<>
          <p className = "alert-font">
          Username atau Password yang anda gunakan tidak dapat ditemukan!
          </p>
          </>, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
          });
      }
    })
   
    
  }
  
  return (
    <div className="container">
      <div className={`${loginStyle["card-login"]} ${"card-quzuu"}`}>
        <div className="card-content">
          <div className="aligner">
            <img
              src="https://abdanhafidz.com/qb/_public/assets/quzzulogo.png"
              className="img-logo-login"
            />
            <p className="mgs-0">Login Your Account </p>
          </div>
          <form className={loginStyle["login-form"]} onSubmit={loginRequest}>
            
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Username</span>
              <input
                type="text"
                className={loginStyle["input-login"]}
                name="username"
                required
                placeholder="Enter your username"
                
              />
            </div>
            <div className={loginStyle["field-group"]}>
              <span className="t-800">Password</span>
              <input
                type="password"
                className={loginStyle["input-login"]}
                
                name="password"
                placeholder="Enter your password"
                required
              />
             
            </div>
            <div
              className={`${loginStyle["field-login-btn"]} ${loginStyle["field-group"]}`}
            >
               
              <button type="submit" className="btn btn-primary btn-block">
              {loader}
              </button>
              
            </div>
            <div className={`${"aligner"} ${loginStyle["field-group"]}`}>
              <Link
                href={{
                  pathname: "/register",
                }}
                className={loginStyle["register-link"]}
              >
                Create An Account
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
    
  );
};

export default login;
