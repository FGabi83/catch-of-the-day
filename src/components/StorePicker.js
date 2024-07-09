import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    //get the text from the input
    const storeName = this.myInput.current.value;
    //change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`); //this is a prop that is passed down from the Router because it is a child of the Router
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/> 
        <button tyoe="submit">Visit Store →</button>
      </form> 
    )  
   }
  }

export default StorePicker;