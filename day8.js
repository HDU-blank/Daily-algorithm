//1、青蛙跳台阶问题
function jumpFloor(n){
    if (n < 0) {
        throw new Error('输入的数字不能小于0');
    }
    var prev = 1,
        cur = 1;
    while ( n-- ){
        cur += prev;
        prev = cur-prev;
    }
    return prev;
}

//2、变态跳台阶问题--非递归,直接数学归纳出公式
function jumpFloorII(number){
    if (number < 0) {
        throw new Error('输入的数字不能小于0');
    }
    else if(number == 0) {
        return 0;
    }else{
        return Math.pow(2,number-1);
    }
}

//2、变态跳台阶问题--递归
function jumpFloorII(number){
    var result = 0;
    if (number < 0) {
        throw new Error('输入的数字不能小于0');
    }
    else if(number == 0) {
        return 0;
    }else if(number == 1){
        return 1;
    }else{
        for (var i=1;i<number;i++){
            result += jumpFloorII(number-i);
        } 
        result ++;
    }
    return result;
}
jumpFloorII(5);