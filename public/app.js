import Control from '../control.js'
import Process from '../process.js'


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






























