import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';

describe('it', () => {
  it('should render correcly', () => {
    const wrapper = renderer.create(
      <ProductCard
        product={{
          id: '1',
          title: 'Product 1',
        }}
      >
        {() => (
          <ProductImage img="https://pps.whatsapp.net/v/t61.24694-24/236690053_424819545992935_4236778729403962088_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVym6SKAoAn50w0yvVlWhnq_fj6DNkHLbKQ2B9RZQyS6rQ&oe=62C0B48B" />
        )}
      </ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correcly without image', () => {
    const wrapper = renderer.create(
      <ProductCard
        product={{
          id: '1',
          title: 'Product 1',
          img: 'https://pps.whatsapp.net',
        }}
      >
        {() => <ProductImage />}
      </ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
