import React from 'react'
import './input.css'

type Props = {
    inputType: string
    value: any
    name: string
    placeholder?: string
    title: string
    icon?: JSX.Element | undefined
    errors: string | undefined
    validationRules: () => any,
    onChange: (value: string) => void
}

const Input: React.FC<Props> = ({
    inputType,
    errors,
    placeholder,
    title,
    value,
    name,
    icon,
    validationRules,
    onChange
}) => (
    <div>
        <div className="labelTitle">
            <label>{title}</label>
        </div>

        <div className="wrapper">
            <input
                placeholder={placeholder}
                className={errors ? 'red-border' : ''}
                name={name}
                value={value}
                type={inputType}
                ref={validationRules()}
                onChange={e => onChange(e.target.value)}
            />
            {icon ? <i>{icon}</i> : null}
        </div>

        {errors ?
            <div className="error"><label>
                {errors}
            </label></div> : null}
    </div>
)


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