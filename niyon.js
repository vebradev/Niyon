// Hi!
console.log("👋");

// Burger menu
const menuBurger = document.querySelector(".menu-burger");
menuBurger.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("open");
});

// Quotes

const feedbacks = [
  {
    id: "0",
    image: "https://api.adorable.io/avatars/120/a.png"
  },
  {
    id: "1",
    image: "https://api.adorable.io/avatars/120/b.png"
  },
  {
    id: "2",
    image: "https://api.adorable.io/avatars/120/c.png"
  },
  {
    id: "3",
    image: "https://api.adorable.io/avatars/120/o.png"
  },
  {
    id: "4",
    image: "https://api.adorable.io/avatars/120/z.png"  
  }
];

class Avatar {
  constructor(element) {
    this.element = element;
    this.elementId = element.dataset.avatar;
    this.image = feedbacks[this.elementId - 1].image;
    this.element.style.backgroundImage = `url("${this.image}")`;
    this.elements = document.querySelectorAll(".avatar");
    this.quotes = document.querySelectorAll(
      `.quote[data-avatar="${this.elementId}"]`
    );
    this.quotes = Array.from(this.quotes).map(quote => new Quote(quote));
    this.element.addEventListener("click", () => this.showQuote());
  }

  showQuote() {
    const elements = document.querySelectorAll(".avatar");
    elements.forEach(element => {
      element.classList.remove("active-avatar");
    });
    const quotes = document.querySelectorAll(".quote");
    quotes.forEach(quote => {
      quote.style.display = "none";
    });
    this.element.classList.add("active-avatar");
    this.quotes.forEach(quote => quote.viewQuote());
  }
}

class Quote {
  constructor(quoteElement) {
    this.quoteElement = quoteElement;
  }
  viewQuote() {
    this.quoteElement.style.display = "block";
  }
}

const avatars = document.querySelectorAll(".avatar");
avatars.forEach(avatar => {
  new Avatar(avatar);
});