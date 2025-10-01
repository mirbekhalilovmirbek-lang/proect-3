import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';
import { addToFavorites } from '../store/favoritesSlice';
import { getImageByProductId } from '../utils/imageUtils';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  // Sample product data (in a real app, this would come from an API or store)
  const product = {
    id: parseInt(id),
    name: language === 'en' ? `Premium Laptop ${id}` : `Премиальный ноутбук ${id}`,
    description: language === 'en' 
      ? `This is a high-performance laptop with cutting-edge technology. Perfect for gaming, work, and creative tasks. Featuring the latest ${id}th generation processor and advanced graphics.` 
      : `Это высокопроизводительный ноутбук с передовыми технологиями. Идеально подходит для игр, работы и творческих задач. Оснащен новейшим процессором ${id}-го поколения и продвинутой графикой.`,
    price: 999.99 + parseInt(id) * 100,
    specifications: [
      { key: language === 'en' ? 'Processor' : 'Процессор', value: `Intel Core i${7 + parseInt(id)}-12700H` },
      { key: language === 'en' ? 'Memory' : 'Память', value: '16GB DDR4' },
      { key: language === 'en' ? 'Storage' : 'Хранилище', value: '512GB NVMe SSD' },
      { key: language === 'en' ? 'Graphics' : 'Графика', value: `NVIDIA GeForce RTX 30${70 + parseInt(id)}` },
      { key: language === 'en' ? 'Display' : 'Дисплей', value: '15.6" FHD 144Hz' },
      { key: language === 'en' ? 'Operating System' : 'Операционная система', value: 'Windows 11 Home' }
    ]
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(product));
  };

  return (
    <div className={`product-details ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="product-content">
          <div className="product-gallery">
            <div className="main-image">
              <img 
                src={getImageByProductId(product.id)} 
                alt={product.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/src/assets/products/default-laptop.jpg';
                }}
              />
            </div>
            <div className="thumbnails">
              {[1, 2, 3, 4].map((thumb) => (
                <div key={thumb} className="thumbnail">
                  <img 
                    src={getImageByProductId(thumb)} 
                    alt={`Thumbnail ${thumb}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/src/assets/products/default-laptop.jpg';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <p className="product-description">{product.description}</p>
            
            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                {language === 'en' ? 'Add to Cart' : 'Добавить в корзину'}
              </button>
              <button className="add-to-favorites-btn" onClick={handleAddToFavorites}>
                {language === 'en' ? 'Add to Favorites' : 'Добавить в избранное'}
              </button>
            </div>
            
            <div className="product-specifications">
              <h2>{language === 'en' ? 'Specifications' : 'Характеристики'}</h2>
              <table>
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td className="spec-key">{spec.key}:</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;