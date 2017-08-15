//从1开始整数，剔除包含9的数字（9,19,29...）之后，返回排在第n个的数
function newInteger (n){
    var res = 0;
    var s = 1;
    while (n>0){
        res += n%9*s;
        n = parseInt(n/9);
        s *= 10;
    }
    return res;
}
newInteger(20);


