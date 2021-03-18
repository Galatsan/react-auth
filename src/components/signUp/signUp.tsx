import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Input from "../input/input"
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// focused
// changed
// touched
// dirty

// <input
//   onChange={e => {
//     setChanged('email');
//     setValue('email', e.target.value)
//     setDirty('email', true)
//   }}
//   onFocus={() => {
//     setFocus('email', true);
//     setTouched('email', true)
//   }}
//   onBlur={() => setFocus('email', false)}
// />
export default function SignUp() {
  const { register, handleSubmit, errors, getValues, setValue } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
    setSingInDisabled(true)
  };

  const [singInDisabled, setSingInDisabled] = useState(false)
  const defaultValue = 'umer@gmail.com'
  console.log(errors)
  // const [valueMapper, setValueMapper] = useState(defaultValue)
  // useEffect(() => {
  //   setValue('email', valueMapper)
  // })



  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [resetPassword, setResetPassword] = useState('')

  const [passwordInputType, setPasswordInputType] = useState('password')
  const [resetPasswordInputType, setResetPasswordInputType] = useState('password')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signUp">
      <fieldset disabled={singInDisabled}>
        <Input
          defaultValue={defaultValue}
          title="Email"
          type="text"
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
          type={passwordInputType}
          name="password"
          title="Password"
          placeholder="Enter your password"
          errors={errors && errors.password && errors.password.message}
          icon={<FontAwesomeIcon icon={faEye} className="eye" onClick={() => setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password')} />}
          validationRules={() => register({
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password is too short"
            }
          })} />

        <Input
          type={resetPasswordInputType}
          name="resetPassword"
          title="Reset password"
          placeholder="Enter your password again"
          errors={errors && errors.resetPassword && errors.resetPassword.message}
          icon={<FontAwesomeIcon icon={faEye} className="eye" onClick={() => setResetPasswordInputType(resetPasswordInputType === 'password' ? 'text' : 'password')} />}
          validationRules={() => register({
            validate: (value) => { return value !== getValues().password ? "Password doesn't match" : true },
            required: "Reset password is required",
            minLength: {
              value: 6,
              message: "Password is too short"
            }
          })} />
        {/* <Input
          type="text"
          name="valueMapper"
          value={valueMapper}
          title="Value mapper"
          placeholder="Enter your email from here right to state"
          onChange={value => setValueMapper(value)} /> */}

        <button type="submit" className="submit">Sign Up</button> 
      </fieldset>

    </form >
  );
}