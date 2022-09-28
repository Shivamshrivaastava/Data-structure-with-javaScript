var isSymmetric =function(root){
    if(!root) return true;
    var stack =[];
    if(root.left && root.right){
        stack.push(root.right);
        stack.push(root.left);
    } else if(!root.left && !root.right) {
        return true;
    }else {
        return false;
    }
    while(stack.length>0){
        if(stack.length %2!==0) return false;
        var left = stack.pop();
        var right = stack.pop();
        if(left.val !== right.val) return false;
        if(left.left && right.right){
            stack.push(left.left,right.right);
        } else if((!left.left && right.right)|| (left.left && !right.right)) {
            return false;
        }
        if(right.left && left.right){
            stack.push(right.left,left.right);
        } else if((!right.left && left.right) ||(right.left && !left.right)){
            return false;
        }
    }
    return true
};