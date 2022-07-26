import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import "./App.css";
import Main from "./layout/Main";
import { CartContext } from "./components/CartContext";

function App() {
    return (
        <BrowserRouter>
            <CartContext>
                <Header />
                <Main />
            </CartContext>
        </BrowserRouter>
    );
}

export default App;
