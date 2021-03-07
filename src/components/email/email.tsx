import { Component } from "react";
import EmailModel from "../../models/emailModel";
import './email.css'

export default class Email extends Component<EmailModel>{

    render() {
        return (
            <div>
                <label className="labelTitle">Email</label>

                <input
                    className={this.props.errors && this.props.errors ? 'red-border' : ''}
                    name={this.props.name}
                    type="text"
                    placeholder="Enter your email"
                    ref={this.props.validationRules()}
                />

                {this.props.errors ?
                    <label className="error">{this.props.errors}</label> :
                    null}
            </div>
        );
    }

}