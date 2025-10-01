import React from 'react';
import { useSelector } from 'react-redux';
import './About.css';

const About = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`about ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>{language === 'en' ? 'About Us' : 'О нас'}</h1>
        <div className="about-content">
          <div className="about-section">
            <h2>{language === 'en' ? 'Our Story' : 'Наша история'}</h2>
            <p>
              {language === 'en' 
                ? 'Founded in 2010, Laptop Store has been at the forefront of providing high-quality laptops and accessories to tech enthusiasts and professionals worldwide. Our journey began with a simple mission: to make cutting-edge technology accessible to everyone.' 
                : 'Основанный в 2010 году, Магазин Ноутбуков находится на переднем крае предоставления высококачественных ноутбуков и аксессуаров для технологических энтузиастов и профессионалов по всему миру. Наш путь начался с простой миссии: сделать передовые технологии доступными для всех.'}
            </p>
          </div>
          
          <div className="about-section">
            <h2>{language === 'en' ? 'Our Mission' : 'Наша миссия'}</h2>
            <p>
              {language === 'en' 
                ? 'We are committed to delivering exceptional customer service, competitive pricing, and the latest technology products. Our team of experts carefully selects each product to ensure it meets our high standards for performance and reliability.' 
                : 'Мы стремимся предоставлять исключительное обслуживание клиентов, конкурентоспособные цены и новейшие технологические продукты. Наша команда экспертов тщательно отбирает каждый продукт, чтобы убедиться, что он соответствует нашим высоким стандартам производительности и надежности.'}
            </p>
          </div>
          
          <div className="about-section">
            <h2>{language === 'en' ? 'Why Choose Us?' : 'Почему выбирают нас?'}</h2>
            <ul>
              <li>{language === 'en' ? 'Wide selection of premium laptops and accessories' : 'Широкий выбор премиальных ноутбуков и аксессуаров'}</li>
              <li>{language === 'en' ? 'Competitive pricing and regular discounts' : 'Конкурентоспособные цены и регулярные скидки'}</li>
              <li>{language === 'en' ? 'Expert customer support team' : 'Экспертная команда поддержки клиентов'}</li>
              <li>{language === 'en' ? 'Fast and reliable shipping' : 'Быстрая и надежная доставка'}</li>
              <li>{language === 'en' ? '2-year warranty on all products' : '2-летняя гарантия на все товары'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;