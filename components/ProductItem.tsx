import dynamic from 'next/dynamic';
import { memo, useState } from 'react';
//import { AddProductToWishList } from './AddProductToWishList';
import { AddProductToWishListProps } from './AddProductToWishList';


const AddProductToWishList = dynamic<AddProductToWishListProps>(()=> {
  return import('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
  loading: () => <span>carregando...</span>
})



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
  const [isAddingToWishList,setIsAddingToWishList ] = useState(false)
  
  async function showFormattedDate (){
    const  {format } = await import("date-fns") 
  }

  return (
    <div >
        {product.title} -{product.priceFormatted}
        <button onClick={()=> setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
        { isAddingToWishList && 
        <AddProductToWishList 
        onAddToWishList={() => onAddToWishList(product.id)}
        onRequestClose={() => setIsAddingToWishList(false)}
        />
        }
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => { 
  return Object.is(prevProps.product,nextProps.product);
});