import React from 'react';
import { NavContext } from './';

function withContext(Component) {
  class WithContext extends React.Component {
    render() {
      return (
        <NavContext.Consumer>
          {context => (
            <Component {...this.props} context={context} />
          )}
        </NavContext.Consumer>
      );
    }
  }

  return WithContext;
}

export default withContext;
