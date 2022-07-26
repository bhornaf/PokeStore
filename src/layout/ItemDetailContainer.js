import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getPokemonByName } from "../api/pokemon";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name } = useParams();

    useEffect(() => {
        setLoading(true);
        const pokemon = getPokemonByName(name);
        pokemon.then((data) => {
            setItem(data);
            setLoading(false);
        });
    }, [name]);

    return (
        <>
            <div className="container">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="row">
                        <div className="col-md-12">
                            <ItemDetail item={item} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
export default ItemDetailContainer;
