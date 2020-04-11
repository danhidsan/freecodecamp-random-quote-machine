
const quotes = [
  {author: "John Keats", text: "I love you the more in that I believe you had liked me for my own sake and for nothing else."},
  {author: "Ernest Hemingway", text: "But man is not made for defeat. A man can be destroyed but not defeated."},
  {author: "Franklin D. Roosevelt", text: "When you reach the end of your rope, tie a knot in it and hang on."},
  {author: "Heraclitus", text: "There is nothing permanent except change."},
  {author: "Indira Gandhi", text: "You cannot shake hands with a clenched fist."},
  {author: "A. P. J. Abdul Kalam", text: "Let us sacrifice our today so that our children can have a better tomorrow."},
  {author: "Leonardo da Vinci", text: "Learning never exhausts the mind."},
  {author: "Jane Austen", text: "There is no charm equal to tenderness of heart."},
  {author: "Edgar Allan Poe", text: "All that we see or seem is but a dream within a dream."},
  {author: "Francis of Assisi", text: "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love."},
  {author: "Rainer Maria Rilke", text: "The only journey is the one within."},
  {author: "Will Rogers", text: "Good judgment comes from experience, and a lot of that comes from bad judgment."},
  {author: "Khalil Gibran", text: "Life without love is like a tree without blossoms or fruit."},
  {author: "Susan B. Anthony", text: "Independence is happiness."},
  {author: "Sun Tzu", text: "The supreme art of war is to subdue the enemy without fighting."},
  {author: "Walt Whitman", text: "Keep your face always toward the sunshine - and shadows will fall behind you."},
  {author: "George Orwell", text: "Happiness can exist only in acceptance."},
  {author: "John Galsworthy", text: "Love has no age, no limit; and no death."},
  {author: "Albert Einstein", text: "You can't blame gravity for falling in love."},
  {author: "Aldous Huxley", text: "There is only one corner of the universe you can be certain of improving, and that's your own self."},
  {author: "Thomas Jefferson", text: "Honesty is the first chapter in the book of wisdom."},
]

var app = new Vue({
  el: "#app",
  data: {
    text: "",
    author: "",
    tweet: ""
  },
  methods: {
    onNewQuote: function () {
      const randomNumber = Math.floor(Math.random() * quotes.length)
      const quote = quotes[randomNumber]
      this.text = quote.text
      this.author = quote.author
      this.tweet = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.text
    }
  },
  created: function () {
    const randomNumber = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomNumber]
    this.text = quote.text
    this.author = quote.author
    this.tweet = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.text
  }
})