import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./ProductReducer";
import { Link, useNavigate } from "react-router-dom";
function Create() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct({ id: products[products.length - 1].id + 1, name: name, price: price }))
        navigate('/')
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-dark text-white p-5">
                <h3>Add New Product</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter name"
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="number" name="price" className="form-control" placeholder="Enter Price"
                            onChange={e => setPrice(e.target.value)} />
                    </div><br />
                    <button className="btn btn-success">Add</button>
                    <Link to={`/`} className="btn btn-warning ml-2">Cancel</Link>
                </form>
            </div>
        </div>
    )
}
export default Create;