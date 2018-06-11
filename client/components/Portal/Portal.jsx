import * as React from 'react';
import ReactDOM from 'react-dom';

function createUniqueID() {
  let i = 1;
  return () => `portal-${i}`;
}

function Portal({
  children,
  id = createUniqueID(),
  element = 'div',
}) {
  let node = document.getElementById(id);
  if (!node) {
    node = document.createElement(element);
    node.id = id;
    document.body.appendChild(node);
  }

  return ReactDOM.createPortal(children, node);
}

export default Portal;
