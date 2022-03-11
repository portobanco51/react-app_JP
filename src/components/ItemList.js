import { Item } from "./Item";

export const ItemList = ({ items }) => {
    return (
        <>
            <ul className="itemList">
                {
                    items.map(item => {
                        return <Item key={item.id.toString()} item={item} />
                    })
                }
            </ul>

        </>
    )
}
