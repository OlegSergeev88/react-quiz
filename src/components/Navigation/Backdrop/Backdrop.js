import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({ handleMenuOpen }) => {

    return (
        <div
            onClick={handleMenuOpen}
            className={classes.BackDrop}>

        </div>
    )
}

export default Backdrop;