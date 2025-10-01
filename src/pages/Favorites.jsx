import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../store/favoritesSlice';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { getImageByProductId } from '../utils/imageUtils';
import './Favorites.css';

const Favorites = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (favoriteItems.length === 0) {
    return (
      <div className={`favorites ${darkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <h1>{language === 'en' ? 'Your Favorites' : 'Ваши избранные'}</h1>
          <div className="empty-favorites">
            <p>{language === 'en' ? 'You have no favorite items' : 'У вас нет избранных товаров'}</p>
            <Link to="/products" className="continue-shopping-btn">
              {language === 'en' ? 'Continue Shopping' : 'Продолжить покупки'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`favorites ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>{language === 'en' ? 'Your Favorites' : 'Ваши избранные'}</h1>
        
        <div className="favorites-grid">
          {favoriteItems.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image">
                <img 
                  src={getImageByProductId(item.id)} 
                  alt={item.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/src/assets/products/default-laptop.jpg';
                  }}
                />
              </div>
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="product-price">${item.price.toFixed(2)}</div>
                <div className="product-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    {language === 'en' ? 'Add to Cart' : 'В корзину'}
                  </button>
                  <button 
                    className="remove-favorite-btn"
                    onClick={() => handleRemoveFromFavorites(item.id)}
                  >
                    {language === 'en' ? 'Remove' : 'Удалить'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;