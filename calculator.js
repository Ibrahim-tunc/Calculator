'use strict'


class Calculator {
    input = ''
    myInput = ''
    sums = []
    multi = 1
    lastSign = '+'
    result

    constructor(input) {
        this.input = input
        this.equal()
    }

     equal() {
        this.process(this.input)
        this.result = this.totalProcess()
    } 

    process(input) {
        input = input.concat('+')

        for (let char of input) {
            this.myInput += char
            this.signCtrl(char)
        }
    }    

    signCtrl(sign) {
        switch (sign) {
            case '+':
            case '-': this.sum(sign)
                break
            case '×':
            case '/': this.mult(sign)
                break
            case '(':
            case ')': this.myInput = this.myInput.slice(0, -1)
        }
    }

    mult(sign) {  
        let temp = parseFloat(this.myInput)
        
        if(this.lastSign == '/') {
            this.multi /=temp
        }
        else {        
            this.multi *= this.lastSign == '-' ? -temp : temp
        }

        this.lastSign = sign
    
        this.myInput = ''
    }

    sum(sign) {
        let temp = parseFloat(this.myInput)
        
        switch (this.lastSign) {
            case '×': {
                this.multi *= temp
                this.sums.push(this.multi)
                this.multi = 1
            }
                break
    
            case '/': {
                this.multi /= temp
                this.sums.push(this.multi)
                this.multi = 1
            }
                break
    
            case '-':
                this.sums.push(-temp)
                break
    
            case '+':
                this.sums.push(temp)
    
        }
        this.myInput = ''
        this.lastSign = sign
    }

    totalProcess() {
        let result = 0
        this.sums.forEach(e => {
            result += e
        })
        
        result = result.toFixed(6)
        result = parseFloat(result)
        result = result.toString() 

        return result
    }

}

export default Calculator

