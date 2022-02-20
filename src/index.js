

import Control from '../assets/control.js'
import Process from '../assets/process.js'


const Result = Process.result

const CharControl = Control.charControl

const DelControl = Control.delControl



// Dom Manipulation

const input = document.getElementById('input')
const del = document.getElementById('del')
const ce = document.getElementById('ce')
const equal = document.getElementById('equal')

const nums = document.querySelectorAll('.nums')



window.addEventListener('keyup', (e) => {
    e.preventDefault()

    nums.forEach(element => {
        if (e.key == element.innerHTML) {
           input.value = CharControl(e.key, input.value)
        }
    });

    switch (e.key) {
        case '*': input.value = CharControl('×',input.value)
            break

        case 'Backspace': input.value = DelControl(input.value)
            break

        case '=': input.value = isNaN(Result(input.value)) ? input.value : Result(input.value)
            break
        
        case 'Enter': input.value = isNaN(Result(input.value)) ? input.value : Result(input.value)
    }

})


nums.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        input.value = CharControl(element.innerHTML, input.value)
    })
});


del.addEventListener('click', () => {
    input.value = DelControl(input.value)
})

ce.addEventListener('click', deletAll)

equal.addEventListener('click', () => {
    input.value = isNaN(Result(input.value)) ? input.value : Result(input.value) 
})


function deletAll() {
    input.value = ''
}



// Firebase

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD96PKpH-LtNAzqK_gmgk6j_a2Jhmnu9rw",
  authDomain: "ibrahimcalculator.firebaseapp.com",
  projectId: "ibrahimcalculator",
  storageBucket: "ibrahimcalculator.appspot.com",
  messagingSenderId: "1012335437822",
  appId: "1:1012335437822:web:6c2100f929b39ef7e682af",
  measurementId: "G-BD5SE40J8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


























