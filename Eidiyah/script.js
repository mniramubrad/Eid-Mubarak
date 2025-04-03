
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('name-form').style.display = 'none';
    document.getElementById('gift').style.display = 'block';
    document.getElementById('greeting').textContent = name + "، عيدك مبارك!";
    document.getElementById('pop-sound').play();
}
