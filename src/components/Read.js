import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Read() {
    const {id} = useParams();
    const products = useSelector((state) => state.products);
    const existingProduct = products.filter(f => f.id == id);
    const {name, price} = existingProduct[0];

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-dark text-white p-5">
                <h3>Read Product</h3>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter name"
                        value={name}/>
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="number" name="price" className="form-control" placeholder="Enter Price"
                        value={price}/>
                    </div><br />
                    <Link to={`/`} className="btn btn-success">Back</Link>
                </form>
            </div>
        </div>
    )
}
export default Read;