# product card component of react pro course

## Luis Melendez

# Ejemplo

```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from "";
```

```
            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 6,
                    // maxCount: 10,
                }}
            >
                {({
                    reset,
                    count,
                    isMaxCountReached,
                    maxCount,
                    increaseBy,
                }) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )}
            </ProductCard>
```
