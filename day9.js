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