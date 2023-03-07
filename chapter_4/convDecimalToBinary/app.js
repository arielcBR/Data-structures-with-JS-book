const Stack = require('./Stack');

function convertingDecToBinary(num) {
    const stack = new Stack();
    let binaryNum = '';
    let decNum = num;
    let rest;

    if (typeof num === 'number' && num >= 0) {
        if (!decNum) {
            binaryNum = '0';
        }
        else {
            while (decNum > 0) {
                rest = Math.floor(decNum % 2);
                stack.push(rest);
                decNum = Math.floor(decNum / 2);
            }
    
            while (!stack.isEmpty()) {
                binaryNum += stack.pop().toString();;
            }
        }

        console.log(`Decimal: ${num} - Binary: ${binaryNum}`);
        return binaryNum;

    }

    else
        return undefined;
}

convertingDecToBinary(10); // 10 decimal
convertingDecToBinary(12); // 12 decimal
convertingDecToBinary(37); // 37 decimal
convertingDecToBinary(49); // 49 decimal
convertingDecToBinary('a');
convertingDecToBinary(0);
convertingDecToBinary(-10); 
