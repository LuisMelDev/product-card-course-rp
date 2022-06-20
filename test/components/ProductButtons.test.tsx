import React from 'react';
import renderer from 'react-test-renderer';
import { ProductButtons } from '../../src/components';

describe('it', () => {
  it('should render correcly', () => {
    const wrapper = renderer.create(<ProductButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
