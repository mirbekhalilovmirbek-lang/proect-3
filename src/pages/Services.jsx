import React from 'react';
import { useSelector } from 'react-redux';
import './Services.css';

const Services = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`services ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>{language === 'en' ? 'Our Services' : 'Наши услуги'}</h1>
        <div className="services-content">
          <div className="service">
            <div className="service-icon">🚚</div>
            <h2>{language === 'en' ? 'Fast Delivery' : 'Быстрая доставка'}</h2>
            <p>
              {language === 'en' 
                ? 'Free shipping on orders over $500. Express delivery available for urgent needs.' 
                : 'Бесплатная доставка при заказе от 500 долларов. Экспресс-доставка доступна для срочных потребностей.'}
            </p>
          </div>
          
          <div className="service">
            <div className="service-icon">🛡️</div>
            <h2>{language === 'en' ? 'Warranty' : 'Гарантия'}</h2>
            <p>
              {language === 'en' 
                ? 'All products come with a 2-year warranty. Extended warranty options available.' 
                : 'Все товары поставляются с 2-летней гарантией. Доступны варианты расширенной гарантии.'}
            </p>
          </div>
          
          <div className="service">
            <div className="service-icon">🛠️</div>
            <h2>{language === 'en' ? 'Technical Support' : 'Техническая поддержка'}</h2>
            <p>
              {language === 'en' 
                ? '24/7 expert technical support for all your laptop needs. Remote assistance available.' 
                : 'Круглосуточная экспертная техническая поддержка для всех ваших потребностей в ноутбуках. Доступна удаленная помощь.'}
            </p>
          </div>
          
          <div className="service">
            <div className="service-icon">🔄</div>
            <h2>{language === 'en' ? 'Easy Returns' : 'Простой возврат'}</h2>
            <p>
              {language === 'en' 
                ? '30-day return policy with no questions asked. Hassle-free returns and exchanges.' 
                : 'Политика возврата в течение 30 дней без вопросов. Простой возврат и обмен.'}
            </p>
          </div>
          
          <div className="service">
            <div className="service-icon">💻</div>
            <h2>{language === 'en' ? 'Setup Assistance' : 'Помощь в настройке'}</h2>
            <p>
              {language === 'en' 
                ? 'Professional setup and configuration services to get you started quickly.' 
                : 'Профессиональные услуги по настройке и конфигурации, чтобы вы быстро начали работу.'}
            </p>
          </div>
          
          <div className="service">
            <div className="service-icon">🎓</div>
            <h2>{language === 'en' ? 'Training' : 'Обучение'}</h2>
            <p>
              {language === 'en' 
                ? 'Free training sessions to help you get the most out of your new laptop.' 
                : 'Бесплатные обучающие занятия, которые помогут вам максимально эффективно использовать ваш новый ноутбук.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;