import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import { Container, TextContainer } from '../components';
import { connect } from 'react-redux';

function Shipping() {
  return (
    <Container.Sub loose>
      <TextContainer>
        <h2>Shipping Policy</h2>
        <p>
          We don’t offer any shipping since this is not a
          real business.
        </p>
        <p>
          We cannot aim to dispatch our orders within 1
          business day from the time of order because we do
          not accept orders. Please allow an indefinite
          amount of time to receive your shipping
          confirmation and non-existent tracking
          information.
        </p>
        <h2>Customs, taxes, duties, and fees</h2>
        <p>
          If you are ordering from anywhere other than your
          current residence you may need to pay additional
          fees, including but not limited too: customs,
          taxes, and duties. You will be liable for all
          fees. They will be charged at but not limited too
          the point of delivery.
        </p>
        <p>
          Please be aware that Book Traders cannot control
          the fees being applied since we are not a real
          business. All fees will be levied by the country
          that is receiving your order. Please be advised
          these charges may vary because of this.
        </p>
        <p>
          If you are unsure of anything mentioned please
          feel free to contact Book Traders. But please be
          aware contacting your local customers office may
          be more beneficial. But worry not since this is
          not real.
        </p>
      </TextContainer>
    </Container.Sub>
  );
}

export default Shipping;
