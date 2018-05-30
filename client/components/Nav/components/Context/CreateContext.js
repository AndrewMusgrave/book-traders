import React, { Component, createContext } from 'react';

export const Context = createContext();

class NavProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.setToggle = this.setToggle.bind(this);
  }

  handleToggle() {
    this.setState(({ open }) => ({ open: !open }));
  }

  setToggle(open) {
    this.setState({ open });
  }

  render() {
    const { children } = this.props;
    const { open } = this.state;
    const value = {
      open,
      onToggle: this.handleToggle,
      setToggle: this.setToggle,
    };

    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    );
  }
}

export default NavProvider;
