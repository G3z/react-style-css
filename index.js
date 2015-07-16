var cssParser = require('css');
var reactStyle = require('react-style-syntax');
var StyleSheet = require('react-style');

module.exports = function(string){
  var object = reactStyle.transformString("StyleSheet.create`" + string + "`");
  return eval(object);
};
