import React, { useEffect } from 'react';

import { FaLock, FaEnvelope } from "react-icons/fa";
import FormField from "../FormField/FormField";


const LoginForm = (props) => {


    useEffect(() => {
        if(props.error){
            props.clearError();
        }
    },[props.email, props.password]) // eslint-disable-line react-hooks/exhaustive-deps
   
    return(
        <React.Fragment>
            <form onSubmit={ props.onSubmit } className="form__login">

                <div className="row mb-0">
                    <div className="heading">
                        <h3 className="tertiary__heading">Log into your account </h3> 
                        <div className="underline"></div> 
                    </div>
                </div>

                <FormField className="form__input" error={props.error} placeholder="Email address" id="email" name="email" label="email" value={props.email} onChange={props.onChange}>
                    <FaEnvelope/>
                </FormField>

                <FormField type="password" className="form__input" error={props.error} placeholder="Password" id="password" name="password" label="password" value={props.password} onChange={props.onChange}>
                    <FaLock/>
                </FormField>

                <FormField className="btn btn__secondary mt-md" error={props.error} name="login" value="Login" type="submit" onChange={props.onChange}/>

                
            </form>

        </React.Fragment> 


    )
}

export default LoginForm;