import httpGet from './httpGet';
import stringFilter from './stringFilter';
import countFilter from './countFilter';
import './style/style.scss'

const url = 'http://www.mrsoft.by/data.json';
const inputElement = document.querySelector('.inputValue');
const registr = document.querySelector('.registr');
const buttonCount = document.querySelector('.btnCount');
const buttonString = document.querySelector('.btnString');
const resultValue = document.querySelector('.resultValue');
const list = document.createElement('ol');

let info = null;
let result = null;


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
    let result = countFilter(info.data, inputElement.value);
    paintList(result);
});