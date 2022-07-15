import React from 'react';
import TestRenderer from 'react-test-renderer';
import Home from '../components/Home';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
