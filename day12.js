function kmpnext(str){
    var i = 0,
        j = 1,
        next = new Array(str.length);
        next[0] = 0;
    while(j<str.length){
        if (str[i] == str[j]){
            next[j] = i+1
            i++;
            j++;
        }else{
            if(i==0){
                next[j] = 0;
                j++;
            }else{
                i = next[i-1];
            }
        }
    }
    return next;
}

function kmpStr(str,substr){
    var index = [],
        lenStr = str.length,
        lenSub = substr.length,
        next = kmpnext(substr),
        i = 0,
        j = 0;
    while(i<lenStr&&j<lenSub){
        if(str[i] == substr[j]){
            i++;
            j++;
            if (j == lenSub){
                index.push(i-lenSub);
                j = 0;
            }
        }
        else
        {
            if (j == 0){
                i++;
            }
            else{
                j = next[j - 1];
            }
        }
    }
    return index;
}
kmpStr('abcabgfabcabfeaabcabfbc','abcabf');