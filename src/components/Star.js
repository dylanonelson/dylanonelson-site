import React from 'react';

const getRandomCoordinates = () => (Math.floor(Math.random() * 100));

class Star extends React.Component {

  constructor() {
    super();

    this.state = {
      x: -1,
      y: -1,
    };
  }

  componentDidMount() {
    const x = getRandomCoordinates();
    const y = getRandomCoordinates();

    this.setState({ x, y });
  }

  getStyle() {
    return {
      left: `${this.state.x}vw`,
      listStyle: 'none',
      opacity: '.75',
      position: 'absolute',
      top: `${this.state.y}vh`,
    }
  }

  render() {
    return (
      <li style={this.getStyle()}>*</li>
    )
  }

}

module.exports = Star;
