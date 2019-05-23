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
    id: "1",
    name: "Jon Wayne",
    occupation: "Physicist",
    image: "https://api.adorable.io/avatars/80/a.png",
    quote: "1. Lorem ipsum generatus mer bits un. Speron kaqun hin hadun."
  },
  {
    id: "2",
    name: "Arya Robertson",
    occupation: "Archer",
    image: "https://api.adorable.io/avatars/80/b.png",
    quote: "2. Moterinsun qvato respin dube. Shamar lekas bazar judmanti ividu!"
  },
  {
    id: "3",
    name: "Kin Soul",
    occupation: "Archer",
    image: "https://api.adorable.io/avatars/80/c.png",
    quote: "3. Lorem ipsum generatus mer bits un. Speron kaqun hin hadun.!"
  },
  {
    id: "4",
    name: "Lofi Tunnie",
    occupation: "Producer",
    image: "https://api.adorable.io/avatars/80/o.png",
    quote: "4. Lorem ipsum generatus mer bits un. Speron kaqun hin hadun.!"
  },
  {
    id: "5",
    name: "Lofi Tunnie",
    occupation: "Producer",
    image: "https://api.adorable.io/avatars/80/z.png",
    quote: "5. Lorem ipsum generatus mer bits un. Speron kaqun hin hadun.!"
  }
];

class Avatar {
  constructor(avatar) {
    this.avatar = avatar;
    this.avatarData = avatar.dataset.avatar;
    this.quotes = document.querySelectorAll(
      `.quote[data-avatar="${this.avatarData}"]`
    );
    this.quotes = Array.from(this.quotes).map(quote => new Quote(quote));
    this.avatar.addEventListener("click", () => this.showQuote());
    // console.log(avatar);
    this.avatar.style.backgroundImage = `url("${feedbacks[3].image}")`;
  }
  showQuote() {
    const avatars = document.querySelectorAll(".avatar");
    avatars.forEach(avatar => {
      avatar.classList.remove("active-avatar");
    });
    const quotes = document.querySelectorAll(".quote");
    quotes.forEach(quote => {
      quote.style.display = "none";
    });
    this.avatar.classList.add("active-avatar");
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

class Drawer {
  constructor(feedback) {
    this.feedback = feedback;
    this.name = feedback.name;
    this.occupation = feedback.occupation;
    this.image = feedback.image;
    this.quote = feedback.quote;
    console.log(this.name);
    console.log(this.image);
  }
}

const avatars = document.querySelectorAll(".avatar");
avatars.forEach(avatar => {
  new Avatar(avatar);
});

feedbacks.forEach(feedback => new Drawer(feedback));