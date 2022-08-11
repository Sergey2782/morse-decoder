const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let word = [];
    let expression = expr.split('');
  
      function getNumberAndCleanString(){
          let newStr = [];
          let tenSymbols =  expression.slice(0,10);
          let ind = tenSymbols.indexOf('1');
          let strWithoutZero = tenSymbols.slice(ind); 
            if( ind < 0){
              word.push(' ');
            }
            if( strWithoutZero[0] + strWithoutZero[1] == '10'){
              newStr.push('.');
            };
            if( strWithoutZero[0] + strWithoutZero[1] == '11'){ 
              newStr.push('-');                                  
            }
           if( strWithoutZero[2] + strWithoutZero[3] == '10'){   
              newStr.push('.'); 
            };
            if( strWithoutZero[2] + strWithoutZero[3] == '11'){ 
               newStr.push('-');                                 
            };
            if( strWithoutZero[4] + strWithoutZero[5] == '10'){
              newStr.push('.');
            };
            if( strWithoutZero[4] + strWithoutZero[5] == '11'){ 
              newStr.push('-');
            };
            if( strWithoutZero[6] + strWithoutZero[7] == '10'){
              newStr.push('.');
            };
            if( strWithoutZero[6] + strWithoutZero[7] == '11'){    
              newStr.push('-');
            };
             if( strWithoutZero[8] + strWithoutZero[9] == '10'){
              newStr.push('.');
            };
            if( strWithoutZero[8] + strWithoutZero[9] == '11'){   
              newStr.push('-');
            }; 
            for(let key in MORSE_TABLE){
                if( newStr.join('') === key ){
                    word.push(MORSE_TABLE[key]);
                 }
            }
            expression.splice(0,10);
            if(expression.length > 0 ){
              getNumberAndCleanString();
            }
  }
   getNumberAndCleanString();
     return word.join('');
  }
  
module.exports = {
    decode
}