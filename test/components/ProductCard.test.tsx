import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';

describe('it', () => {
  it('should render correcly', () => {
    const wrapper = renderer.create(
      <ProductCard
        product={{
          id: '1',
          title: 'Product 1',
        }}
      >
        {() => <div>Hola mundo</div>}
      </ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
