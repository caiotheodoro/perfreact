import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        title: string;
        price: number;
        priceFormatted: string;
    }>
    onAddToWishList: (id: number) => void;
    totalPrice: number;
}

export function SearchResults({results, totalPrice, onAddToWishList}: SearchResultsProps){

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