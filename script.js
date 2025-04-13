let teams = [
  {
    name: "CHENNAI SUPER KINGS",
    logo: "https://www.chennaisuperkings.com/assets/images/mainlogo.png",
    color: "#fcdc04",
  },
  {
    name: "MUMBAI INDIANS",
    logo: "https://www.mumbaiindians.com/static-assets/images/cssimages/site-logo1.png",
    color: "#045093",
  },
  {
    name: "ROYAL CHALLENGERS BANGLORE",
    logo: "https://www.royalchallengers.com/themes/custom/rcbbase/images/rcb-logo-new.png",
    color: "#da1818",
  },
  {
    name: "KOLKATA KNIGHT RIDERS",
    logo: "https://www.kkr.in/static-assets/images/kkr-logo.png?v=1.9",
    color: "#3b0a45",
  },
  {
    name: "RAJASTHAN ROYALS",
    logo: "https://www.rajasthanroyals.com/static-assets/images/svg/logo.svg?v=4.86",
    color: "#ea1c95",
  },
  {
    name: "DELHI CAPITALS",
    logo: "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
    color: "#17449b",
  },
  {
    name: "PUNJAB KINGS",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg",
    color: "#d81e05",
  },
  {
    name: "SUNRISERS HYDERABAD",
    logo: "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
    color: "#f97516",
  },
  {
    name: "LUCKNOW SUPER GIANTS",
    logo: "https://www.lucknowsupergiants.in/static-assets/images/cssimages/svg/tracker-logo.svg?v=7.0",
    color: "#1e7d9c",
  },
  {
    name: "GUJRAT TITANS",
    logo: "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png",
    color: "#1c2c54",
  }
];

let btn = document.getElementById("guess-btn");
let nameEl = document.getElementById("team-name");
let logoEl = document.getElementById("team-logo");
let card = document.querySelector(".winner-card");

btn.addEventListener("click", () => {
  let randomTeam = teams[Math.floor(Math.random() * teams.length)];
  nameEl.textContent = randomTeam.name;
  logoEl.src = randomTeam.logo;
  card.style.background = randomTeam.color;

   // 🎉 Confetti animation
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
});


