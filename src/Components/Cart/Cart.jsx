import React, { useState, useRef } from 'react';
import CartItem from './CartItem';
import './Cart.css';

export default function Cart({ searchTerm }) {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({ imageUrl: '', name: '', price: ''});
  const fileInputRef = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price && newItem.imageUrl) {
      setItems([...items, { id: Date.now(), ...newItem }]);
      setNewItem({ imageUrl: '', name: '', price: '' });
      setShowForm(false);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewItem({ ...newItem, imageUrl: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cartCont">
      <div className="cart">
        {filteredItems.length === 0 ? (
          <p>🔎</p>
        ) : (
          filteredItems.map(item => (
            <CartItem key={item.id} item={item} onRemove={removeItem} />
          ))
        )}
      </div>
      <button className="addBtn" onClick={() => setShowForm(true)}>Add Item</button>
      {showForm && (
        <div className="modal">
          <form onSubmit={addItem} className="add-item-form">
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Item Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              required
            />
            <button type="submit">Add Item</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}
