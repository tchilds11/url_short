'use strict';
console.log('Scripts Loaded');
const generateMadlib = document.querySelector('#madlibValues');
generateMadlib.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputSelectors = document.querySelectorAll('input');
    const team1 = document.querySelector("#team1");
    const team2 = document.querySelector("#team2");
    const verb1 = document.querySelector('#verb1');
    const verb2 = document.querySelector('#verb2');
    const verb3 = document.querySelector('#verb3');
    inputSelectors.forEach(function(inputItem) {
        if (inputItem.name === 'userTeam1') {
            team1.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'userTeam2') {
            team2.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'userVerb1') {
            verb1.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'userVerb2') {
            verb2.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'userVerb3') {
            verb3.innerHTML = inputItem.value;
        }
    })
})