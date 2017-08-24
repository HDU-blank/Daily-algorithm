//1、01矩阵中最大矩形面积
function maxRectArea(height) {
    var result = 0;
    for (var i = 0;i < height.length;i ++){
        if (i+1 < height.length && height[i]<height[i+1]){
            continue;
        }
        var minH = height[i];
        for (var j = i;j >= 0; --j){
            minH = Math.min(minH,height[j]);
            var area = minH*(i-j+1);
            result = Math.max(result,area);
        }
    }
    return result;
}

function maximalRectangle(array){
    if (array == null || array.length == 0 || array[0].length == 0){
        return 0;
    }
    var lenW = array.length,
        lenH = array[0].length,
        max = 0;
    var newArr = new Array(lenH).fill(0);
    for (var i = 0;i < lenW;i++){
        for (var j = 0;j<lenH;j++){
            if (array[i][j] != 0){
                newArr[j] += parseInt(array[i][j]);
            }else{
                newArr[j] = 0;
            }
        }
        max = maxRectArea(newArr)>max?maxRectArea(newArr):max;
    }
    return max;
}
var array = [[0,1,0,1,0,0],[0,1,1,0,0,1],[1,1,1,0,1,0],[0,0,0,0,0,1]];
maximalRectangle(array);

//2、01矩阵中最大正方形面积
function maximalSquare(arr){
    var max = 0,
        lenH = arr.length,
        lenW = arr[0].length;
    for (var i = 1;i<lenH;i++){
        for (var j = 1;j<lenW;j++){
            if (arr[i][j] == 1){
                arr[i][j] = Math.min(arr[i-1][j],Math.min(arr[i-1][j-1],arr[i][j-1]))+1;
                max = arr[i][j]>max?arr[i][j]:max;
            }
        }
    }
    return max*max;
}
var array = [[0,1,1,1,0,0],[0,1,1,1,0,1],[1,1,1,1,1,0],[0,0,0,0,0,1]];
maximalSquare(array);