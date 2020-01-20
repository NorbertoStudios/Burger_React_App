import React from "react";

import classes from "./Burger.module.css";
import BurgerIngridient from "./Burger-Ingredient/BurgerIngredients";

const burger = props => {
  // Key return an array so we can use maps --- as Strings
  let transformIngridients = Object.keys(props.ingredients)
  .map(igKey => {
      // spread operator ... create another array with the length of the value assaing to the ingredient
      return [...Array(props.ingredients[igKey])]
      .map((_,i) =>{
        return <BurgerIngridient key={igKey + i} type={igKey}/>;
      })
      // .reduce transfom an arrays to something else it takes two arguments (previus-value, current-value)
      // Flatent the Array
  })
  .reduce((arr, el) =>{
    return arr.concat(el)
  },[]);

  //
  if(transformIngridients.length === 0){
      transformIngridients = <p>Please Start adding Ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformIngridients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
