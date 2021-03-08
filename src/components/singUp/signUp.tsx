import { useForm } from "react-hook-form";
import { useState } from "react";
import Email from "../email/email";
import Password from "../password/password";

export default function SignUn() {
  const { register, handleSubmit, errors, getValues } = useForm({
    defaultValues: {
      email: "",
      password: "",
      resetPassword: ""
    }
  })
  const onSubmit = (data: any) => {
    console.log(data)
    setSingInDisabled(true)
  };

  const [singInDisabled, setSingInDisabled] = useState(false)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signUp">
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
          key="password"
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

        <Password
          key="resetPassword"
          name="resetPassword"
          title="Reset password"
          placeholder="Enter your password again"
          errors={errors && errors.resetPassword && errors.resetPassword.message}
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