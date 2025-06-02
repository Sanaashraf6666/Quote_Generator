const quote = document.getElementById("quote");
const author = document.getElementById("author");

const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
  { text: "Knowledge is power.", author: "Francis Bacon" },
  { text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.", author: "Dan Salomon" },
  { text: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.", author: "Antoine de Saint-Exupery" },
  { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
  { text: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
  { text: "When to use iterative development? You should use iterative development only on projects that you want to succeed.", author: "Martin Fowler" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Debugging is like being the detective in a crime movie where you are also the murderer.", author: "Filipe Fortes" },
  { text: "Deleted code is debugged code.", author: "Jeff Sickel" },
   { text: "Simplicity carried to an extreme becomes elegance.", author: "Jon Franklin" },
  { text: "Programs are meant to be read by humans and only incidentally for computers to execute.", author: "Donald Knuth" },
  { text: "Code is like a poem; it has to follow certain rules but can still be beautiful.", author: "Unknown" },
  { text: "A good programmer is someone who always looks both ways before crossing a one-way street.", author: "Doug Linder" },
  { text: "The art of programming is the art of organizing complexity.", author: "Edsger W. Dijkstra" },
  { text: "If you automate a mess, you get an automated mess.", author: "Rodney Dangerfield" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "One of my most productive days was throwing away 1000 lines of code.", author: "Ken Thompson" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
  { text: "The sooner you start to code, the longer the program will take.", author: "Roy Carlson" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Good design adds value faster than it adds cost.", author: "Thomas C. Gale" },
  { text: "It’s not a bug – it’s a feature.", author: "Unknown" },
  { text: "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.", author: "Seymour Cray" },
  { text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard" },
  { text: "To iterate is human, to recurse divine.", author: "L. Peter Deutsch" },
  { text: "Deleted code is debugged code.", author: "Jeff Sickel" }
];

window.getquote = function() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = random.text;
  author.innerHTML = random.author;
};

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(quote.innerHTML + " ----by " + author.innerHTML),
    "Tweet Window",
    "width=600, height=300"
  );
}

getquote();
