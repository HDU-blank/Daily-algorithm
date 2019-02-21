/**
 * @param {number[]} prices
 * @return {number}
 */

// 1.买卖股票的最佳时机
var maxProfit = function(prices) {
    let min = prices[0], max = 0;
    for (let i=1; i<prices.length; i++) {
        if(prices[i] < min) min = prices[i]
        else {
            max = max > prices[i]-min ? max : prices[i]-min;
        }
    }
    return max;
};

// 2.买卖股票的最佳时机 II
var maxProfit = function(prices) {
    if(prices.length === 0) return 0;
    let left = 0, right = 0, sum = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] <= prices[left]) {
            left++;
            right++;
        } else if (prices[i] >= prices[right]) {
            right++;
            sum += prices[right] - prices[left];
            left++;
        }
    }
    return sum;
};

// 3.买卖股票的最佳时机 III
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
    if (n == 0) return 0;
    if (k > n/2 ) {
        let res = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] - prices[i - 1] > 0) {
                res += prices[i] - prices[i - 1];
            }
        }
        return res;
    } else{
        let g = Array(k+1).fill(0), l = Array(k+1).fill(0);
        for (let i = 0; i < n - 1; i++) {
            let diff = prices[i + 1] - prices[i];
            for (let j = k; j >= 1; j--) {
                l[j] = Math.max(g[j - 1] + Math.max(diff, 0), l[j] + diff);
                g[j] = Math.max(l[j], g[j]);
            }
        }
        return g[k];
    }
};
