import { Item } from "./Item";

export const ItemList = ({ items }) => {
    return (
        <>
            <ul className="itemList d-flex">
                {
                    items.map(item => {
                        return <Item key={item.id} item={item} />
                    })
                }
            </ul>

        </>
    )
}
