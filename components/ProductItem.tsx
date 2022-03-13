import { memo } from 'react';

interface ProductItemProps {
  product:{
    id: string;
    title: string;
    price: number;
}
}
function ProductItemComponent({product}: ProductItemProps) {
  return (
    <div >
        {product.title} -{product.price}
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => { 
  return Object.is(prevProps.product,nextProps.product);
});