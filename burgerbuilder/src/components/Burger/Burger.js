import React from "react";

import classes from "./Burger.module.css";
import BurgerIngridient from "./Burger-Ingredient/BurgerIngredients";

const burger = props => {
  // Key return an array so we can use maps --- as Strings
  const transformIngridients = Object.keys(props.ingredients)
  .map(igKey => {
      // spread operator ... create another array with the length of the value assaing to the ingredient
      return [...Array(props.ingredients[igKey])]
      .map((_,i) =>{
        return <BurgerIngridient key={igKey + i} type={igKey}/>;
      })
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformIngridients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
