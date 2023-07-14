import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "./ProductReducer";

function Home() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteProduct({id: id}));
    }
    return (
        <div className="container">
            <h2>Product Manager</h2>
            <Link to="/create" className="btn btn-success my-3">Add Product</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price($)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/read/${product.id}`} className="btn btn-info mr-3">Read</Link>
                                <Link to={`/edit/${product.id}`} className="btn btn-primary mr-3">Edit</Link>
                                <button onClick={() => handleDelete(product.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Home;