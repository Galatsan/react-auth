import { useForm } from "react-hook-form";
import './signUp.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import Email from "../email/email";
import Password from "../password/password";

export default function SignUn() {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
    setSingInDisabled(true)
  };

  const [passwordShown, setPasswordShown] = useState(false)

  const [singInDisabled, setSingInDisabled] = useState(false)

  const togglePasswordVisiblity = () => { setPasswordShown(!passwordShown) }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signUp">

      <Email
        name="email"
        errors={errors}
        register={() => register({
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email is invalid"
          }
        })} />

      <Password
        name="password"
        title="Password"
        errors={errors} passwordShown={passwordShown}
        register={() => register({
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password is too short"
          }
        })}
        togglePasswordVisiblity={togglePasswordVisiblity} />

      <Password
        name="resetPassword"
        title="Reset password"
        errors={errors}
        passwordShown={passwordShown}
        register={() => register({
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password is too short"
          }
        })}
        togglePasswordVisiblity={togglePasswordVisiblity} />


      <button type="submit" className="submit" disabled={singInDisabled}>Sign in</button>

    </form >
  );
}