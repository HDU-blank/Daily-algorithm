//非递归-1
function Fibonacci(n){
    if (n < 0) {
        throw new Error('输入的数字不能小于0');
    }
    var prev = 0,
        cur = 1;
    while ( n-- ){
        cur += prev;
        prev = cur-prev;
    }
    return prev;
}
//非递归-2
function Fibonacci(n){
    if (n < 0) {
        throw new Error('输入的数字不能小于0');
    }
    else if(n == 0) {
        return 0;
    }else if(n == 1) {
        return 1;
    }
    var fibona = [0,1]
    for (var i = 2;i<n+1;i++){
        fibona.push(fibona[i-1]+fibona[i-2]);
    }
    return fibona.pop();
}
//递归
function Fibonacci(n){
    if (n < 0) {
        throw new Error('输入的数字不能小于0');
    }
    else if(n == 0) {
        return 0;
    }else if(n == 1) {
        return 1;
    }
    else{
        return Fibonacci(n-2)+Fibonacci(n-1);
    }
}
