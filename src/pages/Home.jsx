import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';

// Импорт fallback-изображения
import defaultImage from '../assets/products/default-laptop.jpg';

const Home = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Sample products data
  const featuredProducts = [
    {
      id: 1,
      name: language === 'en' ? 'Gaming Laptop Pro' : 'Игровой ноутбук Pro',
      description: language === 'en'
        ? 'High-performance gaming laptop with RTX graphics'
        : 'Высокопроизводительный игровой ноутбук с графикой RTX',
      price: 1299.99,
      image: "https://samsungstore.kg/files/media/12/12238.jpg"
    },
    {
      id: 2,
      name: language === 'en' ? 'Business Ultrabook' : 'Ультрабук для бизнеса',
      description: language === 'en'
        ? 'Lightweight and powerful for professionals'
        : 'Легкий и мощный для профессионалов',
      price: 899.99,
      image: "https://www.gadget.kg/upload/catalog/78/item_7751/thumbs/704582fdb9125aed72ab825396b624a4.jpg"
    },
    {
      id: 3,
      name: language === 'en' ? 'Designer Workstation' : 'Рабочая станция дизайнера',
      description: language === 'en'
        ? 'Color-accurate display for creative professionals'
        : 'Цветоточная дисплей для творческих профессионалов',
      price: 1599.99,
      image: "https://www.myphone.kg/cache/files/18755.jpg_w800_h800_resize.jpg?t=1756816734"
    },
    {
      id: 4,
      name: language === 'en' ? 'Student Laptop' : 'Ноутбук для студентов',
      description: language === 'en'
        ? 'Affordable performance for students'
        : 'Доступная производительность для студентов',
      price: 599.99,
      image: "https://www.softkey.ua/upload/resize_cache/iblock/089/700_700_1/8VU02EA_3.jpg"
    },
    {
      id: 4,
      name: language === 'en' ? 'Student Laptop' : 'Ноутбук для ирговой',
      description: language === 'en'
        ? 'Affordable performance for students'
        : 'Доступная производительность для студентов',
      price: 500.90,
      image: "https://nout.uz/wp-content/uploads/2025/08/Group-30-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BE.png"
    },
    {
      id: 4,
      name: language === 'en' ? 'Student Laptop' : 'Ноутбук для учеников',
      description: language === 'en'
        ? 'Affordable performance for students'
        : 'Доступная производительность для студентов',
      price: 650.90,
      image: "https://ichip.ru/images/cache/2024/12/17/widen_960_crop_1000_473_0_0_q90_1014432_d4ec92abf806816db85ccf07c.jpeg"
    }
  ];

  return (
    <div className={`home ${darkMode ? 'dark' : 'light'}`}>
      <section className="hero">
        <div className="hero-content">
          <h1>{language === 'en' ? 'Premium Laptops for Professionals' : 'Премиальные ноутбуки для профессионалов'}</h1>
          <p>
            {language === 'en'
              ? 'Discover the latest high-performance laptops with cutting-edge technology and unbeatable prices.'
              : 'Откройте для себя новейшие высокопроизводительные ноутбуки с передовыми технологиями и непревзойденными ценами.'}
          </p>
          <button className="cta-button">
            {language === 'en' ? 'Shop Now' : 'Купить сейчас'}
          </button>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>{language === 'en' ? 'Fast Delivery' : 'Быстрая доставка'}</h3>
          <p>{language === 'en' ? 'Free shipping on orders over $500' : 'Бесплатная доставка при заказе от 500 долларов'}</p>
        </div>
        <div className="feature">
          <h3>{language === 'en' ? '24/7 Support' : 'Поддержка 24/7'}</h3>
          <p>{language === 'en' ? 'Expert assistance whenever you need it' : 'Экспертная помощь в любое время'}</p>
        </div>
        <div className="feature">
          <h3>{language === 'en' ? 'Warranty' : 'Гарантия'}</h3>
          <p>{language === 'en' ? '2 years warranty on all products' : '2 года гарантии на все товары'}</p>
        </div>
      </section>

      <section className="featured-products">
        <h2>{language === 'en' ? 'Featured Products' : 'Популярные товары'}</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img
                  src={product.image || defaultImage}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                  }}
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <button className="add-to-cart-btn">
                  {language === 'en' ? 'Add to Cart' : 'Добавить в корзину'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
