import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "../input/input"
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignUn() {
  const { register, handleSubmit, errors, getValues } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
    setSingInDisabled(true)
  };

  const [singInDisabled, setSingInDisabled] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [resetPassword, setResetPassword] = useState('')

  const [passwordInputType, setPasswordInputType] = useState('password')
  const [resetPasswordInputType, setResetPasswordInputType] = useState('password')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signUp">
      <fieldset disabled={singInDisabled}>
        <Input
          value={email}
          onChange={setEmail}
          title="Email"
          inputType="text"
          name="email"
          placeholder="Enter your email"
          errors={errors && errors.email && errors.email.message}
          validationRules={() => register({
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email is invalid"
            }
          })} />

        <Input
          value={password}
          onChange={setPassword}
          inputType={passwordInputType}
          name="password"
          title="Password"
          placeholder="Enter your password"
          errors={errors && errors.password && errors.password.message}
          icon={<FontAwesomeIcon icon={faEye} className="eye" onClick={() => setResetPasswordInputType(passwordInputType === 'password' ? 'text' : 'password')} />}
          validationRules={() => register({
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password is too short"
            }
          })} />

        <Input
          value={resetPassword}
          onChange={setResetPassword}
          inputType={resetPasswordInputType}
          name="resetPassword"
          title="Reset password"
          placeholder="Enter your password again"
          errors={errors && errors.resetPassword && errors.resetPassword.message}
          icon={<FontAwesomeIcon icon={faEye} className="eye" onClick={() => setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password')} />}
          validationRules={() => register({
            validate: (value) => { return value !== getValues().password ? "Password doesn't match" : true },
            required: "Reset password is required",
            minLength: {
              value: 6,
              message: "Password is too short"
            }
          })} />


        <button type="submit" className="submit">Sign Up</button>
      </fieldset>

    </form >
  );
}