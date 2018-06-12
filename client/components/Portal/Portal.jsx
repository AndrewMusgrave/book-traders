import * as React from 'react';
import ReactDOM from 'react-dom';

function createUniqueID(prefix) {
  let i = 1;
  return () => `${prefix}-${i}`;
}

// function Portal({
//   children,
//   id,
//   element = 'div',
//   prefix = 'portal',
// }) {
//   if (!id) {
//     id = createUniqueID(prefix);
//   }
//   let node = document.getElementById(id);
//   if (!node) {
//     node = document.createElement(element);
//     node.id = id;
//     document.body.appendChild(node);
//   }

//   return ReactDOM.createPortal(children, node);
// }

class Portal extends React.Component {
  render() {
    if (typeof window !== 'undefined') {
      const {
        children,
        id,
        element = 'div',
        prefix = 'portal',
      } = this.props;
      const uniqueID = createUniqueID(prefix);
      let newId;
      if (!id) {
        newId = uniqueID();
      }

      let node = document.getElementById(id);

      if (!node) {
        node = document.createElement(element);
        node.id = id || newId;
        document.body.appendChild(node);
      }

      return ReactDOM.createPortal(children, node);
    }
    return null;
  }
}

export default Portal;
