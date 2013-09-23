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