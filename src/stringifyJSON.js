(function () {
  window.stringifyJSON = function (obj) {
    var result = '';
    switch (findType(obj)) {
    case 'string':
      return '"' + escapeChars(obj) + '"';
    case 'array':
      result += stringifyAry(obj);
      break;
    case 'object':
      result += stringifyObject(obj);
      break;
    default:
      return obj;
    }
    return result;
  };

  var escapeChars = function (val) {
    val = val.replace(/\\/g, "\\\\");
    val = val.replace(/\"/g, "\\\"");
    return val;
  };

  var findType = function (obj) {
    if (obj === null) {
      return "null";
    } else if (Array.isArray(obj)) {
      return "array";
    } else {
      return typeof obj;
    }
  };

  var stringifyAry = function (obj) {
    var result = "";
    for (var i = 0; i < obj.length; i++){
      result += stringifyJSON(obj[i]);
      if(i < obj.length-1){
        result += ',';
      }
    }
    return "[" + result + "]";
  };

  var stringifyObject = function (obj) {
    var propertyArray = [];
    _.each(obj, function(value, key) {
      if ((typeof value !== 'function') && (typeof value !== 'undefined')) {
        propertyArray.push('"' + key + '":' + stringifyJSON(value));
      }
    });
    return "{" + propertyArray.join(",") + "}";
  }
}());