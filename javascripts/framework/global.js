if (typeof console == "undefined") {
        window.console = {
        log: function () {}
        };
}
function addOnLoadFunction(func) { 
	if (window.attachEvent) {
		window.attachEvent('onload', func);
	}
	else {
		window.addEventListener('load', func);
	}
}
if (!String.prototype.trim) {
	   //code for trim
	   console.log('Running');
		String.prototype.trim = function() {
		   return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');	   
		};
}