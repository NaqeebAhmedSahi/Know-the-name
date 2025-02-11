import './style.css'


document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>Hey 💖</h1>
    
    <button id="showPartner">Do you want to know your partner?</button>
    
    <h2 id="partnerName" class="hidden">Cheeko 💘</h2>

    <p id="loveText" class="hidden">Chinto ❤️ Cheeko</p>
  </div>
`;

document.querySelector("#showPartner").addEventListener("click", () => {
  document.querySelector("#partnerName").classList.remove("hidden");
  document.querySelector("#loveText").classList.remove("hidden");
});


