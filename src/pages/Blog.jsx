import React from 'react';
import { useSelector } from 'react-redux';
import './Blog.css';

const Blog = () => {
  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: language === 'en' ? 'Top 10 Laptops for 2025' : 'Топ 10 ноутбуков 2025 года',
      excerpt: language === 'en' ? 'Discover the best laptops of the year with our comprehensive review.' : 'Откройте для себя лучшие ноутбуки года с нашим подробным обзором.',
      date: '2025-09-15'
    },
    {
      id: 2,
      title: language === 'en' ? 'How to Choose the Right Laptop for Your Needs' : 'Как выбрать правильный ноутбук для ваших нужд',
      excerpt: language === 'en' ? 'A guide to help you make the best decision when purchasing a laptop.' : 'Руководство, которое поможет вам принять лучшее решение при покупке ноутбука.',
      date: '2025-09-10'
    },
    {
      id: 3,
      title: language === 'en' ? 'Laptop Maintenance Tips' : 'Советы по обслуживанию ноутбука',
      excerpt: language === 'en' ? 'Keep your laptop running smoothly with these maintenance tips.' : 'Сохраните плавную работу вашего ноутбука с этими советами по обслуживанию.',
      date: '2025-09-05'
    }
  ];

  return (
    <div className={`blog ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>{language === 'en' ? 'Blog' : 'Блог'}</h1>
        <div className="blog-content">
          <div className="blog-posts">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-post">
                <div className="post-image">
                  <div className="placeholder-image">📰</div>
                </div>
                <div className="post-content">
                  <h2>{post.title}</h2>
                  <p className="post-date">{post.date}</p>
                  <p>{post.excerpt}</p>
                  <button className="read-more-btn">
                    {language === 'en' ? 'Read More' : 'Читать далее'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="blog-sidebar">
            <div className="sidebar-section">
              <h3>{language === 'en' ? 'Categories' : 'Категории'}</h3>
              <ul>
                <li><a href="#">{language === 'en' ? 'Laptop Reviews' : 'Обзоры ноутбуков'}</a></li>
                <li><a href="#">{language === 'en' ? 'Buying Guides' : 'Руководства по покупке'}</a></li>
                <li><a href="#">{language === 'en' ? 'Tech News' : 'Технологические новости'}</a></li>
                <li><a href="#">{language === 'en' ? 'Maintenance Tips' : 'Советы по обслуживанию'}</a></li>
              </ul>
            </div>
            
            <div className="sidebar-section">
              <h3>{language === 'en' ? 'Popular Posts' : 'Популярные статьи'}</h3>
              <ul>
                <li><a href="#">{language === 'en' ? 'Best Gaming Laptops Under $1000' : 'Лучшие игровые ноутбуки до 1000 долларов'}</a></li>
                <li><a href="#">{language === 'en' ? 'MacBook vs Windows: Which is Better?' : 'MacBook против Windows: Что лучше?'}</a></li>
                <li><a href="#">{language === 'en' ? 'How to Extend Your Laptop Battery Life' : 'Как продлить срок службы батареи ноутбука'}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;