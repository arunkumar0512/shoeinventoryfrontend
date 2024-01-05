import React from 'react';
import axios from 'axios';
import useProducts from './Useproduct.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Manageitem.css'

const Manageitem = () => {
    const [products] = useProducts();
    const navigate = useNavigate();

    const handleRemove = id => {
        const proceed = window.confirm('Are You Sure to Delete?');
        if (proceed) {
            fetch(`https://shoeinventorybackend.onrender.com/api/delete/product/${id}`, {
                method: 'DELETE',
            })
                .then(res => {
                    
                    window.location.reload()
                    
                    
                    
                    res.json()})
                .then(data => {
                    toast('Product Successfully Deleted', data);
                })
        }
    }

    const navigateAddItem = () => {
        navigate('/Additem');
    }
    return (
        <div>
            <h1 style={{marginTop:'200px'}}>Inventory Management Page</h1>
            <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr style={{fontSize:'50px'}}>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return (
                                    <tr key={product._id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td title={product.description}>{product.description.slice(0, 50) + '...'}</td>
                                        <td><button onClick={() => handleRemove(product._id)}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            <button onClick={navigateAddItem} className='btn btn-success' style={{ backgroundColor:'grey'}}>Add new item</button>
        </div>
    );
};

export default Manageitem;