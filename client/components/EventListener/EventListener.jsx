import React, { PureComponent } from 'react';

class EventListener extends PureComponent {
  componentDidMount() {
    this.addListener();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  componentDidUpdate() {
    this.addListener();
  }

  componentWillUpdate() {
    this.removeListener();
  }

  addListener() {
    const { node = window, event, handler } = this.props;
    if (node) {
      node.addEventListener(event, handler);
    }
  }

  removeListener() {
    const { node = window, event, handler } = this.props;
    if (node) {
      node.removeEventListener(event, handler);
    }
  }

  render() {
    return null;
  }
}

export default EventListener;
