let myobj = {

    charControl: function (char,input) {
    let signs = '+-×/'
    let last = input.slice(-1)
    let otherSigns = ['sin', 'cos', 'tan', 'log', '√']


    if(signs.includes(char, input)) 
    {
         if(!last) {
            input = input
        }
        else if (last == '(') {
            input = input
        }
        else if (signs.includes(last)) {
            input = input.slice(0, -1)
            input += char
        }
        else if (!signs.includes(last)) {
            input += char
        }
        

    }

    else if('()'.includes(char)) 
    {
        if(char == '(') 
        {
            if(!last) {
                input += '('
            }
            else if (last == '(') {
                input += '('
            }
            else if(signs.includes(last)) {
                input += '('
            }
            else {
                input += '×('
            }
        }


        else 
        {
            if(signs.includes(last)) {
                input = input
            }
            else {
                input += char
            }
        }

    }

    else if (otherSigns.includes(char)) {
        if(!signs.includes(last)) {
            input +=  '×'+ char + '('
        }
        else {
            input += char + '('
        }
        
    }

    else 
    {
        if(last == ')') {
            input += '×' + char
        }
        else {
            input += char
        }   
    }

    return input
},

delControl : function (input) 
{
    let signs = ['n(','s(','g(']

    let char = input.slice(-2)

    if(signs.includes(char)) {
        input = input.slice(0, -4)
    }
    
    else if (char == '√(') {
        input = input.slice(0, -2)
    }

    else {
        input = input.slice(0, -1)
    } 
    return input
}




}

export default myobj