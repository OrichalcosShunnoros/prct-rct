import React, { useState, useRef } from 'react';
import './Cart.css';

function CartItem({ item, onRemove }) {
  const [selectedImage, setSelectedImage] = useState(item.imageUrl);
  const fileInputRef = useRef(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="cart-item">
      <img src={selectedImage} alt={item.name} className="cart-item-image" />
      <input
        type="file"
        accept="image/png*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <h4>{item.name}</h4>
      <p>{item.price}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
