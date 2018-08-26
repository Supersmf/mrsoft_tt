import httpGet from './httpGet';
import stringFilter from './stringFilter';
// import countFilter from './countFilter';

let url = 'http://www.mrsoft.by/data.json';
let info = null;
let result = null;
const inputElement = document.querySelector('#inputValue');
const registr = document.querySelector('#registr');
const buttonCount = document.querySelector('#byCount');
const buttonString = document.querySelector('#byString');
const resultValue = document.querySelector('#resultValue');
const list = document.createElement('ul');


httpGet(url)
    .then(response => info = JSON.parse(response),
        error => console.log(`Rejected: ${error}`)
    )

let paintList = function(arr) {
    list.innerHTML = '';
    arr.forEach((item) => {
        let newLi = document.createElement('li');
        newLi.textContent = item;
        list.appendChild(newLi);
    })
    resultValue.appendChild(list);
}

buttonString.addEventListener('click', (e) => {
    let result = stringFilter(info.data, inputElement.value, registr.checked);
    paintList(result);
});

buttonCount.addEventListener('click', (e) => {
    console.log(inputElement.value)
});