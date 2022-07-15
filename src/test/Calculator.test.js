import React from 'react';
import TestRenderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
