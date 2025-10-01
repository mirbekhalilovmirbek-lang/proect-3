import React from 'react';
import { useSelector } from 'react-redux';
import './Account.css';

const Account = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`account ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>{language === 'en' ? 'My Account' : 'Мой аккаунт'}</h1>
        <div className="account-content">
          <div className="account-sidebar">
            <ul className="account-nav">
              <li className="active">
                <a href="#">{language === 'en' ? 'Dashboard' : 'Панель управления'}</a>
              </li>
              <li>
                <a href="#">{language === 'en' ? 'My Orders' : 'Мои заказы'}</a>
              </li>
              <li>
                <a href="#">{language === 'en' ? 'Wishlist' : 'Список желаний'}</a>
              </li>
              <li>
                <a href="#">{language === 'en' ? 'Account Details' : 'Детали аккаунта'}</a>
              </li>
              <li>
                <a href="#">{language === 'en' ? 'Addresses' : 'Адреса'}</a>
              </li>
              <li>
                <a href="#">{language === 'en' ? 'Logout' : 'Выйти'}</a>
              </li>
            </ul>
          </div>
          
          <div className="account-main">
            <div className="account-dashboard">
              <h2>{language === 'en' ? 'Welcome Back!' : 'С возвращением!'}</h2>
              <p>
                {language === 'en' 
                  ? 'Manage your account, view order history, and update your preferences.' 
                  : 'Управляйте своим аккаунтом, просматривайте историю заказов и обновляйте свои предпочтения.'}
              </p>
              
              <div className="dashboard-stats">
                <div className="stat-card">
                  <h3>5</h3>
                  <p>{language === 'en' ? 'Orders' : 'Заказы'}</p>
                </div>
                <div className="stat-card">
                  <h3>3</h3>
                  <p>{language === 'en' ? 'Wishlist Items' : 'Товары в списке желаний'}</p>
                </div>
                <div className="stat-card">
                  <h3>2</h3>
                  <p>{language === 'en' ? 'Saved Addresses' : 'Сохраненные адреса'}</p>
                </div>
              </div>
              
              <div className="recent-orders">
                <h3>{language === 'en' ? 'Recent Orders' : 'Последние заказы'}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>{language === 'en' ? 'Order #' : 'Заказ #'}</th>
                      <th>{language === 'en' ? 'Date' : 'Дата'}</th>
                      <th>{language === 'en' ? 'Status' : 'Статус'}</th>
                      <th>{language === 'en' ? 'Total' : 'Итого'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#12345</td>
                      <td>2025-09-15</td>
                      <td className="status delivered">{language === 'en' ? 'Delivered' : 'Доставлен'}</td>
                      <td>$1,299.99</td>
                    </tr>
                    <tr>
                      <td>#12344</td>
                      <td>2025-09-10</td>
                      <td className="status shipped">{language === 'en' ? 'Shipped' : 'Отправлен'}</td>
                      <td>$899.99</td>
                    </tr>
                    <tr>
                      <td>#12343</td>
                      <td>2025-09-05</td>
                      <td className="status processing">{language === 'en' ? 'Processing' : 'Обработка'}</td>
                      <td>$1,599.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;