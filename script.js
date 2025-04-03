
function openGift() {
    document.querySelector('.gift-box').style.display = 'none';
    document.getElementById('open-btn').style.display = 'none';
    document.getElementById('message').style.display = 'block';

    const sound = document.getElementById("pop-sound");
    sound.play();
}
