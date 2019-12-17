import React from 'react';
import classes from './Menu.module.css';
import Backdrop from '../Backdrop/Backdrop';
import MenuList from '../MenuList/MenuList';



const Menu = ({ handleMenuOpen, isOpen }) => {
    return (
        <div className={classes.Menu}>

            <Backdrop isOpen={isOpen} handleMenuOpen={handleMenuOpen} />
            <MenuList handleMenuOpen={handleMenuOpen} />

        </div>
    )
}

export default Menu;
