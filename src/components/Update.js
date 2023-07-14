import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "./ProductReducer";


function Update(){
    const {id} = useParams();
    const products = useSelector((state) => state.products);
    const existingProduct = products.filter(f => f.id == id);
    const {name, price} = existingProduct[0];
    const [uname, setName] = useState(name);
    const [uprice, setPrice] = useState(price);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateProduct({
            id: id,
            name: uname,
            price: uprice
        }))
        navigate('/')
    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-dark text-white p-5">
                <h3>Upadte Product</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter name"
                        value={uname} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="number" name="price" className="form-control" placeholder="Enter Price"
                        value={uprice} onChange={e => setPrice(e.target.value)}/>
                    </div><br />
                    <button className="btn btn-success mr-2">Update</button>
                    <Link to={`/`} className="btn btn-warning">Cancel</Link>
                </form>
            </div>
        </div>
    )
}
export default Update;