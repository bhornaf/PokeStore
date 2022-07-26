import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getPokemonByType } from "../api/pokemon";

const ItemListContainer = (props) => {
    const { type } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const pokemon = getPokemonByType(type ? type : "ghost");
        pokemon.then((data) => {
            setItems(data);
        });
        setLoading(false);
    }, [type]);
    return (
        <> {loading ? <div>Loading...</div> : <ItemList items={items} />} </>
    );
};
export default ItemListContainer;
