var haspathSum = function (root) {
  if (!root) return false;
  if (root.val === sum && !root.left && !root.right) return true;
  if (haspathSum(root.left, dum - root.val)) return true;
  if (haspathSum(root.right, sum - root.val)) return true;
  return false;
};
