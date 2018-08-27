import httpGet from './httpGet';
import stringFilter from './stringFilter';
import countFilter from './countFilter';
import './style/style.scss'

const url = 'https://cors.io/?http://www.mrsoft.by/data.json';
const inputElement = document.querySelector('.inputValue');
const registr = document.querySelector('.registr');
const buttonCount = document.querySelector('.btnCount');
const buttonString = document.querySelector('.btnString');
const note = document.querySelector('.note');
const resultValue = document.querySelector('.resultValue');
const list = document.createElement('ol');

let info = null;
let result = null;


httpGet(url)
    .then(response => info = JSON.parse(response))
    .catch(error => {
        resultValue.textContent = `Something is wrong,
    						 check the connection or the correctness 
    						 of the URL. ${error.message}`;
    	resultValue.style.color = 'red';
    }
);

let paintList = function(arr, value) {
    list.innerHTML = '';
    arr.forEach((item) => {
        let newLi = document.createElement('li');
        newLi.textContent = item;
        list.appendChild(newLi);
    })
    if (!list.children.length && !arr.length) {
        if(isNaN(value)){
        	list.textContent = `No rows found with string "${value}"`;
        }else {
        	list.textContent = `No rows with such a long character "${value}"`;
        }
        
    }
    resultValue.appendChild(list);
}

buttonString.addEventListener('click', (e) => {
    let inputNum = inputElement.value;
    note.textContent = '';
    if (isNaN(inputNum) || !inputNum.length) {
        let result = stringFilter(info.data, inputElement.value, registr.checked);
        paintList(result, inputElement.value);
    } else {
        note.textContent = 'Type letters if use "By string"';
    }
});

buttonCount.addEventListener('click', (e) => {
    let inputNum = +inputElement.value;
    note.textContent = '';
    if (!isNaN(inputNum)) {
        let result = countFilter(info.data, inputNum);
        paintList(result, inputNum);
    } else {
        note.textContent = 'Type numbers if use "By count"';
    }

});