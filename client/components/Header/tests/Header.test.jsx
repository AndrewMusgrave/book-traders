import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('<Header />', () => {
  it('renders children', () => {
    const header = shallow(<div>Test</div>);
    expect(header.text()).toBe('Test');
  });
});
