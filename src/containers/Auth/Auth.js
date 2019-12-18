import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Email is not correct',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Password is not correct',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLenght: 6
                }
            }
        }
    }

    handleInputChange = (event, controlName) => {
        const res = event.target.value;


    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    value={control.value}
                    type={control.type}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    onChange={event => this.handleInputChange(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>
                    <form>
                        {this.renderInputs()}
                        <Button onClick={this.loginHandler}>Log In</Button>
                        <Button onClick={this.registrationHandler}>Sign In</Button>
                    </form>
                </div>
            </div>
        )
    }
}
