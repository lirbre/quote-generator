import './App.scss';
import React, { useState } from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';

function App() {
  const quotesArray = [
    {
      phrase: "To err is human; to forgive, divine",
      author: "Alexander Pope"
    },
    {
      phrase: "To love is to act",
      author: "Victor Hugo"
    },
    {
      phrase: "Art doesn't transform. It just plain forms.",
      author: "Roy Lichtenstein"
    },
    {
      phrase: "Human life is as evanescent as the morning dew or a flash of lightning.",
      author: "Samuel Butler"
    },
    {
      phrase: "A man is given the choice between loving women and understanding them.",
      author: "Ninon de L'Enclos"
    },
    {
      phrase: "Art is the most beautiful of all lies.",
      author: "Claude Debussy"
    },
    {
      phrase: "The world is round so that friendship may encircle it.",
      author: "Pierre Teilhard de Chardin"
    },
    {
      phrase: "To give without any reward, or any notice, has a special quality of its own.",
      author: "Anne Morrow Lindbergh Quotes"
    },
    {
      phrase: "People often say that motivation doesn't last. Well, neither does bathing -- that's why we recommend it daily.",
      author: "Zig Ziglar"
    },
    {
      phrase: "Someday is not a day of the week.",
      author: "Denise Brennan-Nelson"
    },
    {
      phrase: "Hire character. Train skill.", 
      author: "Peter Schutz"
    },
    {      
      phrase: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      phrase: "Sales are contingent upon the attitude of the salesman -- not the attitude of the prospect." ,
      author: "W. Clement Stone"
    },
    {
      phrase: "Everyone lives by selling something.",
      author: "Robert Louis Stevenson"
    },
    {
      phrase: "If you are not taking care of your customer, your competitor will." ,
      author: "Bob Hooey"
    },
    {
      phrase: "The golden rule for every businessman is this: Put yourself in your customer's place.",
      author: "Orison Swett Marden"
    },
    {
      phrase: "If you cannot do great things, do small things in a great way.",
      author: "Napoleon Hill"
    },
    {
      phrase: "Beware of monotony; it's the mother of all the deadly sins.", 
      author: "Edith Wharton"
    },
    {
      phrase: "Nothing is really work unless you would rather be doing something else.",
      author: "J.M. Barrie"
    },
    {
      phrase: "Without a customer, you don't have a business -- all you have is a hobby.", 
      author: "Don Peppers"
    },
    {
      phrase: "Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment.",
      author: "Stephen Covey"
    }
  ]

  let rng = Math.random()*(quotesArray.length - 1);
  
  const [quotes, setQuotes] = useState({
    phrase: quotesArray[rng.toFixed(0)].phrase,
    author: quotesArray[rng.toFixed(0)].author
  })
  
  const getQuotes = () => {
    setQuotes({
      phrase: quotesArray[rng.toFixed(0)].phrase,
      author: quotesArray[rng.toFixed(0)].author
    });
  }

  return (
    <div className="center">
      <div id="quote-box" 
      onLoadStart={() => getQuotes()}>
        <div className="text-container">
          <h1 id="text">{quotes.phrase}<FormatQuoteIcon fontSize="large"/></h1>
        </div>
        <div className="author-container">
          <p id="author">- {quotes.author}</p>
        </div>
        <div className="icons-container">
          <a 
          id="tweet-quote"
          target="_blank"
          href="https://twitter.com/intent/tweet">
            <TwitterIcon/>
          </a>
          <Button 
          id="new-quote"
          variant="text"
          onClick={() => getQuotes()}>New quote!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
