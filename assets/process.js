import Calc from './calculator.js'

    let myobj = {

    bracketControl  : (str) =>
    {
        let mystr = ''
        for(let i = 0; i<str.length; i++) {
            if( mystr[0] == '(' || str[i] == '(') {
                let bool = str.substring(i+1).includes('(')       
                if(!bool){
                    mystr += str[i]
                    if(str[i] == ')') {
                        break
                    }
                }        
            }        
        }
        let result = new Calc(mystr).result

        str = str.replace(mystr, result)

        return str
    },

    trigonometricControl : function (str) {
        let mynum = ''
        let myphrase = ''
        for(let i=0; i<str.length; i++) 
        {
            let num = parseFloat(str.slice(i+1))
            switch(str[i]) 
            {
                case '√' : { 
                    mynum = Math.sqrt(num)
                    myphrase = '√' + num
                }
                break
                case 'n' : {
                    if(str[i-1] == 'i') {
                        mynum = Math.sin(num)
                        myphrase = 'sin' + num
                    }
                    else {
                        mynum = Math.tan(num)
                        myphrase = 'tan' + num
                    }               
                }
                break
                case 's' : {
                    mynum = Math.cos(num)
                    myphrase = 'cos' + num
                }
                break 
                case 'g' : {
                    mynum = Math.log10(num)
                    myphrase = 'log' + num
                }
            }       
        }
        str = str.replace(myphrase,mynum)
        return str
    },

    result :  (str)  => 
    {
        while(str.includes('(')) {
            str = myobj.bracketControl(str)
        }
        
        while(str.includes('n') || str.includes('g') || str.includes('s') || str.includes('√')) {
            str = myobj.trigonometricControl(str)
        }
        
        str = new Calc(str).result
        return str    
    } 


    }


    export default myobj

