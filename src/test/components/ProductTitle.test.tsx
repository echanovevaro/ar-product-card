import React from 'react';

import TestRenderer from 'react-test-renderer';

import { ProductCard, ProductTitle } from '../../components';
import { product1 } from '../data/product.';

describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const testRenderer = TestRenderer.create(
      <ProductTitle title="Titulo personalizado" />
    );

    console.log(testRenderer.toJSON());

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente correctamente con el titulo del producto', () => {
    const testRenderer = TestRenderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    console.log(testRenderer.toJSON());

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
