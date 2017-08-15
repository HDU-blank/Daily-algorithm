//1、已知一个字符串都是由左括号(和右括号)组成，判断该字符串是否是有效的括号组合。
function isValid(str){
    if (str == null)
    {
        return false;
    }
    var chas = str.split("");
    var status = 0;
    for (var i = 0; i < chas.length; i++)
    {
        if (chas[i] != ')' && chas[i] != '(' && chas[i] != ',')
        {
            return false;
        }
        if (chas[i] == ')' && --status < 0)
        {
            return false;
        }
        if (chas[i] == '(')
        {
            status++;
        }
    }
    return status == 0;
}
var str = "()(),(()),(()())";
var str2 = "(,()),((),()(()";
isValid(str);
//2、题目进阶： 已知一个字符串都是由左括号(和右括号)组成，返回最长有效括号子串的长度。
function maxLength(str){
    if (str == null)
    {
        return false;
    }
    var chas = str.split(""),
        status = 0,
        max = 0,
        cur = 0;
    for (var i = 0; i < chas.length; i++)
    {
        if (chas[i] != ')' && chas[i] != '(' && chas[i] != ',')
        {
            return false;
        }
        else if (chas[i] == '(')
        {
            status++;
            cur ++;
        }
        else if (chas[i] == ')' && status > 1){
            status--;
            cur ++;
        }
        else if (chas[i] == ')' && (status==1)){
            status--;
            cur ++;
            max = max>cur?max:cur;
        }
        else if (chas[i] == ')' && status < 1)
        {
            cur = 0;
            status = 0;
        }
    }
    return max;
}
var str = "(()),((())";
var str2 = "(()()))(())()(()";
isValid(str);