/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//  1、顺时针旋转图像
const clockRotate = function(matrix) {
    let len = matrix[0].length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            [matrix[i][j], matrix[len - 1 - j][len - 1 - i]] = [matrix[len - 1 - j][len - 1 - i], matrix[i][j]];
        }
    }
    for (let i = 0; i < len / 2; i++) {
        for (let j = 0; j < len; j++) {
            [matrix[i][j], matrix[len - 1 - i][j]] = [matrix[len - 1 - i][j], matrix[i][j]];
        }
    }
    return matrix;
};

//  2、逆时针旋转图像
const rotate = function(matrix) {
    let len = matrix[0].length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < len / 2; i++) {
        for (let j = 0; j < len; j++) {
            [matrix[i][j], matrix[len - 1 - i][j]] = [matrix[len - 1 - i][j], matrix[i][j]];
        }
    }
    return matrix;
};
