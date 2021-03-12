import { Component } from "react";
import EmailModel from "../../models/emailModel";

export default class Email extends Component<EmailModel>{

    render() {
        return (
            <div>
                <div className="labelTitle">
                    <label>Email</label>
                </div>

                <input
                    className={this.props.errors && this.props.errors ? 'red-border' : ''}
                    name={this.props.name}
                    type="text"
                    placeholder={this.props.placeholder}
                    ref={this.props.validationRules()}
                />


                {this.props.errors ? <div className="error"><label >{this.props.errors}</label></div> : null}

            </div>
        );
    }

}

const [inputType, setInputType] = useState('password')
<Input
    type={inputType}
    label="string"
    value="value"
    onChange={() => {}}
    icon={<Icon
        onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')} />}
    error={sting | undefined} />

    <Input type="email" value={email} onChange={setEmail} />