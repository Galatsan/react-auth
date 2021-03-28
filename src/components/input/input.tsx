import React from 'react'
import './input.css'

type Props = {
    type: string
    value?: string
    name: string
    placeholder?: string
    title: string
    icon?: JSX.Element | undefined
    errors?: string
    validationRules?: () => any,
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
                    ref={validationRules && validationRules()}
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

/*const [inputType, setInputType] = useState('password')
<Input
    type={inputType}
    label="string"
    value="value"
    onChange={() => {}}
    icon={<Icon
        onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')} />}
    error={sting | undefined} />

    <Input type="email" value={email} onChange={setEmail} />*/