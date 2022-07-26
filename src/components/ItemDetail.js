import { useState, useContext } from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { context } from "./CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const pokemon = item;
    const [count, setCount] = useState([]);
    const [normal, setNormal] = useState("normal");
    const result = useContext(context);

    const handleOnChange = (e) => {
        setNormal(e.target.value);
    };

    const onAdd = (count) => {
        result.addItem(item, count);
        setCount(count);
    };

    return (
        <div className="row">
            <h1 className="text-center">Poke Info</h1>
            <div className="col-md-3 mt-3 text-center border">
                <img
                    className="card-img-top img-fluid"
                    src={
                        normal === "normal"
                            ? pokemon.sprites.front_default
                            : pokemon.sprites.front_shiny
                    }
                    alt={pokemon.name}
                />
            </div>
            <div className="col-md-9 mt-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {pokemon.name.toUpperCase()}
                        </h5>
                        <p className="card-text ">
                            <strong className="me-3">Types:</strong>
                            {pokemon.types.map((type) => (
                                <button
                                    key={type.type.name}
                                    type="button"
                                    className="btn btn-info me-1"
                                >
                                    {type.type.name}
                                </button>
                            ))}
                        </p>
                        <p className="card-text">
                            <strong>Height:</strong> {pokemon.height}
                        </p>
                        <p className="card-text">
                            <strong>Weight:</strong> {pokemon.weight}
                        </p>
                        <p className="card-text">
                            <strong className="me-3">Abilities:</strong>
                            {pokemon.abilities.map((ability) => (
                                <button
                                    key={ability.ability.name}
                                    type="button"
                                    className="btn btn-secondary me-1"
                                >
                                    {ability.ability.name}
                                </button>
                            ))}
                        </p>
                        <p className="card-text">
                            <strong className="me-3"> Stats:</strong>
                            {pokemon.stats.map((stat) => (
                                <button
                                    key={stat.stat.name}
                                    type="button"
                                    className="btn btn-warning me-1"
                                >
                                    {`${stat.stat.name}: ${stat.base_stat}`}
                                </button>
                            ))}
                        </p>
                        <div className="card-text">
                            <strong className="me-3"> Shiny:</strong>

                            <div className="">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="normal"
                                    value={"normal"}
                                    checked={normal === "normal" ? true : false}
                                    onChange={handleOnChange}
                                />
                                Normal
                                {/* </div>
                            <div className="form-check"> */}
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="shiny"
                                    value={"shiny"}
                                    checked={normal === "shiny" ? true : false}
                                    onChange={handleOnChange}
                                />
                                Shiny
                            </div>
                        </div>
                    </div>

                    {count.length <= 0 ? (
                        <ItemQuantitySelector
                            stock={10}
                            initial={1}
                            onAdd={onAdd}
                        />
                    ) : (
                        <div className="row">
                            <div className="col-md-12">
                                <div className="btn-group" role="group">
                                    <Link className="d-block" to="/cart">
                                        <button className="btn btn-success">
                                            Go Car
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ItemDetail;
