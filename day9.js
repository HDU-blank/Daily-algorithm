function largestRectangleArea(heights) {
    var result = 0;
    for (var i = 0;i < heights.length;i ++){
        if (i+1 < heights.length && heights[i]<heights[i+1]){
            continue;
        }
        var minH = heights[i];
        for (var j = i;j >= 0; --j){
            minH = Math.min(minH,heights[j]);
            var area = minH*(i-j+1);
            result = Math.max(result,area);
        }
    }
    return result;
}
