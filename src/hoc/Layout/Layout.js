import React, { Component } from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Menu from "../../components/Navigation/Menu/Menu";


export default class Layout extends Component {

    state = {
        isOpen: false
    }

    handleMenuOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className={classes.Layout}>

                {isOpen ? <Menu
                    isOpen={isOpen}
                    handleMenuOpen={this.handleMenuOpen} /> :
                    null}
                <MenuToggle
                    handleMenuOpen={this.handleMenuOpen}
                    isOpen={isOpen}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
