

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Additem.css';

const AddItem = () => {
    const { register } = useForm();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const Size = event.target.Size.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        const product = { name, Size, description, price, quantity };

        fetch('https://shoeinventorybackend.onrender.com/api/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((res) => {
                event.target.name.value = '';
                event.target.Size.value = '';
                event.target.description.value = '';
                event.target.price.value = '';
                event.target.quantity.value = '';
                res.json();
            })
            .then((result) => {
                toast('New Item Successfully Inserted', result);
            });
    };

    const navigateManageItem = () => {
        navigate('/Manageitem');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input className="form-input" {...register('name')} placeholder="Product name" required />
                <br />

                <input className="form-input" {...register('Size')} placeholder="Size" required />
                <br />

                

                <input className="form-input" type="number" {...register('price')} placeholder="Price" />
                <br />

                <input className="form-input" type="number" {...register('quantity')} placeholder="Quantity" required />
                <br />

                <input className="form-button" type="submit" value="Add Item" />

                <button className="go-to-inventory" onClick={navigateManageItem}>
                    Go to Inventory
                </button>
            </form>
        </div>
    );
};

export default AddItem;
