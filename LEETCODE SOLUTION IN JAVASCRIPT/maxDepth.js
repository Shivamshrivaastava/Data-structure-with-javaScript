var maxDepth = function(root){
    var max =0;
    var lmax = maxDepth(root.left);
        var rmax = maxDepth(root.right);
        if(lmax >rmax){
            root = root.left;
            max=lmax;
        }
        else {
            root = root.right;
            max = rmax;
        }
        return max +1;
   
}