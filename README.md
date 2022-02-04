# AR-Product-card

Este es un paquete de pruebas de despiegue en NPM

### Alvaro Riaño

## Ejemplo

```
import {
	ProductButton,
	ProductImage,
	ProductTitle,
	ProductCard,
} from 'ar-product-card';
```

```
			<ProductCard
				product={product}
				intialValues={{
					count: 4,
					maxCount: 10,
				}}>
				{({
					reset,
					increaseBy,
					isMaxCountReached,
					count,
					maxCount,
				}) => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButton />
					</>
				)}
			</ProductCard>

```
