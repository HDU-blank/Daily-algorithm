//1.
function countIslands(arr){
    var counts = 0,
        N = arr.length,
        M = arr[0].length;
    if (arr == null || arr[0] == null) {
            return 0;
        }
    for (var i = 0;i < arr.length;i++){
        for (var j = 0;j < arr[0].length;j++){
            if (arr[i][j] == 1){
                counts ++;
                infect(arr,i,j,N,M);
            }
        }
    }
    return counts;
}

function infect(arr,i,j,N,M){
    if (i < 0 || i >= N || j < 0 || j >= M ||arr[i][j] != 1){
        return ;
    }
    arr[i][j] = 2;
    infect(arr,i+1,j,N,M);
    infect(arr,i-1,j,N,M);
    infect(arr,i,j+1,N,M);
    infect(arr,i,j-1,N,M);
}

var array1=[ [ 0,0,0,0,0,0,0,0,0 ], 
             [ 0,1,1,1,0,1,1,1,0 ], 
             [ 0,1,1,1,0,0,0,1,0 ],
             [ 0,1,1,0,0,0,0,0,0 ], 
             [ 0,0,0,0,0,1,1,0,0 ], 
             [ 0,0,0,0,1,1,1,0,0 ],
             [ 0,0,0,0,0,0,0,0,0 ] ],
    array2=[ [ 0,0,0,0,0,0,0,0,0 ],
             [ 0,1,1,0,1,1,1,1,0 ],
             [ 0,1,1,1,1,0,0,1,0 ],
             [ 0,1,1,0,0,0,0,1,0 ],
             [ 0,0,0,0,0,1,1,1,0 ],
             [ 0,0,0,0,1,1,1,0,0 ],
             [ 0,0,0,0,0,0,0,0,0 ] ];
countIslands(array1);

//2.
function maxArraySum(arr){
    if (arr == null || arr.length==0){
        return 0;
    }
    var cur = 0,
        max = -1000000;
    for(var i = 0;i<arr.length;i++){
        cur += arr[i];
        max = max>cur?max:cur;
        cur = cur>0?cur:0;
    }
    return max;
}
maxArraySum([1,-2,3,5,-2,6,-1]);