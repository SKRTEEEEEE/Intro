import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { Parallax } from 'react-parallax';
import { useParams } from 'react-router-dom';
import '../mainScreens/css/article.css';
import moment from 'moment';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, article: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const Article = () => {
  const params = useParams();

  const { _id } = params;

  const [{ loading, error, article }, dispatch] = useReducer(reducer, {
    article: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/articles/id/${_id}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [_id]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div id="article-blog">
        <header>
          <h1 id="article-tittle">{article.title}</h1>
          <div id="header-subtittle">
            <time>{moment(article.createdAt).format('DD/MM/YYYY')}</time>
            <p>{article.author}</p>
          </div>
        </header>
        <Parallax
          blur={3}
          strength={30}
          bgImage={'http://localhost:5000/' + article.cover}
        >
          <div style={{ height: '60vh' }}>
            <section id="subtittle">{article.summary}</section>
          </div>
        </Parallax>
        <section id="article-text-blog">
          <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </section>
      </div>
    </div>
  );
};
