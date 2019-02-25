import React, { Component } from 'react';
import './App.css';
import ItemInput from './ItemInput';
import ClearList from './ClearList';
import ShoppingList from './ShoppingList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['first item', 'second item', 'third item'],
    };
  }
  render() {
    return (
     <>
       <ItemInput/>
       <ClearList/>
       <ShoppingList items={this.state.items}/>
       </>
    );
  }
}

export default App;
