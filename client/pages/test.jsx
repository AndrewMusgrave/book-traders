import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import { Container, Modal } from '../components';
import { connect } from 'react-redux';

function Test() {
  return (
    <Container.Sub>
      <Modal>
        <Modal.Section>Hlelo</Modal.Section>
      </Modal>
    </Container.Sub>
  );
}

export default Test;
