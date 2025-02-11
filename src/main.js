import './style.css';

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>Hey 💖</h1>
    
    <button id="showPartner">Do you want to know your partner?</button>
    
    <h2 id="partnerName" class="hidden">Cheeko 💘</h2>

    <p id="loveText" class="hidden">Chinto ❤️ Cheeko</p>

    <div id="questionSection" class="hidden">
      <h3>Is it true? 🤔</h3>
      <button id="yesBtn">Yes</button>
      <button id="noBtn">No</button>
    </div>

    <p id="finalMessage" class="hidden"></p>
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
