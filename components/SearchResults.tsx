import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        title: string;
        price: number;
    }>
    onAddToWishList: (id: number) => void;
}

export function SearchResults({results,onAddToWishList}: SearchResultsProps){
    const totalPrice = useMemo(() => results.reduce((acc, curr) => acc + curr.price, 0), [results])

    return (
        <div>
            <h2>Results</h2>
            <p>Total Price: {totalPrice}</p>
            {   results.map(result => {
                return (
                    <ProductItem product={result} key={result.id} onAddToWishList={onAddToWishList}/>
                )
            })}
        </div>
    )
}