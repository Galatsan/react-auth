import React from 'react'
import './Input.css'

type Props = {
    type: string
    value?: string
    name: string
    placeholder?: string
    title: string
    icon?: JSX.Element | undefined
    errors?: string
    validationRulesRef?: () => any,
    validationRules?: {
        required?: string,
        pattern?: {
            value: RegExp,
            message: string
        },
        minLength?: {
            value: number,
            message: string
        }
    }
    onChange?: (value: string) => void,
    defaultValue?: string
}

const Input: React.FC<Props> = ({
    type,
    errors,
    placeholder,
    title,
    value,
    name,
    icon,
    validationRulesRef,
    validationRules,
    onChange,
    defaultValue
}) => {
    const onInputChange = onChange ? (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value) : undefined
    return (
        <div>
            <div className="labelTitle">
                <label>{title}</label>
            </div>

            <div className="wrapper">
                <input
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    className={errors ? 'red-border' : ''}
                    name={name}
                    value={value}
                    type={type}
                    ref={validationRulesRef && validationRulesRef()}
                    onChange={onInputChange}
                />
                {icon ? <i>{icon}</i> : null}
            </div>

            {errors ?
                <div className="error"><label>
                    {errors}
                </label></div> : null}
        </div>
    )
}


export default Input
