import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: string;
        title: string;
        price: number;
    }>
}

export function SearchResults({results}){
    return (
        <div>
            {   results.map(result => {
                return (
                    <ProductItem product={result} key={result.id}/>
                )
            })}
        </div>
    )
}