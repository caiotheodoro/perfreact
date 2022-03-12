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
        <h1>{product.title}</h1> -  <p>{product.price}</p>
      

    </div>
  );
}