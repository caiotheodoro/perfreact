export interface AddProductToWishListProps {
    onAddToWishList: () => void;
    onRequestClose: () => void;
}

export function AddProductToWishList({
    onAddToWishList,
    onRequestClose
}: AddProductToWishListProps){
    return (
        <span>
            Deseja adicionar as favoritos?
            <button onClick={onAddToWishList}>Sim</button>
            <button onClick={onRequestClose}>Não</button>

        </span>
    )

}