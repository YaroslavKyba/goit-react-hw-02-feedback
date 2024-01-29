import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  render() {
    const keys = Object.keys(this.state);

    return (
      <div>
        <p>Please leave feedback</p>
        {keys?.map(key => {
          return (
            <button onClick={this.handleClick}>{key.toUpperCase()}</button>
          );
        })}
        <p>Statistics</p>
        <p>
          Good:{this.state.good} Neutral: {this.state.neutral} Bad:
          {this.state.bad}
        </p>
      </div>
    );
  }
}
