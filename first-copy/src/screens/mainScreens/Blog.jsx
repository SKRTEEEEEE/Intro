import React, { useEffect, useReducer, useState } from 'react';
import '../mainScreens/css/blog.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';
import moment from 'moment';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, articles: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Blog() {
  const [{ loading, error, articles }, dispatch] = useReducer(logger(reducer), {
    articles: [],
    loading: true,
    error: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/articles');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  // Calcular el índice inicial y final de los artículos a mostrar
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Cambiar la página actual
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blog-container">
      <div>
        <h1>Articles</h1>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        currentArticles.map((article) => (
          <Link to={`/blog/${article._id}`} key={article._id}>
            <div className="blog-article">
              <img
                src={'http://localhost:5000/' + article.cover}
                alt={article.id}
              />
              <div>
                <h1>{article.title}</h1>
                <div>
                  <time>{moment(article.createdAt).format('DD/MM/YYYY')}</time>
                  <p>{article.author}</p>
                </div>
                <p>{article.summary}</p>
              </div>
            </div>
          </Link>
        ))
      )}

      <div>
        <Link to="/">
          <h1>Go home again</h1>
        </Link>
        <div>
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>
              Anterior
            </button>
          )}
          {currentPage < Math.ceil(articles.length / articlesPerPage) && (
            <button onClick={() => handlePageChange(currentPage + 1)}>
              Siguiente
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
