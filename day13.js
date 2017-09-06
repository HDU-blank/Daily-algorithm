function Nodes(data){
    this.data = data;
    this.right = null;
    this.left = null;
}
function reConstructBinaryTree(pre, vin){       //pre为先序遍历，vin为中序遍历
    if(pre.length == 0 || vin.length == 0 ) {
        return null;
    }
    var binaryTree = new Nodes(pre[0]);
    var index = vin.indexOf(pre[0]);
    var preleft = pre.slice(1,index+1),
        preright = pre.slice(index+1),
        vinleft = vin.slice(0,index),
        vinright = vin.slice(index+1);
        binaryTree.left = reConstructBinaryTree(preleft, vinleft);
        binaryTree.right = reConstructBinaryTree(preright, vinright);
    return binaryTree;
}
reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]);