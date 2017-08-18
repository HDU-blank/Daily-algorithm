function printMatrix(matrix){
    var hlen = matrix.length,
        wlen = matrix[0].length,
        len = Math.floor(hlen*wlen),
        i = 0,
        j = 0,
        k = 0,
        count = 1,
        result = [],
        status = true,
        wadd = true,
        hadd = true;
    while (k<len){
        if (status){
            if (count<wlen&&wadd){
                result.push(matrix[i][j]);
                j++;
                count++;
                k++;
            }else if(count<wlen&& !wadd){
                result.push(matrix[i][j]);
                j--;
                count++;
                k++;
            }else if(wadd){
                result.push(matrix[i][j]);
                hlen--;
                i++;
                k++;
                status = !status;
                wadd = !wadd;
                count = 1;
            }else{
                result.push(matrix[i][j]);
                hlen--;
                i--;
                k++;
                wadd = !wadd;
                status = !status;
                count = 1;
            }
        }else{
            if (count<hlen&&hadd){
                result.push(matrix[i][j]);
                i++;
                count++;
                k++;
            }else if (count<hlen&& !hadd){
                result.push(matrix[i][j]);
                i--;
                count++;
                k++;
            }else if(hadd){
                result.push(matrix[i][j]);
                j--;
                wlen--;
                k++;
                status = !status;
                count = 1;
                hadd = !hadd;
            }else{
                result.push(matrix[i][j]);
                j++;
                wlen--;
                k++;
                status = !status;
                count = 1;
                hadd = !hadd;
            }
        }
    }
    return result;
}

matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
printMatrix(matrix);
