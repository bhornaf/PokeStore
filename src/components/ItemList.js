import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row">
            {items.map((item) => (
                <Item key={item.name} item={item} />
            ))}
        </div>
    );
};
export default ItemList;
