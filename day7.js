//非递归
function Fibonacci(n)
{
    if(n == 0) {
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

