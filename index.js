    let number = 10;
    
    if (number < 0 || number% 2 !== 0 || number % 3 !== 0 || num % 6 !== 0) {
        console.log('LOSE');
      }  else {
            console.log('WIN');
        }
    

    let num1 = 1;
    let num2 = 0;
    let res;
    if (num1 > 0 && num2 > 0) {
        res = num1 * num2;
    } else {
        if ( num1 === 0 && num2 === 0) {
        res = 'NaN';
        }
     else {
            if ( num1 < 0 || num2 < 0 ) {
            res = num1 / num2;
        } else {
            if ( num1 === 0 ) {
            res = num2;
             } if (num2 === 0) {
                res = num1; 
             } 
             }
             }
        }
    console.log(res);