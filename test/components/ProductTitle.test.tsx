import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components';

describe('it', () => {
  it('should render correcly', () => {
    const wrapper = renderer.create(<ProductTitle title="Hola mundo" />);
    expect(wrapper).toMatchSnapshot();
  });
});
