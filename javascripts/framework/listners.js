var Listners = Listners || {
    init: function () {
        this.createListnerSelectChange({
            identifier:'#search-area select',
            functionality: TempStore.setDropDownVal
        });
        this.keyUpListner({
            identifier:'#search-area .search',
            functionality: TempStore.setTypedVal
        });
        this.addListerns({
            identifier:'#search-area .submit',

        });
        
    },
    createListnerSelectChange: function(obj) {
        var $this = jQuery(obj.identifier),
            _this = this;
  
        $this.change( function() {
            //console.log('I change function');
            //obj.eventAction = $this.find('option:selected').val();
            obj.functionality($this.find('option:selected').val());
            console.log(TempStore.getDropDownVal());

            //obj.eventAction = $this.find('option:selected').text();
            //console.log(obj.eventAction);
            //_this.pushToDataLayer(obj);
        });
    },
    createListnerButton: function(obj) {
        console.log(obj.identifier);
        var $this = jQuery(obj.identifier);
            

        $this.click(function(event) {
            event.preventDefault();
            //event.preventDefault();
            console.log('Button cliked');
            
            
        });

    },
    keyUpListner: function (obj){
        var $this = jQuery(obj.identifier);
        console.log('keyup Listners');
        $this.keyup(function(event){
            obj.functionality(this.value);
            //TempStore.setTypedVal(this.value);
            console.log(TempStore.getTypedVal());
        });
    },
    addListerns: function(obj) {
        var $this = jQuery(obj.identifier);
        //console.log('addListerns');
        //console.log(obj);
        console.log(obj.identifier);

        $this.on('click', function(event) {
            console.log('button click');
            MyEvent.eventHandlers(event);
           
        });


    },
    removeListners: function(obj) {
        var $this = jQuery(obj.identifier);
        $this.off();
    }
};