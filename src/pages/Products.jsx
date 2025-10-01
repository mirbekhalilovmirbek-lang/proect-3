import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { addToFavorites } from '../store/favoritesSlice';
import './Products.css';

// Импорт fallback изображения
import defaultImage from '../assets/products/default-laptop.jpg';

const Products = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  // Sample product data
  const [products] = useState([
    {
      id: 1,
      name: language === 'en' ? 'Gaming Laptop Pro' : 'Игровой ноутбук Pro',
      description: language === 'en'
        ? 'High-performance gaming laptop with RTX graphics'
        : 'Высокопроизводительный игровой ноутбук с графикой RTX',
      price: 1299.99,
      category: language === 'en' ? 'Gaming' : 'Игровые',
      image: "https://object.pscloud.io/cms/cms/Photo/img_0_62_3119_0_1_9lW4vM.jpg"
    },
    {
      id: 2,
      name: language === 'en' ? 'Business Ultrabook' : 'Ультрабук для бизнеса',
      description: language === 'en'
        ? 'Lightweight and powerful for professionals'
        : 'Легкий и мощный для профессионалов',
      price: 899.99,
      category: language === 'en' ? 'Business' : 'Бизнес',
      image: "https://filearchive.cnews.ru/img/news/2020/07/08/red601.jpg"
    },
    {
      id: 3,
      name: language === 'en' ? 'Designer Workstation' : 'Рабочая станция дизайнера',
      description: language === 'en'
        ? 'Color-accurate display for creative professionals'
        : 'Цветоточная дисплей для творческих профессионалов',
      price: 1599.99,
      category: language === 'en' ? 'Workstation' : 'Рабочие станции',
      image: "https://xstore.md/images/category/gaming-laptop.jpg"
    },
    {
      id: 4,
      name: language === 'en' ? 'Student Laptop' : 'Ноутбук для студентов',
      description: language === 'en'
        ? 'Affordable performance for students'
        : 'Доступная производительность для студентов',
      price: 599.99,
      category: language === 'en' ? 'Education' : 'Образование',
      image: "https://www.kivano.kg/images/product/153856/full/1753508974_15426000.jpg"
    },
    {
      id: 5,
      name: language === 'en' ? 'MacBook Pro Clone' : 'Клон MacBook Pro',
      description: language === 'en'
        ? 'Apple-inspired design with Windows power'
        : 'Дизайн в стиле Apple с мощностью Windows',
      price: 1399.99,
      category: language === 'en' ? 'Premium' : 'Премиум',
      image: "https://filearchive.cnews.ru/img/zoom/2020/04/14/notes_9.jpg"
    },
    {
      id: 6,
      name: language === 'en' ? 'Budget Chromebook' : 'Бюджетный Chromebook',
      description: language === 'en'
        ? 'Web-focused laptop for basic tasks'
        : 'Ноутбук с фокусом на веб для базовых задач',
      price: 299.99,
      category: language === 'en' ? 'Budget' : 'Бюджет',
      image: "https://lh4.googleusercontent.com/yhrTUVs5bUrzShKxyDP764QyHV9lmg7IB6Ddwgijg4qjOkClPA1LiDbAq6GQNPGMCrP6WVe2LQ-Hl5_4DrskczIlOOP5lzG-MykyPjpluk0IccK5ALCdPTyIUKLa3B6G_dMkA0JS"
    }
  ]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  return (
    <div className={`products ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>{language === 'en' ? 'Our Products' : 'Наши продукты'}</h1>

        <div className="filters">
          <div className="filter-group">
            <label>{language === 'en' ? 'Category:' : 'Категория:'}</label>
            <select>
              <option>{language === 'en' ? 'All Categories' : 'Все категории'}</option>
              <option>{language === 'en' ? 'Gaming' : 'Игровые'}</option>
              <option>{language === 'en' ? 'Business' : 'Бизнес'}</option>
              <option>{language === 'en' ? 'Workstation' : 'Рабочие станции'}</option>
              <option>{language === 'en' ? 'Education' : 'Образование'}</option>
              <option>{language === 'en' ? 'Premium' : 'Премиум'}</option>
              <option>{language === 'en' ? 'Budget' : 'Бюджет'}</option>
            </select>
          </div>

          <div className="filter-group">
            <label>{language === 'en' ? 'Sort by:' : 'Сортировать по:'}</label>
            <select>
              <option>{language === 'en' ? 'Price: Low to High' : 'Цена: от низкой к высокой'}</option>
              <option>{language === 'en' ? 'Price: High to Low' : 'Цена: от высокой к низкой'}</option>
              <option>{language === 'en' ? 'Name: A to Z' : 'Название: от А до Я'}</option>
              <option>{language === 'en' ? 'Name: Z to A' : 'Название: от Я до А'}</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img
                  src={product.image }
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src;
                  }}
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p>{product.description}</p>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <div className="product-actions">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    {language === 'en' ? 'Add to Cart' : 'В корзину'}
                  </button>
                  <button
                    className="add-to-favorites-btn"
                    onClick={() => handleAddToFavorites(product)}
                  >
                    ❤️
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

export default Products;
