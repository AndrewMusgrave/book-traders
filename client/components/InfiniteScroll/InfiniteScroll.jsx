import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { EventListener } from '../../components';

//has more
//distance before bottom

// load more ? call back when bottom of page

class InfiniteScroll extends React.Component {
  setNode = node => {
    this.node = node;
    console.log(this.node);
  };

  handleScroll = () => {
    console.log('scroll');
    const { container } = this.props;
    const element = container;
    // const offset =
    //   el.scrollHeight -
    //   el.parentNode.scrollTop -
    //   el.parentNode.clientHeight;
    if (
      element.scrollHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight <
      0
    ) {
      console.log('bottom');
    }
  };
  render() {
    const { container, children, loader } = this.props;
    console.log(container);

    if (!container) {
      return null;
    }

    return (
      <>
        <EventListener
          event="mousewheel"
          handler={this.handleScroll}
        />
        <EventListener
          event="scroll"
          handler={this.handleScroll}
        />
        <EventListener
          event="resize"
          handler={this.handleScroll}
        />
        {children}
      </>
    );
  }
}

export default InfiniteScroll;
