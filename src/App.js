import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      itemsClicked: [],
      items: null
    }
    
  }
  
  componentDidMount() {
    // fetch data from API
    // https://api.myjson.com/bins/imjn9
    fetch('https://api.myjson.com/bins/imjn9')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // Append the item array to state object
      this.setState({
        items: json
      })
    })
  };
  
  handleClick(e) {
    
    // Clone the array to try and keep state immutable.
    // Don't want to be changing it directly so we can
    // Create a copy and then do our changes there.
    const stateArray = this.state.itemsClicked.slice();
    
    // Check if state array includes a key with
    // player name corresponding to button clicked
    stateArray.includes(e.target.value) ? 
    // If it does, remove that element
    stateArray.splice(stateArray.indexOf(e.target.value), 1)  
    : 
    // If it doesn't then push that value to the array
    stateArray.push(e.target.value)
    // Either way the array is changed to reflect the
    // items clicked. This is then passed into state.
    this.setState({
      itemsClicked: stateArray
    })
  }
  
  
  displayItems(item) {
    
    // Grab the player and price to
    // make the code easier to understand.
    const { player, price } = item;
    
    
    // Return a div filled with the relevant
    // values.
    return (
      <div 
      key={player} 
      className="item-block">
      
      <p 
      key={player}>
      {player}</p>
      
      <button 
      onClick={(e)=> {
        this.handleClick(e)
      }}
      value={player}
      key={price}>{price}</button>
      
      </div>
    )
  }
  
  
  

  
  
  render() {
    
    // Using an if statement here prevents 
    // crashing as the app tries to render
    // data that it is yet to receive. 
    if (this.state.items !== null) {
      const { 
        itemsClicked, 
        items } = this.state;
        return (
          <div 
          className="App">
          <Counter 
          itemsClicked={itemsClicked}/>
      
          <div className="item-block-container">
          {items
            .players
            .map(this.displayItems.bind(this))}
            </div>
            
            </div>
    );
  } else {
    return (
      <div></div>
    )
  }
  }
}

export default App;
