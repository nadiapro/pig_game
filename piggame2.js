var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var currentscore1 = document.getElementById('currentscore1');
var currentscore2 = document.getElementById('currentscore2');
var current1 = document.getElementById('current1');
var current2 = document.getElementById('current2');
var firstp = document.getElementById('firstp');
var secondp = document.getElementById('secondp');
var roll = document.getElementById('roll');
var hold = document.getElementById('hold');
var imgg = document.getElementById('imgg');
var newgame = document.getElementById('newgame');
var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');
var start = document.getElementById('start');
var cscore1, cscore2, sscore1, sscore2, startgame, dice6, winscore;

newplay();
start.addEventListener('click', statrtt)

function statrtt() {
    var inp = document.getElementById('inp').value;
    if (inp) {
        winscore = inp;
    } else {
        winscore = 100;
        document.getElementById('inp').value = 100;
    }

    console.log(winscore);
}
roll.addEventListener('click', rolling);

function rolling() {
    if (startgame == true) {
        var dice = Math.floor(Math.random() * 6) + 1;

        if (firstp.classList.contains('active')) {
            if (dice !== 1) {
                imgg.style.display = 'block';
                imgg.src = `dice-${dice}.png`;
                cscore1 += dice;
                currentscore1.textContent = cscore1;
                if (dice == 6) {
                    if (dice6 == true) {
                        sscore1 = 0;
                        cscore1 = 0;
                        score1.textContent = '0';
                        currentscore1.textContent = '0';
                        firstp.classList.toggle('active');
                        secondp.classList.toggle('active');
                        dice6 = false;
                    } else { dice6 = true }
                } else { dice6 = false }

            } else {
                cscore1 = 0;
                currentscore1.textContent = 0;
                imgg.style.display = 'block';
                imgg.src = `dice-${dice}.png`;
                firstp.classList.toggle('active');
                secondp.classList.toggle('active');
                dice6 = false;
            }

        } else {
            if (dice !== 1) {
                imgg.style.display = 'block';
                imgg.src = `dice-${dice}.png`;
                cscore2 += dice;
                currentscore2.textContent = cscore2;
                if (dice == 6) {
                    if (dice6 == true) {
                        sscore2 = 0;
                        cscore2 = 0;
                        score2.textContent = '0';
                        currentscore2.textContent = '0';
                        firstp.classList.toggle('active');
                        secondp.classList.toggle('active');
                        dice6 = false;
                    } else { dice6 = true }
                } else { dice6 = false }

            } else {
                cscore2 = 0;
                currentscore2.textContent = 0;
                imgg.style.display = 'block';
                imgg.src = `dice-${dice}.png`;
                firstp.classList.toggle('active');
                secondp.classList.toggle('active');
                dice6 = false;
            }
        }
    }
}
hold.addEventListener('click', holding);

function holding() {
    if (startgame == true) {
        if (firstp.classList.contains('active')) {
            sscore1 += cscore1;
            score1.textContent = sscore1;
            cscore1 = 0;
            currentscore1.textContent = 0;
            firstp.classList.toggle('active');
            secondp.classList.toggle('active');
            imgg.style.display = 'none';
            dice6 = false;

            if (sscore1 > winscore) {
                h1.innerHTML = '<p>winner</p>';
                startgame = false;
            }
        } else {
            sscore2 += cscore2;
            score2.textContent = sscore2;
            currentscore2.textContent = 0;
            cscore2 = 0;
            firstp.classList.toggle('active');
            secondp.classList.toggle('active');
            imgg.style.display = 'none';
            dice6 = false;
            if (sscore2 > winscore) {
                h2.innerHTML = '<p>winner</p>';
                startgame = false;
            }
        }
    }
}

newgame.addEventListener('click', newplay)

function newplay() {
    score1.textContent = 0;
    score2.textContent = 0;
    currentscore1.textContent = 0;
    currentscore2.textContent = 0;
    imgg.style.display = 'none';
    firstp.classList.add('active');
    secondp.classList.remove('active');
    startgame = true;
    dice6 = false;
    cscore1 = 0;
    cscore2 = 0;
    sscore1 = 0;
    sscore2 = 0;
    document.getElementById('inp').value = '';
}