import React from 'react';
import { useSelector } from 'react-redux';
import './Contact.css';

const Contact = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`contact ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>{language === 'en' ? 'Contact Us' : 'Свяжитесь с нами'}</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>{language === 'en' ? 'Get in Touch' : 'Свяжитесь с нами'}</h2>
            <p>
              {language === 'en' 
                ? 'Have questions or feedback? We\'d love to hear from you. Reach out to us using the information below or fill out the contact form.' 
                : 'Есть вопросы или отзывы? Мы будем рады услышать вас. Свяжитесь с нами, используя информацию ниже, или заполните контактную форму.'}
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>{language === 'en' ? 'Address' : 'Адрес'}</h3>
                <p>123 Tech Street, Silicon Valley, CA 94000</p>
                <p>{language === 'en' ? 'United States' : 'США'}</p>
              </div>
              
              <div className="contact-item">
                <h3>{language === 'en' ? 'Phone' : 'Телефон'}</h3>
                <p>+996 (703) 15 33 55</p>
              </div>
              
              <div className="contact-item">
                <h3>{language === 'en' ? 'Email' : 'Электронная почта'}</h3>
                <p>halilovmirbek386@gmail.com</p>
              </div>
              
              <div className="contact-item">
                <h3>{language === 'en' ? 'Business Hours' : 'Часы работы'}</h3>
                <p>{language === 'en' ? 'Monday - Friday: 9AM - 6PM' : 'Понедельник - Пятница: 9:00 - 18:00'}</p>
                <p>{language === 'en' ? 'Saturday: 10AM - 4PM' : 'Суббота: 10:00 - 16:00'}</p>
                <p>{language === 'en' ? 'Sunday: Closed' : 'Воскресенье: Закрыто'}</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>{language === 'en' ? 'Send us a Message' : 'Отправьте нам сообщение'}</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">{language === 'en' ? 'Name' : 'Имя'}:</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">{language === 'en' ? 'Subject' : 'Тема'}:</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{language === 'en' ? 'Message' : 'Сообщение'}:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                {language === 'en' ? 'Send Message' : 'Отправить сообщение'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;