import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import PasswordModel from "../../models/passwordModel";
const eye = <FontAwesomeIcon icon={faEye} />;

export default class Password extends Component<PasswordModel>{

    render() {
        return (
            <div>
                <div className="labelTitle">
                    <label>{this.props.title}</label>
                </div>

                <div className="pass-wrapper">
                    <input
                    placeholder={this.props.placeholder}
                    className={this.props.errors ? 'red-border' : ''}
                    name={this.props.name}
                    type={this.props.passwordShown ? "text" : "password"}
                    ref={this.props.validationRules({
                        required: "Password is required",
                        minLength: {
                        value: 6,
                        message: "Password is too short"
                        }
                    })}
                    />
                    <i onClick={this.props.togglePasswordVisiblity}>{eye}</i>
                </div>
                
                {this.props.errors ?
                    <div className="error"><label>
                        {this.props.errors}
                    </label></div> : null }
            </div>
        );
    }

}