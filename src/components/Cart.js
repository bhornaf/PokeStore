import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./CartContext";

const Cart = (props) => {
    const { cart, removeItem, clearCart } = useContext(context);
    return (
        <div className="row mt-3">
            <div className="col-12">
                <h2>Cart</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.quantity}</td>
                                <td>{item.id * item.quantity}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                    <button className="btn btn-info">
                                        <Link to={`/pokemon/${item.name}`}>
                                            View
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/checkout">
                    <button className="btn btn-primary">Checkout</button>
                </Link>
                <button className="btn btn-danger" onClick={clearCart}>
                    Clear Cart
                </button>
            </div>
        </div>
    );
};
export default Cart;
