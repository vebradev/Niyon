console.log("👋");

// Burger menu
const menuBurger = document.querySelector(".menu-burger");
menuBurger.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("open");
});

// Feedback creation

const feedbacks = [
  {
    name: "Jon Wayne",
    occupation: "Physicist",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
    quote: "Lorem ipsum generatus mer bits un. Speron kaqun hin hadun."
  },
  {
    name: "Arya Robertson",
    occupation: "Archer",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    quote: "Moterinsun qvato respin dube. Shamar lekas bazar judmanti ividu!"
  },
  {
    name: "Kin Soul",
    occupation: "Archer",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    quote: "Lorem ipsum generatus mer bits un. Speron kaqun hin hadun.!"
  }
];

class Feedback {
  constructor(feedback) {
    this.feedback = feedback;
    this.name = feedback.name;
    this.occupation = feedback.occupation;
    this.quote = feedback.quote;
    this.profile();
  }

  profile() {
    const profile = document.createElement("span");
    profile.textContent = `Head of ${this.name}`;
    quotesBody.appendChild(profile);
    console.log("draw the head");
    console.log(profile);
  }
}

feedbacks.forEach(feedback => console.log(feedback));

feedbacks.forEach(feedback => {
  new Feedback(feedback);
});
