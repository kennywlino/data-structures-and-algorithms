function treeIntersections (treeA, treeB) {
  let table = new HashTable(1024);
  let intersectedValues = [];
  function traverseTrees(tree, treeName) {
    if(node.tree)traverse(node.left);
    if(node.tree)traverse(node.right);
    if(table.has(node.value) &&
    table.get(node.value) !== treeName){
      intersectedValue.push(node.value);
    } else {
      HashTable.set(node.value, treeName);
    }
    return intersectedValues;
  }
}

