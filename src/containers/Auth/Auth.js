import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {
    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>
                    <form>
                        <Input label='Email' />
                        <Input label='Password' />
                        <Button onClick={this.loginHandler}>Log In</Button>
                        <Button onClick={this.registrationHandler}>Sign In</Button>
                    </form>
                </div>
            </div>
        )
    }
}
