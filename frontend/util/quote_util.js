const generateQuote = () => {
  const quotes = [
    ["Time you enjoy wasting is not wasted time.", "Marthe Troly-Curtin, Phrynette Married"],
    ["Always do what you are afraid to do.", "Ralph Waldo Emerson"],
    ["Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.", "Jack Ma"],
    ["Most of us spend too much time on what is urgent and not enough time on what is important.", "Stephen R. Covey"],
    ["Every strike brings me closer to the next home run.", "Babe Ruth"],
    ["I do remember, and then when I try to remember, I forget.", "A.A. Milne, Winnie-the-Pooh"]
  ];

  const [quote, author] = quotes[Math.floor(Math.random() * quotes.length)];
  return {quote , author};
};

export default generateQuote;
