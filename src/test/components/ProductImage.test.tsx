import React from 'react';

import TestRenderer from 'react-test-renderer';

import { ProductCard, ProductImage } from '../../components';
import { product2 } from '../data/product.';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente con la imagen personalizada', () => {
    const testRenderer = TestRenderer.create(
      <ProductImage img="https://googleapis.jpg/" />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente correctamente con la imagen del producto', () => {
    const testRenderer = TestRenderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
