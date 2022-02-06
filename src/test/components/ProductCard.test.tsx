import React from 'react';

import TestRenderer from 'react-test-renderer';

import { ProductCard } from '../../components';
import { product1 } from '../data/product.';

const { act } = TestRenderer;

describe('ProductCard', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const testRenderer = TestRenderer.create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    console.log(testRenderer.toJSON());

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  test('Debe incrementar el contador', () => {
    const testRenderer = TestRenderer.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );
    let tree = testRenderer.toJSON();
    console.log(tree);
    act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = testRenderer.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
