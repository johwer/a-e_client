define(['myeventhandler', 'jquery', 'tempstore', 'informationbox', 'jqueryui'], function (MyEvent, $, TempStore, InformationBox ) {
console.log('Start in function Listners.js');
            console.log(MyEvent);
            console.log($);
            console.log(TempStore);
            
           
        console.log('End in function Listners.js');

return {
    init: function () {
        
        console.log("Setup Listners");
        console.log(TempStore);
        console.log(MyEvent);
        //this.MyEvent = obj.MyEvent;
        
        /*
        this.addListerns({
            identifier:'#search-area .downloadCSV',
        });
        */
        
    },
    agencyEditAddListner: function() {
         var self = this;
        //Might use editADD
        self.keyUpListner({
            identifier:'#popup #agency_id',
            setFunctionality: 'setAgency_id'
        });
        self.keyUpListner({
            identifier:'#popup #areaCode',
            setFunctionality: 'agency_setArea_code'
        });
        self.keyUpListner({
            identifier:'#popup #companyName',
            setFunctionality: 'agency_setCompany_name'
        });
        self.keyUpListner({
            identifier:'#popup #companyChain',
            setFunctionality: 'agency_setcompany_chain'
        });
        self.keyUpListner({
            identifier:'#popup #address',
            setFunctionality: 'agency_setAddress'
        });
        // self.keyUpListner({
        //     identifier:'#popup #country',
        //     setFunctionality: 'agency_setCountry'
        // });
        self.keyUpListner({
            identifier:'#popup #city',
            setFunctionality: 'agency_setCity'
        });
        self.keyUpListner({
            identifier:'#popup #commission',
            setFunctionality: 'agency_Commission'
        });
    },
    commissionAndCompanyChain: function() {
        //Might use editADD
        var self = this;
        self.keyUpListner({
            identifier:'#popup .addPopupCommissionInput',
            setFunctionality: 'setCommissionRate'
        });
        self.keyUpListner({
            identifier:'#popup .addPopupCompanyChainInput',
            setFunctionality: 'setNewCompanyChain'
        });  
    },
    editAdd: function () {
        var self = this;
        console.log('add Listners');

        self.createListnerSelectOrCheckedChange({
            identifier:'#popup #active',
            prop: true,
            setFunctionality: 'setActive'
        });

        self.keyUpListner({
            identifier:'#popup #member_id',
            setFunctionality: 'setMember_id'
        });
        self.keyUpListner({
            identifier:'#popup #password',
            setFunctionality: 'setPassword'
        });
        self.keyUpListner({
            identifier:'#popup #encrypted_password',
            setFunctionality: 'setEncrypted_password'
        });
        self.keyUpListner({
            identifier:'#popup #first_name',
            setFunctionality: 'setFirst_name'
        });
        self.keyUpListner({
            identifier:'#popup #last_name',
            setFunctionality: 'setLast_name'
        });
        self.keyUpListner({
            identifier:'#popup #email',
            setFunctionality: 'setEmail'
        });
        self.keyUpListner({
            identifier:'#popup #agencyId',
            setFunctionality: 'setAgencyId'
        });
        /*self.keyUpListner({
            identifier:'#popup #country',
            setFunctionality: 'setCountry'
        });*/
        /*self.keyUpListner({
            identifier:'#popup #city',
            setFunctionality: 'setCity'
        });
        self.keyUpListner({
            identifier:'#popup #area_code',
            setFunctionality: 'setArea_code'
        });
        self.keyUpListner({
            identifier:'#popup #company_name',
            setFunctionality: 'setCompany_name'
        });
        self.keyUpListner({
            identifier:'#popup #companyChain',
            setFunctionality: 'setcompanyChain'
        });
        self.keyUpListner({
            identifier:'#popup #address',
            setFunctionality: 'setAddress'
        });*/
        self.keyUpListner({
            identifier:'#popup #phone_daytime',
            setFunctionality: 'setPhone_daytime'
        });
        self.keyUpListner({
            identifier:'#popup #phone_home',
            setFunctionality: 'setPhone_home'
            //setFunctionalitySecond: Validation.phoneNumber
        });
        self.keyUpListner({
            identifier:'#popup #phone_cellular',
            setFunctionality: 'setPhone_cellular'
        });
        /*self.keyUpListner({
            identifier:'#popup #fax',
            setFunctionality: 'setFax'
        });*/
        /*self.keyUpListner({
            identifier:'#popup #birthdate',
            setFunctionality: 'setBirthdate'
        });*/
        /*self.keyUpListner({
            identifier:'#popup #sex',
            setFunctionality: 'setSex'
        });
        self.keyUpListner({
            identifier:'#popup #civil_status',
            setFunctionality: 'setCivil_status'
        });
        self.keyUpListner({
            identifier:'#popup #occupation',
            setFunctionality: 'setOccupation'
        });
        self.keyUpListner({
            identifier:'#popup #traveller_type',
            setFunctionality: 'setTraveller_type'
        });
        self.keyUpListner({
            identifier:'#popup #personal_description',
            setFunctionality: 'setPersonal_description'
        });
        self.keyUpListner({
            identifier:'#popup #show_acceptance',
            setFunctionality: 'setShow_acceptance'
        });*/
        self.keyUpListner({
            identifier:'#popup #last_visit',
            setFunctionality: 'setLast_visit'
        });
        self.keyUpListner({
            identifier:'#popup #login',
            setFunctionality: 'setLogin'
        });
      /*  self.keyUpListner({
            identifier:'#popup #active',
            setFunctionality: 'active'
        });*/
        self.keyUpListner({
            identifier:'#popup #unregdate',
            setFunctionality: 'setUnregdate'
        });
        self.keyUpListner({
            identifier:'#popup #vip',
            setFunctionality: 'setVip'
        });
        self.keyUpListner({
            identifier:'#popup #status',
            setFunctionality: 'setStatus'
        });
        self.keyUpListner({
            identifier:'#popup #regdate',
            setFunctionality: 'setRegdate'
        });
        self.keyUpListner({
            identifier:'#popup #want_email',
            setFunctionality: 'setWant_email'
        });
        self.keyUpListner({
            identifier:'#popup #session_code',
            setFunctionality: 'setSession_code'
        });
        self.keyUpListner({
            identifier:'#popup #updated',
            setFunctionality: 'setUpdated'
        });
        self.keyUpListner({
            identifier:'#popup #last_news_email',
            setFunctionality: 'setLast_news_email'
        });
        self.keyUpListner({
            identifier:'#popup #last_news_email_info',
            setFunctionality: 'setLast_news_email_info'
        });
        self.keyUpListner({
            identifier:'#popup #origin',
            setFunctionality: 'setOrigin'
        });
    },
    createListnerSelectOrCheckedChange: function(obj) {
        var $this = $(obj.identifier),
            self  = this,
            myValue = '';
  
        $this.change( function(event) {
            //console.log('I change function');
            //obj.eventAction = $this.find('option:selected').val();
            if(obj.val){
                myValue = $this.find('option:selected').val();
            }

            if(obj.prop){
                myValue = $this.prop("checked");
                console.log(myValue);
            }

            self.callRightTempStoreFunction(obj.setFunctionality, myValue);

            if (!obj){
                    obj = {};
                    console.log('Create obj');
            }
            
            obj.tempElementClass = $(event.target).attr('class');
               

            if(obj.tempElementClass){
                var elementClassRegExp = obj.tempElementClass.match(/^([\w\-]+)/g);
                obj.elementClass = elementClassRegExp.toString();
            }

            require(['myeventhandler'], function (MyEvent) {
                    MyEvent.eventHandlers(obj);
            });
        });
    },
    createListnerButton: function(obj) {
        console.log(obj.identifier);
        var $this = $(obj.identifier);
            
        $this.click(function(event) {
            event.preventDefault();
            //event.preventDefault();
            console.log('Button cliked');
        });
    },
    keyUpListner: function (obj){
        var self = this;
        var $this = $(obj.identifier);
        console.log('keyup Listners');
        $this.keyup(function(event){
            console.log(TempStore);
            var myValue = this.value;
            console.log(obj.setFunctionality);
            self.callRightTempStoreFunction(obj.setFunctionality, myValue);
            console.log(TempStore);
            //console.log(obj.functionalitySecond);
           // if (obj.functionalitySecond) {
            console.log('Start');
            console.log($(event.target).attr("id"));
            console.log($(event.target).attr('class'));
            console.log($(event.target).val());
            console.log($(event.target).html());
            console.log($(event.which));
            console.log('Stop');

            obj.elementId = $(event.target).attr("id");
            obj.tempElementClass = $(event.target).attr('class'),
            obj.elementVal = $(event.target).val();
            obj.elementInnerHtml = $(event.target).html();
            var keyPress = $(event.which);
            obj.keyPress = keyPress[0];    
                console.log(keyPress[0]);

            // obj.lastInputTyped = null;
            obj.lastInputCLicked = TempStore.getLastInputCLicked();

            if(obj.tempElementClass){
                var elementClassRegExp = obj.tempElementClass.match(/^([\w\-]+)/g);
                obj.elementClass = elementClassRegExp.toString();
            }

            console.log(TempStore);
            require(['myeventhandler'], function (MyEvent) {
                MyEvent.eventHandlers(obj);
            });
        });
    },
    addListerns: function(obj) {
         //var self = this;
        var $this = $(obj.identifier);
        //console.log('addListerns');
        //console.log(obj);
        console.log(obj.identifier);

        $this.on('click', function(event) { 
           
            event.stopPropagation();
            console.log('button click');
            console.log('Start');
            console.log($(event.target).attr("id"));
            console.log($(event.target).attr('class'));
            console.log($(event.target).val());
            console.log($(event.target).html());

            console.log('DATA ID');
            console.log($(event.target).attr('data-id'));

            console.log('Stop');
            
            // Lost depency of obj instance when running in modules
            if (!obj){
                obj = {};
                console.log('Create obj');
            }

            obj.elementId = $(event.target).attr("id");
            obj.tempElementClass = $(event.target).attr('class');
            obj.elementVal = $(event.target).val();
            obj.elementInnerHtml = $(event.target).html();

            if(obj.tempElementClass){
                 var elementClassRegExp = obj.tempElementClass.match(/^([\w\-]+)/g);
                obj.elementClass = elementClassRegExp.toString();
            }
           
            obj.dataId = $(event.target).attr('data-id');
            obj.dataSort = $(event.target).attr('data-sort');
           
            console.log(obj.dataSort);
            console.log(obj.dataId);
            console.log(obj.elementClass);

           
            require(['myeventhandler', 'jquery', 'tempstore'], function (MyEvent, $, TempStore) {
                console.log(TempStore);
                console.log(MyEvent);

                //Last input clicked
                
               if(event.target.nodeName === 'INPUT'){
                    TempStore.setLastInputCLicked(obj.elementClass);
               }
                obj.lastInputCLicked = TempStore.getLastInputCLicked();
                //alert(obj.lastInputCLicked);

                var objDataId = obj.dataId;
                var objElementInnerHtml = obj.elementInnerHtml;

                console.log(obj);
                TempStore.setDataId(objDataId);
                TempStore.setClickedVal(objElementInnerHtml);
                MyEvent.eventHandlers(obj);

            });     
        });
    },
    unDraggable: function (obj, event) {
        var $this = $(obj.identifier);
        $this.draggable = false;
    },
    removeListners: function(obj) {
        var $this = $(obj.identifier);
        $this.off();
    },
    callRightTempStoreFunction: function (func, val){
        //require(['tempstore', 'informationbox'], function (MyEvent, $, TempStore) {
        if(func === 'setTypedVal'){
            TempStore.setTypedVal(val);
        } else if(func === 'setDropDownVal') {
            TempStore.setDropDownVal(val);
        } else if(func === 'setMember_id') {
            TempStore.setMember_id(val);
        } else if(func === 'setPassword') {
            TempStore.setPassword(val);
        } else if(func === 'setEncrypted_password') {
            TempStore.setEncrypted_password(val);
        } else if(func === 'setFirst_name') {
            TempStore.setFirst_name(val);
        } else if (func === 'setLast_name') {
            TempStore.setLast_name(val);
        } else if (func === 'setEmail') {
            TempStore.setEmail(val);
        } else if (func === 'setCountry') {
            TempStore.setCountry(val);
        } else if (func === 'setCity') {
            TempStore.setCity(val);
        } else if (func === 'setArea_code') {
            TempStore.setArea_code(val);
        } else if (func === 'setCompany_name') {
            TempStore.setCompany_name(val);
        } else if (func === 'setcompanyChain') {
            TempStore.setcompanyChain(val);
        } else if (func === 'setAddress') {
            TempStore.setAddress(val);
        } else if (func === 'setPhone_daytime') {
            TempStore.setPhone_daytime(val);
        } else if (func === 'setPhone_home') {
            TempStore.setPhone_home(val);
        } else if (func === 'setPhone_cellular') {
            TempStore.setPhone_cellular(val);
        } /*else if (func === 'setFax') {
            TempStore.setFax(val);
        } else if (func === 'setBirthdate') {
            TempStore.setBirthdate(val);
        } else if (func === 'setSex') {
            TempStore.setSex(val);
        } else if (func === 'setCivil_status') {
            TempStore.setCivil_status(val);
        } else if (func === 'setOccupation') {
            TempStore.setOccupation(val);
        } else if (func === 'setTraveller_type') {
            TempStore.setTraveller_type(val);
        } else if (func === 'setPersonal_description') {
            TempStore.setPersonal_description(val);
        } else if (func === 'setShow_acceptance') {
            TempStore.setShow_acceptance(val);
        }*/ else if (func === 'setLast_visit') {
            TempStore.setLast_visit(val);
        } else if (func === 'setLogin') {
            TempStore.setLogin(val);
        } else if (func === 'setAgencyId') {
            console.log(val);
            TempStore.setAgencyId(val);
        } else if (func === 'setActive') {
            TempStore.setActive(val);
        } else if (func === 'setUnregdate') {
            TempStore.setUnregdate(val);
        } else if (func === 'setVip') {
            TempStore.setVip(val);
        } else if (func === 'setStatus') {
            TempStore.setStatus(val);
        } else if (func === 'setRegdate') {
            TempStore.setRegdate(val);
        } else if (func === 'setWant_email') {
            TempStore.setWant_email(val);
        } else if (func === 'setSession_code') {
            TempStore.setSession_code(val);
        } else if (func === 'setUpdated') {
            TempStore.setUpdated(val);
        } else if (func === 'setLast_news_email') {
            TempStore.setLast_news_email(val);
        } else if (func === 'setLast_news_email_info') {
            TempStore.setLast_news_email_info(val);
        } else if (func === 'setOrigin') {
            TempStore.setOrigin(val);
        } else if (func === 'setCommissionRate') {
            console.log('Konsol');
            TempStore.setCommissionRate(val);
            TempStore.setCommissionRateChoosen(val);
        } else if (func === 'setNewCompanyChain') {
            console.log('log');
            TempStore.setNewCompanyChain(val);
            TempStore.setNewCompanyChainChoosen(val);
        } else if (func === 'setAgency_id') {
            console.log('log');
            TempStore.setAgencyInfoId(val);
        } else if (func === 'agency_setArea_code') {
            console.log('log');
            TempStore.setAgencyInfoAreaCode(val);
        } else if (func === 'agency_setCompany_name') {
            console.log('log');
            TempStore.setAgencyInfoCompanyName(val);
        } else if (func === 'agency_setcompany_chain') {
            console.log('log');
            TempStore.setAgencyInfoCompanyChain(val);
        } else if (func === 'agency_setAddress') {
            console.log('log');
            TempStore.setAgencyInfoAddress(val);
        } else if (func === 'agency_setCountry') {
            console.log('log');
            TempStore.setAgencyInfoCountry(val);
        } else if (func === 'agency_setCity') {
            console.log('log');
            TempStore.setAgencyInfoCity(val);
        } else if (func === 'agency_Commission') {
            console.log('log');
            TempStore.setAgencyInfoCommission(val);
        } 
        else {

        }
    } 
  };
});