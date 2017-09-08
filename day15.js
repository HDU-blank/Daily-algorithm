function maxInWindows(num, size)
{
    if ( size <= 0){
        return [];
    }
    var deque = [0];
    
    var result = [];
    for (var i = 0;i<num.length;i++){
        while(deque.length!=0&&num[i]>num[deque[deque.length-1]]){
            deque.pop();
        }
        deque.push(i);  //双端队列存入的是数组下标
        while(deque.length>size||i-size>=deque[0]){
            deque.shift();
        }
        if (i>=size-1){
            result.push(num[deque[0]]);
        }
        
    }
    return result;
}
maxInWindows([16,14,12,10,8,6,4],5);