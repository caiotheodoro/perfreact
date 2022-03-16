import { memo } from 'react';

interface ProductItemProps {
  product:{
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
}
onAddToWishList: (id: number) => void;
}
function ProductItemComponent({product, onAddToWishList}: ProductItemProps) {
  return (
    <div >
        {product.title} -{product.priceFormatted}
        <button onClick={(e) => onAddToWishList(product.id)}>
          Adicionar a Lista desejos
        </button>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => { 
  return Object.is(prevProps.product,nextProps.product);
});