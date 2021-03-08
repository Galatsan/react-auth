import { useForm } from "react-hook-form";
import { useState } from "react";
import Email from "../email/email";
import Password from "../password/password";

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
    setSingInDisabled(true)
  };

  const [singInDisabled, setSingInDisabled] = useState(false)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signIn">
      <fieldset disabled={singInDisabled}>
      <Email
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

      <Password
        name="password"
        title="Password"
        placeholder="Enter your password"
        errors={errors && errors.password && errors.password.message}
        validationRules={() => register({
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password is too short"
          }
        })} />

      <button type="submit" className="submit">Sign In</button>
      </fieldset>

    </form >
  );
}