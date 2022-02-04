import React from 'react';
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ReactElement } from 'react';

import {
  IntialValues,
  OnChangeArgs,
  Product,
  ProductCardHandlers,
  PropsProductContext,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as PropsProductContext);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (arg: OnChangeArgs) => void;
  value?: number;
  intialValues: IntialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  intialValues,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    intialValues,
  });
  // console.log(styles);
  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,

          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
