import React from 'react';
import { ContextMenu } from './ContextMenu';

class StatefulComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // counter: 0,
      // open: false,
      // buttonCounter: 0,
      list: [],
      input: '',
    };
  }

  renderList = () => {
    return this.state.list.map((name, index) => (
      <>
        <li key={name + index}>{name}</li>
        <br />
      </>
    ));
  };

  handleInput = evt => {
    this.setState({ input: evt.target.value });
  };

  addItem = item => {
    this.setState({ list: [...this.state.list, item] });
  };

  // increment = () => {
  //   this.setState(prevState => {
  //     return { prevState, counter: prevState.counter + 1 };
  //   });
  // };

  // decrement = () => {
  //   this.setState(prevState => {
  //     if (prevState.counter === 0) {
  //       return {
  //         ...prevState,
  //       };
  //     }
  //     return { ...prevState, counter: prevState.counter - 1 };
  //   });
  // };

  // toggleMenu = () => {
  //   this.setState(prevState => {
  //     return { ...prevState, open: !prevState.open };
  //   });
  // };

  // plusplus = () => {
  //   this.setState(prev => {
  //     return { buttonCounter: prev.buttonCounter + 1 };
  //   });
  // };

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.input}
          />
          <button
            onClick={() => {
              this.addItem(this.state.input);
            }}
          >
            Add
          </button>
        </div>
        <ul>{this.renderList()}</ul>
        {/* <div>
          <button onClick={this.increment}>+</button>
          <span> {this.state.counter} </span>
          <button onClick={this.decrement}>-</button>
        </div>
        <div>
          <button
            onClick={() => {
              this.plusplus();
            }}
          >
            Push
            {this.state.buttonCounter}
          </button>
        </div>
        <div>
          {this.state.open && <ContextMenu>Hello FCK!</ContextMenu>}
          <button onClick={this.toggleMenu}>Toggle</button>
        </div> */}
      </>
    );
  }
}

export default StatefulComponentExample;
