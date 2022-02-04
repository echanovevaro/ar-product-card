import { useEffect, useRef, useState } from 'react';
import {
	IntialValues,
	OnChangeArgs,
	Product,
} from '../interfaces/interfaces';

interface useProductsArgs {
	product: Product;
	onChange?: (arg: OnChangeArgs) => void;
	value?: number;
	intialValues?: IntialValues;
}

export const useProduct = ({
	onChange,
	product,
	value = 0,
	intialValues,
}: useProductsArgs) => {
	const [counter, setCounter] = useState<number>(
		intialValues?.count || value,
	);

	const isMounted = useRef(false);

	const increaseBy = (value: number) => {
		let newValue = Math.max(counter + value, 0);
		if (intialValues?.maxCount) {
			newValue = Math.min(newValue, intialValues.maxCount);
		}

		// setCounter((pre) => Math.max(pre + value, 0));

		setCounter(newValue);
		onChange && onChange({ count: newValue, product });
	};

	const reset = () => {
		setCounter(intialValues?.count || value);
	};

	useEffect(() => {
		if (!isMounted.current) {
			return;
		}
		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		maxCount: intialValues?.maxCount,
		isMaxCountReached:
			!!intialValues?.count &&
			intialValues.maxCount === counter,

		increaseBy,
		reset,
	};
};
