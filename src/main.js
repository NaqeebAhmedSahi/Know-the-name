import './style.css';

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>Hey 💖</h1>
    
  </div>
`;

document.querySelector("#showPartner").addEventListener("click", () => {
  document.querySelector("#partnerName").classList.remove("hidden");
  document.querySelector("#loveText").classList.remove("hidden");
  document.querySelector("#questionSection").classList.remove("hidden");
});

document.querySelector("#yesBtn").addEventListener("click", () => {
  document.querySelector("#finalMessage").innerText = "You are deeply in love with Cheeko ❤️";
  document.querySelector("#finalMessage").classList.remove("hidden");
});

document.querySelector("#noBtn").addEventListener("click", () => {
  document.querySelector("#finalMessage").innerText = "I know in your heart you don’t want to touch No, so click Yes...";
  document.querySelector("#finalMessage").classList.remove("hidden");
});
