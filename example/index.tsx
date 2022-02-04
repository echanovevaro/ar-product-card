import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButton, ProductImage, ProductTitle } from '../.';
const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        intialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButton />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
