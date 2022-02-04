import { PropsProductCardHOC } from '../interfaces/interfaces';

import { ProductButton } from './ProductButton';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCard as ProductCardHOC } from './ProductCard';

export { ProductButton } from './ProductButton';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: PropsProductCardHOC =
	Object.assign(ProductCardHOC, {
		Buttons: ProductButton,
		Image: ProductImage,
		Title: ProductTitle,
	});

export default ProductCard;
