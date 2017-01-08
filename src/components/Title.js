import React from 'react';

class Title extends React.Component {

  constructor() {
    super();
    this.state = { hidden: false };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hidden: !this.state.hidden });
    }, 650);
  }

  render() {
    const style = {
      color: '#268bd2',
      display: 'block',
      opacity: this.state.hidden ? '0' : '1',
      fontSize: 22,
      lineHeight: 3,
      textAlign: 'center',
      textTransform: 'uppercase',
    }

    return (
      <span
        style={style}
      >
        Web Developer
      </span>
    );
  }

}

export default Title;
