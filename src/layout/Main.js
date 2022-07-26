import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

const Main = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/type/:type" element={<ItemListContainer />} />
                <Route
                    path="/pokemon/:name"
                    element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                {/* <Route path="/pokemon" element={<PokemonList />} />
                <Route path="/items" element={<ItemList />} />
                <Route path="/pokemon/:id" element={<Pokemon />} />
                <Route path="/items/:id" element={<Item />} /> */}
            </Routes>
        </div>
    );
};
export default Main;
