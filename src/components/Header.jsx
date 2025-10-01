import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { setLanguage } from '../store/languageSlice';
import { selectCartItems, selectFavoriteItems } from '../store/selectors';
import logo from '../assets/logo.svg';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);
  const cartItems = useSelector(selectCartItems);
  const favoriteItems = useSelector(selectFavoriteItems);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const favoriteCount = favoriteItems.length;

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Laptop Store Logo" className="logo-img" />
              <span className="logo-text">Laptop Store</span>
            </Link>
          </div>
          
          <nav className="nav">
            <ul className="nav-list">
              <li><Link to="/">{language === 'en' ? 'Home' : 'Главная'}</Link></li>
              <li><Link to="/products">{language === 'en' ? 'Products' : 'Продукты'}</Link></li>
              <li><Link to="/services">{language === 'en' ? 'Services' : 'Услуги'}</Link></li>
              <li><Link to="/about">{language === 'en' ? 'About' : 'О нас'}</Link></li>
              <li><Link to="/blog">{language === 'en' ? 'Blog' : 'Блог'}</Link></li>
              <li><Link to="/contact">{language === 'en' ? 'Contact' : 'Контакты'}</Link></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <div className="theme-toggle">
              <button onClick={handleThemeToggle} className="theme-btn">
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
            
            <div className="language-switcher">
              <button 
                onClick={() => handleLanguageChange('en')} 
                className={language === 'en' ? 'active' : ''}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('ru')} 
                className={language === 'ru' ? 'active' : ''}
              >
                RU
              </button>
            </div>
            
            <div className="cart-favorite">
              <Link to="/favorites" className="icon-link">
                <span className="icon">❤️</span>
                {favoriteCount > 0 && <span className="badge">{favoriteCount}</span>}
              </Link>
              <Link to="/cart" className="icon-link">
                <span className="icon">🛒</span>
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;