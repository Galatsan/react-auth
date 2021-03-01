import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import PasswordModel from "../../models/passwordModel";
import './password.css'
const eye = <FontAwesomeIcon icon={faEye} />;

export default class Password extends Component<PasswordModel>{

    render() {
        return (
            <div>
                <label className="labelTitle">{this.props.title}</label>

                <div className="pass-wrapper">
                    <input
                    className={this.props.errors.password && this.props.errors.password.message ? 'red-border' : ''}
                    name={this.props.name}
                    type={this.props.passwordShown ? "text" : "password"}
                    ref={this.props.register({
                        required: "Password is required",
                        minLength: {
                        value: 6,
                        message: "Password is too short"
                        }
                    })}
                    />
                    <i onClick={this.props.togglePasswordVisiblity}>{eye}</i>
                </div>

                <label className="error">
                    {this.props.errors.password && this.props.errors.password.message}
                </label>
            </div>
        );
    }

}