import { Link } from "react-router-dom";
import { getTypes } from "../api/pokemon";
import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    const [types, setTypes] = useState([]);
    useEffect(() => {
        getTypes().then((data) => {
            setTypes(data.slice(0, 13));
        });
    }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    PokeStore
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {types.map((type) => (
                            <li className="nav-item" key={type.name}>
                                <Link
                                    to={`/type/${type.name}`}
                                    className="nav-link"
                                >
                                    {type.name}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                Cart
                                <CartWidget />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
