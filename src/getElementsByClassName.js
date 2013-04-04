var getElementsByClassName = function (className) {
  var result = [];
  var callRecursivefunction = function (node) {
    if ((node.classList) && (node.classList.length > 0)) {
      if (_.contains(node.classList, className)) {
        result.push(node);
      }
    }
    if (node.childNodes.length > 0) {
      for (var j = 0; j < node.childNodes.length; j++) {
        callRecursivefunction(node.childNodes[j]);
      }
    }
  }
  callRecursivefunction(document.body);
  return result;
}