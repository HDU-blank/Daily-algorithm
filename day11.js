//必须先排序吗？
function isArithmetic(arr){
    arr.sort(function(a,b){return a-b;});
    var d = arr[1]-arr[0];
    for (var i = 1;i<arr.length;i++){
        if (arr[i]-arr[i-1] != d){
            return false;
        }
    }
    return true;
}
isArithmetic([1,2,6,7]);