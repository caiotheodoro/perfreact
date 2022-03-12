interface ProductItemProps {
  product:{
    id: string;
    title: string;
    price: number;
}
}
export function ProductItem({product}) {
  return (
    <div >
        {product.title} -{product.price}
    </div>
  );
}