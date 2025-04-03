document.getElementById("name-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    document.getElementById("message").style.display = "block";
    document.querySelector("#message h1").innerText = `${name}، عيدك مبارك!`;
    document.getElementById("pop-sound").play();
});