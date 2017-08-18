function IsContinuous(numbers){
    var count = 0,
        arr = numbers;
    if (numbers == null || numbers.length != 5){
        return false;
    }
    for (var i = 0;i<5;i++){
        if (numbers[i] == 0){
            count ++;
        }else if(arr[i]!=0&&arr.indexOf(arr[i],i+1) != -1){
            return false;
        }
    }
    numbers = arr.sort(function(a,b){return a-b;});
    if (numbers[4]>13){return false;}
    else if(count == 5 || count == 4){return true;}
    else if (numbers[4]-numbers[count]<5){return true;}
    else {return false;}
}