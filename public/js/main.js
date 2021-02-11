const btnStart = document.getElementById('start');

btnStart.addEventListener("click", startMusic);
btnStart.addEventListener("click", coverSlide);
btnStart.addEventListener("click", dltButton);

function test() {
    console.log('test');
}

function startMusic() {
    var audio = document.getElementById('audio');
    audio.volume = 0.2;
    audio.play();
}

function coverSlide() {
    console.log('test');
    document.getElementById('cover').classList.add('slide');
}

function dltButton() {
    btnStart.style.display = "none";
    setTimeout(function() {
        document.getElementById('cover').style.display = "none";
    }, 3000)
};