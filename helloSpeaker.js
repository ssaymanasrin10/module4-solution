@@ -0,0 +1,11 @@

(function(window)
{
	var helloSpeaker = {};
var word ="hello";
helloSpeaker.speak = function (name) {
	console.log(word  + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);
