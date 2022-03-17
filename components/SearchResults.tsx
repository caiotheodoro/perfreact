
import { List,  ListRowRenderer } from 'react-virtualized'
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
    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem 
                    product={results[index]}
                    onAddToWishList={onAddToWishList}
                  />
            </div>
        )
    }
    return (
        <div>
            <h2>Results</h2>
            <p>Total Price: {totalPrice}</p>

            <List
                height={300}
                rowWeight={30}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
                rowHeight={30}
                width={900}
            />

        </div>
    )
}