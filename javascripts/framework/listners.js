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
            identifier:'#search-area .searchSubmit',

        });
        this.addListerns({
            identifier:'#view-area .editButton',

        });
        this.addListerns({
            identifier:'#search-area .addMemberButton',

        });
        this.addListerns({
            identifier:'#view-area .removeButton',

        });
        this.addListerns({
            identifier:'#popup .closeButton',

        });
        /*
        this.addListerns({
            identifier:'#search-area .downloadCSV',
        });
        */
        
    },
    editAdd: function () {
        console.log('add Listners');
        Listners.keyUpListner({
            identifier:'#popup .member_id',
            functionality: TempStore.setMember_id
        });
        this.keyUpListner({
            identifier:'#popup .password',
            functionality: TempStore.setPassword
        });
        this.keyUpListner({
            identifier:'#popup .encrypted_password',
            functionality: TempStore.setEncrypted_password
        });
        this.keyUpListner({
            identifier:'#popup .first_name',
            functionality: TempStore.setFirst_name
        });
        this.keyUpListner({
            identifier:'#popup .last_name',
            functionality: TempStore.setLast_name
        });
        this.keyUpListner({
            identifier:'#popup .email',
            functionality: TempStore.setEmail
        });
        this.keyUpListner({
            identifier:'#popup .country',
            functionality: TempStore.setCountry
        });
        this.keyUpListner({
            identifier:'#popup .city',
            functionality: TempStore.setCity
        });
        this.keyUpListner({
            identifier:'#popup .area_code',
            functionality: TempStore.setArea_code
        });
        this.keyUpListner({
            identifier:'#popup .company_name',
            functionality: TempStore.setCompany_name
        });
        this.keyUpListner({
            identifier:'#popup .address',
            functionality: TempStore.setAddress
        });
        this.keyUpListner({
            identifier:'#popup .phone_daytime',
            functionality: TempStore.setPhone_daytime
        });
        this.keyUpListner({
            identifier:'#popup .phone_home',
            functionality: TempStore.setPhone_home
        });
        this.keyUpListner({
            identifier:'#popup .phone_cellular',
            functionality: TempStore.setPhone_cellular
        });
        this.keyUpListner({
            identifier:'#popup .fax',
            functionality: TempStore.setFax
        });
        this.keyUpListner({
            identifier:'#popup .birthdate',
            functionality: TempStore.setBirthdate
        });
        this.keyUpListner({
            identifier:'#popup .sex',
            functionality: TempStore.setSex
        });
        this.keyUpListner({
            identifier:'#popup .civil_status',
            functionality: TempStore.setCivil_status
        });
        this.keyUpListner({
            identifier:'#popup .occupation',
            functionality: TempStore.setOccupation
        });
        this.keyUpListner({
            identifier:'#popup .traveller_type',
            functionality: TempStore.setTraveller_type
        });
        this.keyUpListner({
            identifier:'#popup .personal_description',
            functionality: TempStore.setPersonal_description
        });
        this.keyUpListner({
            identifier:'#popup .show_acceptance',
            functionality: TempStore.setShow_acceptance
        });
        this.keyUpListner({
            identifier:'#popup .last_visit',
            functionality: TempStore.setLast_visit
        });
        this.keyUpListner({
            identifier:'#popup .belongs_to_site',
            functionality: TempStore.setBelongs_to_site
        });
        this.keyUpListner({
            identifier:'#popup .unregdate',
            functionality: TempStore.setUnregdate
        });
        this.keyUpListner({
            identifier:'#popup .vip',
            functionality: TempStore.setVip
        });
        this.keyUpListner({
            identifier:'#popup .status',
            functionality: TempStore.setStatus
        });
        this.keyUpListner({
            identifier:'#popup .regdate',
            functionality: TempStore.setRegdate
        });
        this.keyUpListner({
            identifier:'#popup .want_email',
            functionality: TempStore.setWant_email
        });
        this.keyUpListner({
            identifier:'#popup .session_code',
            functionality: TempStore.setSession_code
        });
        this.keyUpListner({
            identifier:'#popup .updated',
            functionality: TempStore.setUpdated
        });
        this.keyUpListner({
            identifier:'#popup .last_news_email',
            functionality: TempStore.setLast_news_email
        });
        this.keyUpListner({
            identifier:'#popup .last_news_email_info',
            functionality: TempStore.setLast_news_email_info
        });
        this.keyUpListner({
            identifier:'#popup .origin',
            functionality: TempStore.setOrigin
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
            //console.log(TempStore.getTypedVal());
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
    },

};