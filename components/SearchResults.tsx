import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: string;
        title: string;
        price: number;
    }>
}

export function SearchResults({results}: SearchResultsProps){
    const totalPrice = results.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div>
            <h2>Results</h2>
            <p>Total Price: {totalPrice}</p>
            {   results.map(result => {
                return (
                    <ProductItem product={result} key={result.id}/>
                )
            })}
        </div>
    )
}