import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { getImageByProductId } from '../utils/imageUtils';
import './Cart.css';

const Cart = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className={`cart ${darkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <h1>{language === 'en' ? 'Your Cart' : 'Ваша корзина'}</h1>
          <div className="empty-cart">
            <p>{language === 'en' ? 'Your cart is empty' : 'Ваша корзина пуста'}</p>
            <Link to="/products" className="continue-shopping-btn">
              {language === 'en' ? 'Continue Shopping' : 'Продолжить покупки'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`cart ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>{language === 'en' ? 'Your Cart' : 'Ваша корзина'}</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-header">
              <div className="cart-header-item">{language === 'en' ? 'Product' : 'Продукт'}</div>
              <div className="cart-header-item">{language === 'en' ? 'Price' : 'Цена'}</div>
              <div className="cart-header-item">{language === 'en' ? 'Quantity' : 'Количество'}</div>
              <div className="cart-header-item">{language === 'en' ? 'Total' : 'Итого'}</div>
              <div className="cart-header-item">{language === 'en' ? 'Actions' : 'Действия'}</div>
            </div>
            
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <div className="item-image">
                    <img 
                      src={getImageByProductId(item.id)} 
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/src/assets/products/default-laptop.jpg';
                      }}
                    />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                
                <div className="cart-item-price">
                  ${item.price.toFixed(2)}
                </div>
                
                <div className="cart-item-quantity">
                  <button 
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                
                <div className="cart-item-actions">
                  <button 
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="remove-btn"
                  >
                    {language === 'en' ? 'Remove' : 'Удалить'}
                  </button>
                </div>
              </div>
            ))}
            
            <div className="cart-actions">
              <button onClick={handleClearCart} className="clear-cart-btn">
                {language === 'en' ? 'Clear Cart' : 'Очистить корзину'}
              </button>
              <Link to="/products" className="continue-shopping-btn">
                {language === 'en' ? 'Continue Shopping' : 'Продолжить покупки'}
              </Link>
            </div>
          </div>
          
          <div className="cart-summary">
            <h2>{language === 'en' ? 'Order Summary' : 'Сводка заказа'}</h2>
            <div className="summary-item">
              <span>{language === 'en' ? 'Subtotal' : 'Промежуточный итог'}:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>{language === 'en' ? 'Tax' : 'Налог'}:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-item total">
              <span>{language === 'en' ? 'Total' : 'Итого'}:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              {language === 'en' ? 'Proceed to Checkout' : 'Перейти к оформлению заказа'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;