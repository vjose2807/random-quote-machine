import React, {useState, useEffect} from 'react';
import './App.css';

const App = ()  => {

  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [backgroundStyles, setBackgroundStyles] = useState({
    backgroundColor: '#007bff',
    color: '#ffffff',
  });

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const fetchQuote = () => {
    // Hacer una nueva solicitud a la API de citas
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.error('Error fetching quote:', error));
      const randomBackgroundColor = generateRandomColor();
      
  
      
      setBackgroundStyles({
        backgroundColor: randomBackgroundColor,
      });
  };

  useEffect(() => {
    fetchQuote();
  },  []);

  return (
   
     <div id="quote-box" style={backgroundStyles}>
      <div id="text">"{quote}"</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
   
  )
}

export default App;
