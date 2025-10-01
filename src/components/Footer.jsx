import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';

const Footer = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{language === 'en' ? 'Laptop Store' : 'Магазин Ноутбуков'}</h3>
            <p>
              {language === 'en' 
                ? 'Your one-stop shop for premium laptops and accessories.' 
                : 'Ваш универсальный магазин премиальных ноутбуков и аксессуаров.'}
            </p>
          </div>
          
          <div className="footer-section">
            <h4>{language === 'en' ? 'Quick Links' : 'Быстрые ссылки'}</h4>
            <ul>
              <li><a href="/">{language === 'en' ? 'Home' : 'Главная'}</a></li>
              <li><a href="/products">{language === 'en' ? 'Products' : 'Продукты'}</a></li>
              <li><a href="/about">{language === 'en' ? 'About Us' : 'О нас'}</a></li>
              <li><a href="/contact">{language === 'en' ? 'Contact' : 'Контакты'}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{language === 'en' ? 'Contact Us' : 'Свяжитесь с нами'}</h4>
            <p>📧 halilovmirbek386@.gmail.com</p>
            <p>📞 +996 (703) 15 33 55</p>
            <p>📍 {language === 'en' ? '123 Tech Street, Silicon Valley, CA' : 'Нижная-Ала арча логвиненко 213'}</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {language === 'en' ? 'Laptop Store. All rights reserved.' : 'Магазин Ноутбуков. Все права защищены.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;