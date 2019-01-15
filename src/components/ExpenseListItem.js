import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>Edit</Link>
        <h2>{description}</h2>
        <p>Amout: {amount}</p>
        <p>Created At: {createdAt}</p>
    </div>
);

export default ExpenseListItem;