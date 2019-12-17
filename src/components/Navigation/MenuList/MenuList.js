import React from 'react';
import classes from './MenuList.module.css';
import { NavLink } from 'react-router-dom';



const MenuList = ({ handleMenuOpen }) => {

    const links = [
        { to: '/', label: 'Quiz list', exact: true },
        { to: '/quiz-creator', label: 'Create quiz', exact: false },
        { to: '/auth', label: 'Authorization', exact: false }
    ]

    return (
        <nav className={classes.MenuList}>
            <ul>
                {links.map((item, index) => {
                    return (
                        <li key={index} >
                            <NavLink to={item.to}
                                exact={item.exact}
                                onClick={handleMenuOpen}
                                activeClassName={classes.active}
                                className={classes.MenuListLink}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default MenuList;
