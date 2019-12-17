import React from 'react';
import classes from './MenuToggle.module.css';

const MenuToggle = ({ isOpen, handleMenuOpen }) => {

    const cls = [
        classes.MenuToggle,
        isOpen ? classes.ToggleOpen : null
    ]

    return (
        <div className={cls.join(' ')} onClick={handleMenuOpen}>
            {isOpen ? 'Close' : 'Menu'}
        </div>
    )
}

export default MenuToggle;


