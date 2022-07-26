import { useState } from "react";
const ItemQuantitySelector = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const Increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const Decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const Confirm = (e) => {
        onAdd(count);
    };

    return (
        <div className="container-fluid mb-3 border">
            <div className="row mb-3">
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={Decrement}
                    >
                        -
                    </button>
                    <button type="button" className="btn btn-secondary">
                        {count}
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={Increment}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={Confirm}
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ItemQuantitySelector;
