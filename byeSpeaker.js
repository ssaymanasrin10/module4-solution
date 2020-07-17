@@ -0,0 +1,10 @@

(function(window)
{
	var byeSpeaker = {};
	var word ="Goodbye";
	byeSpeaker.speak = function (name) {
	console.log(word  + " " + name);
}
window.byeSpeaker = byeSpeaker;
})(window); 