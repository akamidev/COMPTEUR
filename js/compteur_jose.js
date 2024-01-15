/*=========================================================================
                          TP :  COMPTEUR
=========================================================================*/
const compteur = document.getElementById('count');
const boutonPlus = document.getElementById('add');
const boutonMoins = document.getElementById('substract');
const boutonReset = document.getElementById('reset');
const boutonTheme = document.getElementById('theme');
/* <!-- 🌞 --> */

function updateCompteur(val) {
    let nouvelle = 0;
    switch (val) {
        case 'add':
            nouvelle = parseInt(compteur.innerText) + 1;
            compteur.innerText = nouvelle;
            break;
        case 'substract':
            nouvelle = parseInt(compteur.innerText) - 1;
            compteur.innerText = nouvelle;
            break;
        case 'reset': ;
            compteur.innerText = nouvelle;
            break;
        default:
            compteur.innerText = "0";
    }
}
function changeColor() {
    if (compteur.innerText > 0) {
        compteur.style.color = 'green';
    } else if (compteur.innerText < 0) {
        compteur.style.color = 'red';
    } else {
        compteur.style.color = 'white';
    }
}

function changeTheme() {

    // if (boutonTheme.innerText === '🌜') {
    //     boutonTheme.style.backgroundColor = 'black';
    //     boutonTheme.innerText = '🌞';
    //     document.body.style.backgroundColor = '#000';
    // } else {
    //     boutonTheme.style.backgroundColor = 'white';
    //     boutonTheme.innerText = '🌜';
    //     document.body.style.backgroundColor = '#fff';
    // }

    document.body.classList.toggle('nightMode');

    // ternaire non factorisée
    (document.body.classList.contains('nightMode')) ? boutonTheme.textContent = '🌞' : boutonTheme.textContent = '🌜';

    // ternaire factorisée (DRY = Don't repeat Yourself)
    const nightMode = document.body.classList.contains('nightMode');
    boutonTheme.textContent = nightMode ? '🌞' : '🌜';

}

boutonPlus.addEventListener('click', function () {
    updateCompteur('add');
    changeColor();
});
boutonMoins.addEventListener('click', function () {
    updateCompteur('substract');
    changeColor();
});
boutonReset.addEventListener('click', function () {
    updateCompteur('reset');
    changeColor();
});
boutonTheme.addEventListener('click', function () {
    changeTheme();
});
