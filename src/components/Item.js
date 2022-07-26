import { Link } from "react-router-dom";
import { getPokemonByName } from "../api/pokemon";
import { useEffect, useState } from "react";

const Item = ({ item }) => {
    const { name, url } = item;
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        getPokemonByName(item.name).then((data) => {
            setPokemon(data);
        });
    }, [item.name]);
    return (
        <>
            {pokemon ? (
                <div className="col-md-3 mt-3">
                    <div className="card poke-card text-center">
                        <img
                            className="card-img-top"
                            src={pokemon.sprites.front_default}
                            alt={name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {pokemon.name.toUpperCase()}
                            </h5>
                            <Link
                                className="d-block"
                                to={`/pokemon/${pokemon.name}`}
                            >
                                <div className="d-grid gap-2">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        View
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};
export default Item;
