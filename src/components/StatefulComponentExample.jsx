import React from 'react';

class StatefulComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState(state: (prevState) => {return{counter: prevState.counter + 1}});
  };

  render() {
    return (
      <div>
        <button>+</button>
        <span> {this.state.counter} </span>
        <button>-</button>
      </div>
    );
  }
}

export default StatefulComponentExample;
