// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super()

    this.state = {
      timesClicked: 0
    }

  }

  increment = () => {
    console.log(this.state.timesClicked)
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.increment}>Click Me</button>
        <label>{this.state.timesClicked}</label>
      </div>
    )
  }

}

export default DigitalClicker;
