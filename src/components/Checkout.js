import { context } from "./CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../database/firebase";

const Checkout = (props) => {
    const [purchase, setPurchase] = useState();
    const { cart, total, clearCart } = useContext(context);

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleBuy = () => {
        const collectionProductos = collection(db, "orders");
        const productos = {
            buyer: {
                name: name,
                lastname: lastname,
                email: email,
                phone: phone,
            },
            items: [...cart],
            date: serverTimestamp(),
            total: total,
        };

        const consulta = addDoc(collectionProductos, productos);
        consulta
            .then((result) => {
                setPurchase(result.id);
                clearCart();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <h1>Checkout</h1>
            {purchase ? <h2>Your Orders #{purchase}</h2> : ""}
            {purchase ? (
                ""
            ) : (
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">LastName</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastname"
                                placeholder="lastname"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <h1> Total payment: {total} </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.id}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.id * item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="btn btn-primary" onClick={handleBuy}>
                            Buy
                        </button>
                    </div>
                </div>
            )}
            {purchase ? (
                <Link to="/">
                    <button className="btn btn-primary">Home</button>
                </Link>
            ) : (
                ""
            )}
        </div>
        /* <div className="row mt-3">
        <div className="col-12">
            <h1>Checkout</h1>
            {purchase ? <h2>Tu Orden es #{purchase}</h2> : ""}
            {purchase ? (
                <Link to="/">
                    <button className="btn btn-primary">Home</button>
                </Link>
            ) : (
                <form className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">LastName</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastname"
                                placeholder="lastname"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Confirm Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Phone"
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <h1> Total payment: {total} </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.id}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.id * item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button
                            className="btn btn-primary"
                            onClick={handleBuy}
                        >
                            Buy
                        </button>
                    </div>
                </form>
            )}
        </div>
        </div> */
    );
};

export default Checkout;
