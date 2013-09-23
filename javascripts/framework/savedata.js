var tempStore = tempStore  || {
    init: function () {
        this.dropdown = 'bo';
    },
    setDropDownVal: function(val) {
    	console.log('set val');
    	tempStore.dropdown = val;
    	console.log(tempStore.dropdown);
    },
    getDropDownVal: function() {
    	console.log('getDropDownVal');
    	return tempStore.dropdown;
    }
 
}
tempStore.init();