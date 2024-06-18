import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const From = () => {
  const [title, setTitle] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setArticles([...articles, title]);
      setTitle('');
    }
  };

  const handleDelete = (index) => {
    const newArticles = articles.filter((article, i) => i !== index);
    setArticles(newArticles);
  };

  return (
    <div className="App">
      <h1>Blog Articles</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Inserisci Titolo"
        />
        <button type="submit">Aggiungi Articolo</button>
      </form>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            {article}
            <FaTrash
              className="delete-icon"
              onClick={() => handleDelete(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default From;
