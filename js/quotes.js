const quotes = [
  {
    quote: "To Travel is to Live1",
    author: "Hans Christian Anderson1",
  },
  {
    quote: "To Travel is to Live2",
    author: "Hans Christian Anderson2",
  },
  {
    quote: "To Travel is to Live3",
    author: "Hans Christian Anderson3",
  },
  {
    quote: "To Travel is to Live4",
    author: "Hans Christian Anderson4",
  },
  {
    quote: "To Travel is to Live5",
    author: "Hans Christian Anderson5",
  },
  {
    quote: "To Travel is to Live6",
    author: "Hans Christian Anderson6",
  },
  {
    quote: "To Travel is to Live7",
    author: "Hans Christian Anderson7",
  },
  {
    quote: "To Travel is to Live8",
    author: "Hans Christian Anderson8",
  },
  {
    quote: "To Travel is to Live9",
    author: "Hans Christian Anderson9",
  },
  {
    quote: "To Travel is to Live10",
    author: "Hans Christian Anderson10",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
