import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from '../../styles/Login.module.css'

export default function(){
    const router = useRouter()
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
 
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
      
        resetEmail();
        resetPassword();
        if(email=="jobran41@gmail.com"&&password==123456){
            router.push("/home-page")
            return 
        }
        alert(`Email ${email} or ${password} is faild`);
    }

    return (
        <div className="container bg-white mt-5">
            <div className="row pt-3">
                <div className="col">
                <h2 className="text-warning font-weight-bold">
                    Pets4Homes Account Login
                </h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <hr className="w-100 px-0 border" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                Sign-in to Pets4Homes using your login details below.
                </div>
            </div>
            <div className="row my-5">
                <form className="col-8 col-md-6 mx-auto"  onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <input
                            className="input-field w-100 p-3 border border-right-0 rounded-left"
                            type="email"
                            placeholder="Email Adress"
                            name="email"
                            {...bindEmail}
                        />
                        <i
                        className="fa fa-envelope d-flex align-items-center align-self-stretch fa-2x p-2 text-warning border border-left-0 rounded-right"
                        ></i>
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                        className="input-field w-100 p-3 border border-right-0 rounded-left"
                        type="password"
                        placeholder="Password"
                        name="psw"
                        {...bindPassword}
                        />
                        <i
                        className="fa fa-key d-flex align-items-center align-self-stretch fa-2x p-2 text-warning border border-left-0 rounded-right"
                        ></i>
                    </div>

                    <div className="form-check ml-3">
                        <label htmlFor="RememberMe" className="form-check-label">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            className="form-check-input"
                            value=""
                        />Remember Me
                        </label>
                    </div>
                    
                    <button
                        type="submit"
                        className="btn btn-block btn-info font-weight-bold mt-3"
                    >
                        Login
                    </button>
                    <div className="mt-3 text-center my-4">
                        Not registered yet?
                    </div>
                    <button
                        type="submit"
                        className="btn btn-block btn-warning mt-3 text-white font-weight-bold"
                    >
                        Create Account
                    </button>
                </form>
            </div>
            <div className="row">
                <div className="col mt-5">
                <p className="font-weight-bold">
                    Having Problems logging in or activating your account?
                </p>
                <p className="my-4">
                    Forgot your Password? Then try
                    <a href="#">Requesting a New Password</a>
                </p>
                <p className="my-4">
                    Not received an activation email?
                    <a href="#">Request New Email Activation</a>
                </p>
                <p className="font-weight-bold my-4">
                    Not receiving any email from us? Check your emails Junk/Trash
                    folders. Also, please view our <a href="#">FAQs Page</a> which will
                    give you details on how to add our email address to your emails
                    address book so you always receive our emails.
                </p>
                </div>
            </div>
        </div>
    )
}

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    return {
      value,
      setValue,
      reset: () => setValue(""),
      bind: {
        value,
        onChange: event => {
          setValue(event.target.value);
        }
      }
    };
  };