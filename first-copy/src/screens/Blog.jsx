import React, { useEffect, useReducer } from 'react';
//import dataBlog from '../data/dataBlog';
import './css/blog.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';

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
  //const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/articles');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //setArticles(result.data);
    };
    fetchData();
  }, []);
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
        articles.map((article) => (
          <Link to={`/blog/${article.id}`}>
            <div key={article.id} className="blog-article">
              <img src={article.image} alt={article.id} />
              <div>
                <h1>{article.tittle}</h1>
                <p>{article.resum}</p>
              </div>
            </div>
          </Link>
        ))
      )}

      <div>
        <Link to="/">
          <h1>Go home again</h1>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
