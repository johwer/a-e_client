var TempStore = TempStore  || {
    init: function () {
        this.dropdown = 'bo';
        this.clicked ='';
        this.typed = '';
    },
    setDropDownVal: function(val) {
    	console.log('set val');
    	TempStore.dropdown = val;
    	console.log(TempStore.dropdown);
    },
    getDropDownVal: function() {
    	console.log('getDropDownVal');
    	return TempStore.dropdown;
    },
    setClickedVal: function(val) {
    	console.log(val);
    	TempStore.clicked = val;
    },
    getClickedVal: function () {
    	return TempStore.clicked;
    },
    setTypedVal: function(val){
    	console.log(val);
    	TempStore.typed = val;
    },
    getTypedVal: function () {
    	return TempStore.typed;
    }
 
}
TempStore.init();