import React, { useEffect} from 'react';

import { FaLock, FaEnvelope, FaUser } from "react-icons/fa";
import FormField from "../FormField/FormField";


const RegisterForm = (props) => {


    useEffect(() => {
        if(props.error){
            props.clearError();
        }
    },[props.email, props.password])// eslint-disable-line react-hooks/exhaustive-deps
   
    return(
        <React.Fragment>
            <form onSubmit={ props.onSubmit } className="form__login">

                <div className="row mb-0">
                    <div className="heading">
                        <h3 className="tertiary__heading">Create an account</h3> 
                        <div className="underline"></div> 
                    </div>
                </div>

                <div>
                    <p>Sign up as:</p>
                    <select name="role" className="form__input mb-4" onChange={props.onChange('role')} >
                        <option value="none">select a role</option>
                        <option value="renter">Renter</option>
                        <option value="lender">Lender</option>
                    </select>
                </div>

                <FormField className="form__input" error={props.error} placeholder="Username" id="username" name="username" label="username" value={props.username} onChange={props.onChange}>
                    <FaUser/>
                </FormField>

                <FormField className="form__input" error={props.error} placeholder="Email address" id="email" name="email" label="email" value={props.email} onChange={props.onChange}>
                    <FaEnvelope/>
                </FormField>

                <FormField type="password" className="form__input" error={props.error} placeholder="Password" id="password" name="password" label="password" value={props.password} onChange={props.onChange}>
                    <FaLock/>
                </FormField>

                <FormField type="password" className="form__input" error={props.error} placeholder="Confirm password" id="passwordConfirm" name="passwordConfirm" label="Confirm password" value={props.passwordConfirm} onChange={props.onChange}>
                    <FaLock/>
                </FormField>

                <FormField className="btn btn__secondary" error={props.error} name="register" value="Register" type="submit" onChange={props.onChange}/>


                {/* <div className="form__option">
                    <span className="line"></span>
                    <span className="form__option--text">OR</span>
                    <span className="line"></span>
                </div>

                <FormField className="btn btn__google mt-md" error={props.error} name="login" value="Sign in with google" type="submit" onChange={props.onChange}/> */}
            </form>

        </React.Fragment> 


    )
}

export default RegisterForm;