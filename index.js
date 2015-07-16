var cssParser = require('css');
var reactStyle = require('react-style-syntax');
var StyleSheet = require('react-style');

module.exports = function(string){
  let object = reactStyle.transformString("StyleSheet.create`" + string + "`");
  console.log(object);
  return eval(object);
};
