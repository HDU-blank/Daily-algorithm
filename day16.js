/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
    let count = 0;
    if (n<=1) return count;
    for (let i=2; i<n; i++) {
        if(i===2 || i===3) {
            count++;
            continue;
        }
        if(i%2===0 || i%3===0){
            continue;
        }
        let nonPrime = 0;
        for(let j=5;j*j<=i;j+=6) {
            if (i%j===0 || i%(j+2)===0) {
                nonPrime = 1;break;
            }
        }
        if(!nonPrime) count++;
    }
    return count;
};
