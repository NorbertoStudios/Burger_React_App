import React from 'react'

import classes from './Burger.module.css'
import BurgerIngridient from './Burger-Ingridient/BurgerIngridients'

const burger = (props) => {
    return (
        <div className={classes.Burger}>
        <BurgerIngridient type="bread-top"/>
        <BurgerIngridient type="cheese"/>
        <BurgerIngridient type="meat"/>
        <BurgerIngridient type="bread-bottom"/>
            
        </div>
    )
}

export default burger;