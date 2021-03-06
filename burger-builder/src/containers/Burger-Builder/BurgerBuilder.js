import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/Build-Controls/BuildControls";

class BurgerBuilder extends Component {

  
  state = {

    // The ingredient states need to match as string to BurgerIngredients switch statement strings
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients ={this.state.ingredients}/>
        <BuildControls/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
