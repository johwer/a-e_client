/*Display*/
define(['jquery', 'tempstore'], function ($, TempStore) {

console.log('Start in function displaying.js'); 
         

            console.log($);
            console.log(TempStore);
  


        console.log('End in function displaying.js');
  



return  {
	init: function( config ) {

		this.config = config;
		console.log(this.config);
	},
	toggleView: function(identifier) {
		console.log('toggle');
		$(identifier).toggle();
	},
	/*******************************************************************************************************************/
	removeInfo: function (identifier) {
		$(identifier).remove();
		console.log('try to remove identifier');
		console.log(identifier);
	},
	removeInfoNextAll: function (identifier1, identifier2) {
		$(identifier1).nextAll( identifier2 ).remove();
		
		console.log('try to remove identifier');
	},
	/*******************************************************************************************************************/
	displayCommssionAgencyInfo: function (arr) {

		var self = this;

		$( arr ).each(function(index,value) {
		  		
			 var tr = $('<tr></tr>', {
			  });
			 tr.addClass('agencyInfo ui-widget-content cursorCell');
			 tr.attr( "data-id", value.id );
			 var commission = $('<td></td>', {
			 	text: self.checkSetDefaultValueOfCommission(value.commission)
			 });
			 commission.addClass('comission');
			 //commission.attr( "data-commission-rates", value.commission );
			 commission.attr( "data-commission-rates", self.checkSetDefaultValueOfCommission(value.commission));
			// console.log(value.id);
			 commission.attr( "data-id", value.id );
			 commission.appendTo(tr);
			tr.appendTo(self.config.containerIdentifier0);	
		});
		
	},
	checkSetDefaultValueOfCommission: function (val){
		if(val === null){
		  	val = 5;
		}
		return val;
	},
	displayAgencyInfo: function (arr) {
	//Main view 
		var self = this;
		
		$( arr ).each(function(index,value) {

		  //$( this ).addClass( "foo" );
		  
		  //console.log(index);
		  //console.log(value);
		
		  		
			 var tr = $('<tr></tr>', {
			  });
			 tr.addClass('agencyInfo');
			 tr.attr( "data-id", value.id );


			 var company = $('<td></td>', {
			 	//text: value.companyName
			 });
			 company.addClass('company clickable hover');
			 company.attr( "data-id", value.id );

			 var pre1 = $('<pre>', {
			 	text: value.companyName
			 });
			 pre1.addClass('company');
			 pre1.attr( "data-id", value.id );
			 pre1.appendTo(company);
			 company.appendTo(tr);


			 var city = $('<td></td>', {
			 	
			 }).appendTo(tr);
			 var pre2 = $('<pre>', {
			 	text: value.city
			 });
			 pre2.appendTo(city);
			 
			 
			 var areaCode = $('<td></td>', {
			 	//text: value.areaCode
			 });
			 var pre3 = $('<pre>', {
			 	text: value.areaCode
			 });
			 pre3.appendTo(areaCode);
			 areaCode.appendTo(tr);
			 

			 var address = $('<td></td>', {
			 });

			 var pre4 = $('<pre>', {
			 	text: value.address
			 });
			 pre4.appendTo(address);
			 address.appendTo(tr);
			 

			 tr.appendTo(self.config.containerIdentifier1);	
		 
		});		
	},
	activeOrDeactivateMembersInCompany: function() {
	//Popup
		var self = this;

		self.toggleView('#popup');

    	self.addH1({
			text:'Activet or deactive members per agencies',
			identifier: '#popup #edit-add-list'
	    });
	    	//TempStore.resetMemberInfo();
	    	//console.log(TempStore.memberInfo);
	    	console.log(self);

	    self.commissionAndCompanyChain(TempStore.getSelectedAgencyArr());
    	//Add new listner for rows commission Listners.editAdd();
    	
    	self.addDiv({
    		identifier: '#popup #edit-add-list',
    		elementClass: 'chocieActiveOrDeactivate'
    	});
    	self.addRadio({
    		identifier: '#popup #edit-add-list .chocieActiveOrDeactivate',
    		name: 'activetOrDeactive',
    		val: 'activate',
    		checked: true

    	});
    	self.addSpan({
    		text: 'Activet ',
    		identifier: '#popup #edit-add-list .chocieActiveOrDeactivate',
    		elementClass: 'r10'
	    });
    	self.addRadio({
    		identifier: '#popup #edit-add-list .chocieActiveOrDeactivate',
    		name: 'activetOrDeactive',
    		val: 'deactivate',
    		checked: false

    	});
    	self.addSpan({
    		text: 'Deactive',
    		identifier: '#popup #edit-add-list .chocieActiveOrDeactivate',
    		elementClass: 'r10'
	    });

    	self.addDiv({
    		identifier: '#popup #edit-add-list',
    		elementClass: 'submitArea'
    	});
	    self.addButton({
    		text: 'Submit Activet or deactive members per agencies',
    		identifier: '#popup #edit-add-list .submitArea',
    		elementClass: 'activetOrDeactiveButtonSubmit button orange margin10'
    	});
	},
	displayAgencyEditAdd: function () { 
	//Popup
		var self = this;
		
		

		  //$( this ).addClass( "foo" );
		  
		  //console.log(index);
		  //console.log(value);
		
	/*	var tr1 = $('<tr></tr>', {
			});
		var th1 = $('<th></th>', {
			  	text: 'agency_id'
			});
		var td1 = $('<td></td>', { 	
			});
		var input1 = $('<input>', {
			  	id: 'agency_id',
			  	type:'text',
			  	value: TempStore.agencyInfo.id
			});*/
		var tr1 = $('<tr></tr>', {
			});
		var th1 = $('<th></th>', {
			  	text: 'city'
			});
		var td1 = $('<td></td>', { 	
			});
		var input1 = $('<input>', {
			  	id: 'city',
			  	type:'text',
			  	value: TempStore.agencyInfo.city
			});

		var tr2 = $('<tr></tr>', {
			});
		var th2 = $('<th></th>', {
			  	text: 'company'
			});
		var td2 = $('<td></td>', { 	
			});
		var input2 = $('<input>', {
			  	id: 'companyName',
			  	type:'text',
			  	value: TempStore.agencyInfo.companyName
			});

		var tr3 = $('<tr></tr>', {
			});
		var th3 = $('<th></th>', {
			  	text: 'areaCode'
			});
		var td3 = $('<td></td>', { 	
			});
		var input3 = $('<input>', {
			  	id: 'areaCode',
			  	type:'text',
			  	value: TempStore.agencyInfo.areaCode
			});

		var tr4 = $('<tr></tr>', {
			});
		var th4 = $('<th></th>', {
			  	text: 'address'
			});
		var td4 = $('<td></td>', { 	
			});
		var input4 = $('<input>', {
			  	id: 'address',
			  	type:'text',
			  	value: TempStore.agencyInfo.address
			});

		var tr5 = $('<tr></tr>', {
			});
		var th5 = $('<th></th>', {
			  	text: 'companyChain'
			});
		var td5 = $('<td></td>', { 	
			});
		var input5 = $('<input>', {
			  	id: 'companyChain',
			  	type:'text',
			  	value: TempStore.agencyInfo.companyChain
			});

		// var tr6 = $('<tr></tr>', {
		// 	});
		// var th6 = $('<th></th>', {
		// 	  	text: 'country'
		// 	});
		// var td6 = $('<td></td>', { 	
		// 	});
		// var input6 = $('<input>', {
		// 	  	id: 'country',
		// 	  	type:'text',
		// 	  	value: TempStore.agencyInfo.country
		// 	});
		var tr7 = $('<tr></tr>', {
			});
		var th7 = $('<th></th>', {
			  	text: 'commission'
			});
		var td7 = $('<td></td>', { 	
			});
		var input7 = $('<input>', {
			  	id: 'commission',
			  	type:'text',
			  	value: self.checkSetDefaultValueOfCommission(TempStore.agencyInfo.commission)
			});
			 
			th1.appendTo(tr1);
			th2.appendTo(tr2);
			th3.appendTo(tr3);
			th4.appendTo(tr4);
			th5.appendTo(tr5);
			//th6.appendTo(tr6);
			th7.appendTo(tr7);

			input1.appendTo(td1);
			input2.appendTo(td2);
			input3.appendTo(td3);
			input4.appendTo(td4);
			input5.appendTo(td5);
			//input6.appendTo(td6);
			input7.appendTo(td7);

			td1.appendTo(tr1);
			td2.appendTo(tr2);	
			td3.appendTo(tr3);	
			td4.appendTo(tr4);	
			td5.appendTo(tr5);	
			//td6.appendTo(tr6);
			td7.appendTo(tr7);	

			tr1.appendTo(self.config.containerIdentifier4);
			tr2.appendTo(self.config.containerIdentifier4);
			tr3.appendTo(self.config.containerIdentifier4);
			tr4.appendTo(self.config.containerIdentifier4);
			tr5.appendTo(self.config.containerIdentifier4);
			//tr6.appendTo(self.config.containerIdentifier4);
			tr7.appendTo(self.config.containerIdentifier4);
			 
	},
	commissionAndCompanyChain: function (arr) {
	//Main view 
		var self = this;
		console.log(arr);
		var tr0 = $('<tr></tr>', {
			  });

		var commission0 = $('<th></th>', {
			 	text: 'Commission'
			 });
		commission0.appendTo(tr0);
		//tr0.addClass('agencyInfo ui-widget-content');
		var companyChain0 = $('<th></th>', {
			 	text: 'Company chain'
			 });
		companyChain0.appendTo(tr0);

		var companyName0 = $('<th></th>', {
			 	text: 'Company name'
			 });
		companyName0.appendTo(tr0);

		

		var city0 = $('<th></th>', {
			 	text: 'City'
			 });
		city0.appendTo(tr0);

		var areaCode0 = $('<th></th>', {
			 	text: 'Area code'
			 });
		areaCode0.appendTo(tr0);

		var address0 = $('<th></th>', {
			 	text: 'Address'
			 });
		address0.appendTo(tr0);

		tr0.appendTo(self.config.containerIdentifier4);

		$( arr ).each(function(index,value) {

		  //$( this ).addClass( "foo" );
		  
		  //console.log(index);
		  //console.log(value);
		  	if (value.companyChain === 'null' || value.companyChain === null) {
		  		value.companyChain = '';
		  	};

			 var tr = $('<tr></tr>', {
			  });

			 var commission = $('<td></td>', {
			 });
			 var pre2 = $('<pre>', {
			 	text: self.checkSetDefaultValueOfCommission(value.commission)
			 });
			 pre2.appendTo(commission);
			 commission.appendTo(tr);

			 //tr.addClass('agencyInfo ui-widget-content');

			 var companyChain = $('<td></td>', {
			 	//text: value.address
			 });
			 var pre0 = $('<pre>', {
			 	text: value.companyChain
			 });
			 pre0.appendTo(companyChain);
			 companyChain.appendTo(tr);

			 var company = $('<td></td>', {
			 	//text: value.companyName
			 });
			 var pre1 = $('<pre>', {
			 	text: value.companyName
			 });
			 pre1.appendTo(company);
			 company.appendTo(tr);


			 
			 

			 var city = $('<td></td>', {
			 	//text: value.city
			 });
			 var pre3 = $('<pre>', {
			 	text: value.city
			 });
			 pre3.appendTo(city);
			 city.appendTo(tr);
			 
			 
			 var areaCode = $('<td></td>', {
			 	//text: value.areaCode
			 });
			 var pre4 = $('<pre>', {
			 	text: value.areaCode
			 });
			 pre4.appendTo(areaCode);
			 areaCode.appendTo(tr);
			

			 var address = $('<td></td>', {
			 	//text: value.address
			 });
			 var pre5 = $('<pre>', {
			 	text: value.address
			 });
			 pre5.appendTo(address);
			 address.appendTo(tr);

			 tr.appendTo(self.config.containerIdentifier4);	
		 
		});		
	},
	choiseInCommissionAndCompanyChain:function(){
	//Popup	
		var self = this;

		self.toggleView('#popup');

    	self.addH1({
			text:'Commission and Company Chain',
			identifier: '#popup #edit-add-list'
	    });
	    	//TempStore.resetMemberInfo();
	    	//console.log(TempStore.memberInfo);
	    	console.log(self);

	    self.commissionAndCompanyChain(TempStore.getSelectedAgencyArr());
    	//Add new listner for rows commission Listners.editAdd();
    	
    	self.addDiv({
    		identifier: '#popup #edit-add-list',
    		elementClass: 'chocieCompanyChain'
    	});
    	self.addH3({
			text:'Edit/Add: Company Chain',
			identifier: '#popup #edit-add-list .chocieCompanyChain'
	    });
    	self.addRadio({
    		identifier: '#popup #edit-add-list .chocieCompanyChain',
    		name: 'Company Chain',
    		val: 'setCommissionRateValue',
    		checked: false

    	});
    	
    	self.addSpan({
    		text: 'Type value: ',
    		identifier: '#popup #edit-add-list .chocieCompanyChain',
    		elementClass: 'r10'
	    });
	   	self.addInput({
    		identifier: '#popup #edit-add-list .chocieCompanyChain',
    		elementClass: 'addPopupCompanyChainInput',
    		placeholderText: 'Company Chain'
	    });
	    self.addBr({
    		identifier: '#popup #edit-add-list .chocieCompanyChain'
	    });
		self.addRadio({
    		identifier: '#popup #edit-add-list .chocieCompanyChain',
    		name: 'Company Chain',
    		val: 'null',
    		checked: false
	    });
	    self.addSpan({
    		text: 'Clear chain',
    		identifier: '#popup #edit-add-list .chocieCompanyChain',
    		elementClass: 'r10'
    	});
	    self.addBr({
    		identifier: '#popup #edit-add-list .chocieCompanyChain'
	    });
		self.addRadio({
    		identifier: '#popup #edit-add-list .chocieCompanyChain',
    		name: 'Company Chain',
    		val: 'as_is',
    		elementClass: 'd10',
    		checked: true
	    });
	    self.addSpan({
    		text: 'Keep current',
    		identifier: '#popup #edit-add-list .chocieCompanyChain',
    		elementClass: 'r10 d10'
    	});
	   	
	    self.addBr({
    		identifier: '#popup #edit-add-list .chocieCompanyChain'
	    });
//////////////////
		self.addDiv({
    		identifier: '#popup #edit-add-list',
    		elementClass: 'chocieRate'
    	});
    	self.addH3({
			text:'Edit/Commission',
			identifier: '#popup #edit-add-list .chocieRate'
	    });
	    self.addRadio({
    		identifier: '#popup #edit-add-list .chocieRate',
    		name: 'comissionRate',
    		val: 'comissionRate',
    		checked: false

	    });
	    self.addSpan({
    		text: 'Type value: ',
    		identifier: '#popup #edit-add-list .chocieRate',
    		elementClass: 'r10'
	    });

    	self.addInput({
    		identifier: '#popup #edit-add-list .chocieRate',
    		elementClass: 'addPopupCommissionInput',
    		placeholderText: '5',
    		val: ''
	    });

	    self.addBr({
    		identifier: '#popup #edit-add-list .chocieRate'
	    });
    	 self.addRadio({
    		identifier: '#popup #edit-add-list .chocieRate',
    		name: 'comissionRate',
    		val: 'null',
    		checked: false
	    });
	    self.addSpan({
    		text: 'Set to default',
    		identifier: '#popup #edit-add-list .chocieRate',
    		elementClass: 'r10'
	    });
	    self.addBr({
    		identifier: '#popup #edit-add-list .chocieRate'
	    });

	     self.addRadio({
    		identifier: '#popup #edit-add-list .chocieRate',
    		name: 'comissionRate',
    		val: 'as_is',
    		elementClass: 'd10',
    		checked: true
	    });
	    self.addSpan({
    		text: 'Keep current',
    		identifier: '#popup #edit-add-list .chocieRate',
    		elementClass: 'r10 d10'
	    });


	    /////////
		self.addDiv({
    		identifier: '#popup #edit-add-list',
    		elementClass: 'submitArea'
    	});
    	self.addButton({
    		text: 'Submit edit commission and company',
    		identifier: '#popup #edit-add-list .submitArea',
    		elementClass: 'commissionChainEditSubmit button orange margin10'
    	});
		

	},


	/*******************************************************************************************************************/
	displayMembersInfo: function(arr) {
		//console.log(obj);
		var self = this;
		$( arr ).each(function(index,value) {
		  //$( this ).addClass( "foo" );
		  
		  	//console.log(index);
			 //console.log(value);
			 var deactive = '';
			 if(!value.active){
			 	deactive = ' deactive';
			 }
			 

			 var tr = $('<tr></tr>', {
			 });
			 tr.addClass('memberInfo' +deactive);
			 
			 var login = $('<td></td>', {
			 	text: value.login
			 });
			 login.addClass('editMember clickable hover');
			 login.attr( "data-id", value.id );

			 var firstName	 = $('<td></td>', {
			 	text: value.firstName
			 });
			 firstName.addClass('editMember clickable hover align-right');
			 firstName.attr( "data-id", value.id );
			 
			 var lastName = $('<td></td>', {
			 	text: value.lastName
			 });
			 lastName.addClass('editMember clickable hover');
			 lastName.attr( "data-id", value.id );

			 var eMail = $('<td></td>', {
			 });
			 eMail.addClass('clickable hover');

			 var phoneDaytime = $('<td></td>', {
			 });
			 phoneDaytime.addClass('clickable hover');

			 var phoneCellular = $('<td></td>', {
			 });
			 phoneCellular.addClass('clickable hover');
			 
			var aTag1 = $('<a>', {
			 	href: "mailto:"+ value.email,
			 	text: value.email
			 });
			aTag1.addClass('editMember mail');
			aTag1.attr( "data-id", value.id );

			var aTag2 = $('<a>', {
			 	href: "tel:"+value.phoneDaytime,
			 	text: value.phoneDaytime
			 });
			aTag2.addClass('editMember phoneDaytime');
			aTag2.attr( "data-id", value.id );

			var aTag3 = $('<a>', {
			 	href: "tel:"+value.phoneCellular,
			 	text: value.phoneCellular
			 });
			aTag3.addClass('editMember phoneCellular');
			aTag3.attr( "data-id", value.id );

			aTag1.appendTo(eMail);
			aTag2.appendTo(phoneDaytime);
			/*aTag3.appendTo(phoneCellular);*/
			
			
			login.appendTo(tr);
			firstName.appendTo(tr);
			lastName.appendTo(tr); 
			eMail.appendTo(tr);
			phoneDaytime.appendTo(tr);
			/*phoneCellular.appendTo(tr);*/
			tr.appendTo(self.config.containerIdentifier2);	
		 
		});	

	},
	
	/*******************************************************************************************************************/
	displayEditAdd: function(displayAdd) {
		var self = this;

		var tr1 = $('<tr></tr>', {
			});
		var th1 = $('<th></th>', {
			  	text: 'member_id'
			});
		var td1 = $('<td></td>', { 	
			});
		var input1 = $('<input>', {
			  	id: 'member_id',
			  	type:'text',
			  	value: TempStore.memberInfo.id
			});
			input1.addClass('editAdd');

		var tr2 = $('<tr></tr>', {
			});
		var th2 = $('<th></th>', {
			  	text: '*password'
			});
		var td2 = $('<td></td>', {
			});
		var input2 = $('<input>', {
			  	id: 'password',
			  	type: 'text',
			  	value: TempStore.memberInfo.password
			});
			input2.addClass('editAdd');

		var tr3 = $('<tr></tr>', {
			});
		var th3 = $('<th></th>', {
			  	text: 'encrypted_password'
			});
		var td3 = $('<td></td>', {
			});
		var input3 = $('<input>', {
			  	id: 'encrypted_password',
			  	type: 'text',
			  	value: TempStore.memberInfo.encryptedPassword
			});
			input3.addClass('editAdd');

		var tr4 = $('<tr></tr>', {
			});
		var th4 = $('<th></th>', {
			  	text: '*first_name'
			});
		var td4 = $('<td></td>', {
			});
		var input4 = $('<input>', {
			  	id: 'first_name',
			  	type: 'text',
			  	value: TempStore.memberInfo.memberInfo.firstName
			});
			input4.addClass('editAdd');

		var tr5 = $('<tr></tr>', {
			});
		var th5 = $('<th></th>', {
			  	text: '*last_name'
			});
		var td5 = $('<td></td>', {
			});
		var input5 = $('<input>', {
			  	id: 'last_name',
			  	type: 'text',
			  	value: TempStore.memberInfo.memberInfo.lastName
			});
			input5.addClass('editAdd');

		var tr6 = $('<tr></tr>', {
			});
		var th6 = $('<th></th>', {
			  	text: '*email'
			});
		var td6 = $('<td></td>', {
			});
		var input6 = $('<input>', {
			  	id: 'email',
			  	type: 'email',
			  	required: true,
			  	value: TempStore.memberInfo.memberInfo.email
			});
			input6.addClass('editAdd');

		var tr7 = $('<tr></tr>', {
			});
		var th7 = $('<th></th>', {
			  	text: '*agency_id'
			});
		var td7 = $('<td></td>', {
			});
		var input7 = $('<input>', {
			  	id: 'agencyId',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyId
			});
			input7.addClass('editAdd');

		/*var tr8 = $('<tr></tr>', {
			});
		var th8 = $('<th></th>', {
			  	text: 'country'
			});
		var td8 = $('<td></td>', {
			});
		var input8 = $('<input>', {
			  	id: 'country',
			  	type: 'text',
			  	value: TempStore.memberInfo.country
			});
			input8.addClass('editAdd');*/

		/*var tr9 = $('<tr></tr>', {
			});
		var th9 = $('<th></th>', {
			  	text: 'city'
			});
		var td9 = $('<td></td>', {
			});
		var input9 = $('<input>', {
			  	id: 'city',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.city
			});
			input9.addClass('editAdd');*/

		/*var tr10 = $('<tr></tr>', {
			});
		var th10 = $('<th></th>', {
			  	text: 'area_code'
			});
		var td10 = $('<td></td>', {
			});
		var input10 = $('<input>', {
			  	id: 'area_code',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.areaCode
			});
			input10.addClass('editAdd');*/

		/*var tr11 = $('<tr></tr>', {
			});
		var th11 = $('<th></th>', {
			  	text: 'company_name'
			});
		var td11 = $('<td></td>', {
			});
		var input11 = $('<input>', {
			  	id: 'company_name',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.companyName
			});
			input11.addClass('editAdd');

		var tr12 = $('<tr></tr>', {
			});
		var th12 = $('<th></th>', {
			  	text: 'address'
			});
		var td12 = $('<td></td>', {
			});
		var input12 = $('<input>', {
			  	id: 'address',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.address
			});
			input12.addClass('editAdd');*/

		var tr13 = $('<tr></tr>', {
			});
		var th13 = $('<th></th>', {
			  	text: 'phone_daytime'
			});
		var td13 = $('<td></td>', {
			});
		var input13 = $('<input>', {
			  	id: 'phone_daytime',
			  	type: 'tel',
			  	pattern: '',
			  	value: TempStore.memberInfo.memberInfo.phoneDaytime
			});
			input13.addClass('editAdd');

		/*var tr14 = $('<tr></tr>', {
			});
		var th14 = $('<th></th>', {
			  	text: 'phone_home'
			});
		var td14 = $('<td></td>', {
			});
		var input14 = $('<input>', {
			  	id: 'phone_home',
			  	type: 'tel',
			  	value: TempStore.memberInfo.phoneHome
			});
			input14.addClass('editAdd');*/

		var tr15 = $('<tr></tr>', {
			});
		var th15 = $('<th></th>', {
			  	text: 'phone_cellular'
			});
		var td15 = $('<td></td>', {
			});
		var input15 = $('<input>', {
			  	id: 'phone_cellular',
			  	type: 'tel',
			  	value: TempStore.memberInfo.memberInfo.phoneCellular
			});
			input15.addClass('editAdd');

		/*var tr16 = $('<tr></tr>', {
			});
		var th16 = $('<th></th>', {
			  	text: 'fax'
			});
		var td16 = $('<td></td>', {
			});
		var input16 = $('<input>', {
			  	id: 'fax',
			  	type: 'tel',
			  	value: TempStore.memberInfo.fax
			});
			input16.addClass('editAdd');*/

		/*var tr17 = $('<tr></tr>', {
			});
		var th17 = $('<th></th>', {
			  	text: 'birthdate'
			});
		var td17 = $('<td></td>', {
			});
		var input17 = $('<input>', {
			  	id: 'birthdate',
			  	type: 'text',
			  	value: TempStore.memberInfo.birthdate
			});
			input17.addClass('editAdd');*/

		/*var tr18 = $('<tr></tr>', {
			});
		var th18 = $('<th></th>', {
			  	text: 'sex'
			});
		var td18 = $('<td></td>', {
			});
		var input18 = $('<input>', {
			  	id: 'sex',
			  	type: 'text',
			  	value: TempStore.memberInfo.sex
			});
			input18.addClass('editAdd');*/

		/*var tr19 = $('<tr></tr>', {
			});
		var th19 = $('<th></th>', {
			  	text: 'personal_description'
			});
		var td19 = $('<td></td>', {
			});
		var input19 = $('<input>', {
			  	id: 'personal_description',
			  	type: 'text',
			  	value: TempStore.memberInfo.personalDescription
			});
			input19.addClass('editAdd');

		var tr20 = $('<tr></tr>', {
			});
		var th20 = $('<th></th>', {
			  	text: 'civil_status'
			});
		var td20 = $('<td></td>', {
			});
		var input20 = $('<input>', {
			  	id: 'civil_status',
			  	type: 'text',
			  	value: TempStore.memberInfo.civilStatus
			});
			input20.addClass('editAdd');

		var tr21 = $('<tr></tr>', {
			});
		var th21 = $('<th></th>', {
			  	text: 'occupation'
			});
		var td21 = $('<td></td>', {
			});
		var input21 = $('<input>', {
			  	id: 'occupation',
			  	type: 'text',
			  	value: TempStore.memberInfo.occupation
			});
			input21.addClass('editAdd');

		var tr22 = $('<tr></tr>', {
			});
		var th22 = $('<th></th>', {
			  	text: 'traveller_type'
			});
		var td22 = $('<td></td>', {
			});
		var input22 = $('<input>', {
			  	id: 'traveller_type',
			  	type: 'text',
			  	value: TempStore.memberInfo.travellerType
			});
			input22.addClass('editAdd');

		var tr23 = $('<tr></tr>', {
			});
		var th23 = $('<th></th>', {
			  	text: 'show_acceptance'
			});
		var td23 = $('<td></td>', {
			});
		var input23 = $('<input>', {
			  	id:'show_acceptance',
			  	type: 'text',
			  	value: TempStore.memberInfo.showAcceptance
			});
			input23.addClass('editAdd');
*/
		var tr24 = $('<tr></tr>', {
			});
		var th24 = $('<th></th>', {
			  	text: 'last_visit'
			});
		var td24 = $('<td></td>', {
			});
		var input24 = $('<input>', {
			  	id: 'last_visit',
			  	type: 'text',
			  	value: TempStore.memberInfo.lastVisit
			});
			input24.addClass('editAdd');

		var tr25 = $('<tr></tr>', {
			});
		var th25 = $('<th></th>', {
			  	text: 'active'
			});
		var td25 = $('<td></td>', {
			});
		var input25 = $('<input>', {
			  	id: 'active',
			  	type: 'checkbox',
			  	value: TempStore.memberInfo.memberInfo.active
			});
			input25.prop( "checked", TempStore.memberInfo.memberInfo.active );
			input25.addClass('editAdd');
			console.log(TempStore.memberInfo.memberInfo.active);
		var tr26 = $('<tr></tr>', {
			});
		var th26 = $('<th></th>', {
			  	text: 'regdate'
			});
		var td26 = $('<td></td>', {
			});
		var input26 = $('<input>', {
			  	id: 'regdate',
			  	type: 'text',
			  	value: TempStore.memberInfo.regdate
			});
			input26.addClass('editAdd');

		var tr27 = $('<tr></tr>', {
			});
		var th27 = $('<th></th>', {
			  	text: 'unregdate'
			});
		var td27 = $('<td></td>', {
			});
		var input27 = $('<input>', {
			  	id: 'unregdate',
			  	type: 'text',
			  	value: TempStore.memberInfo.unregdate
			});
			input27.addClass('editAdd');

		var tr28 = $('<tr></tr>', {
			});
		var th28 = $('<th></th>', {
			  	text: '*vip'
			});
		var td28 = $('<td></td>', {
			});
		var input28 = $('<input>', {
			  	id:'vip',
			  	type: 'text',
			  	value: TempStore.memberInfo.vip
			});
			input28.addClass('editAdd');

		var tr29 = $('<tr></tr>', {
			});
		var th29 = $('<th></th>', {
			  	text: 'status'
			});
		var td29 = $('<td></td>', {
			});
		var input29 = $('<input>', {
			  	id: 'status',
			  	type: 'text',
			  	value: TempStore.memberInfo.status
			});
			input29.addClass('editAdd');

		var tr30 = $('<tr></tr>', {
			});
		var th30 = $('<th></th>', {
			  	text: 'login'
			});
		var td30 = $('<td></td>', {
			});
		var input30 = $('<input>', {
			  	id: 'login',
			  	type: 'text',
			  	value: TempStore.memberInfo.memberInfo.login
			});
			input30.addClass('editAdd');

		var tr31 = $('<tr></tr>', {
			});
		var th31 = $('<th></th>', {
			  	text: 'want_email'
			});
		var td31 = $('<td></td>', {
			});
		var input31 = $('<input>', {
			  	id: 'want_email',
			  	type: 'text',
			  	value: TempStore.memberInfo.wantEmail
			});
			input31.addClass('editAdd');

		var tr32 = $('<tr></tr>', {
			});
		var th32 = $('<th></th>', {
			  	text: 'session_code'
			});
		var td32 = $('<td></td>', {
			});
		var input32 = $('<input>', {
			  	id: 'session_code',
			  	type: 'text',
			  	value: TempStore.memberInfo.sessionCode
			});

		var tr33 = $('<tr></tr>', {
			});
		var th33 = $('<th></th>', {
			  	text: 'updated'
			});
		var td33 = $('<td></td>', {
			});
		var input33 = $('<input>', {
			  	id: 'updated',
			  	type: 'text',
			  	value: TempStore.memberInfo.updated
			});
			input33.addClass('editAdd');

		var tr34 = $('<tr></tr>', {
			});
		var th34 = $('<th></th>', {
			  	text: 'last_news_email'
			});
		var td34 = $('<td></td>', {
			});
		var input34 = $('<input>', {
			  	id: 'last_news_email',
			  	type: 'text',
			  	value: TempStore.memberInfo.lastNewsEmail
			});
			input34.addClass('editAdd');

		var tr35 = $('<tr></tr>', {
			});
		var th35 = $('<th></th>', {
			  	text: 'last_news_email_info'
			});
		var td35 = $('<td></td>', {
			});
		var input35 = $('<input>', {
			  	id: 'last_news_email_info',
			  	type: 'text',
			  	value: TempStore.memberInfo.lastNewsEmailInfo
			});
			input35.addClass('editAdd');

		var tr36 = $('<tr></tr>', {
			});
		var th36 = $('<th></th>', {
			  	text: 'origin'
			});
		var td36 = $('<td></td>', {
			});
		var input36 = $('<input>', {
			  	id: 'origin',
			  	type: 'text',
			  	value: TempStore.memberInfo.origin
			});
			input36.addClass('editAdd');		
					
		th1.appendTo(tr1);
		th2.appendTo(tr2);
		th3.appendTo(tr3);
		th4.appendTo(tr4);
		th5.appendTo(tr5);
		th6.appendTo(tr6);
		th7.appendTo(tr7);
		/*th8.appendTo(tr8);
		th9.appendTo(tr9);
		th10.appendTo(tr10);
		th11.appendTo(tr11);
		th12.appendTo(tr12);*/
		th13.appendTo(tr13);
		//th14.appendTo(tr14);
		th15.appendTo(tr15);
		/*th16.appendTo(tr16);
		th17.appendTo(tr17);
		th18.appendTo(tr18);
		th19.appendTo(tr19);
		th20.appendTo(tr20);
		th21.appendTo(tr21);
		th22.appendTo(tr22);
		th23.appendTo(tr23);*/
		th24.appendTo(tr24);
		th25.appendTo(tr25);
		th26.appendTo(tr26);
		th27.appendTo(tr27);
		th28.appendTo(tr28);
		th29.appendTo(tr29);
		th30.appendTo(tr30);
		th31.appendTo(tr31);
		th32.appendTo(tr32);
		th33.appendTo(tr33);
		th34.appendTo(tr34);
		th35.appendTo(tr35);
		th36.appendTo(tr36);			
				
	
		input1.appendTo(td1);
		input2.appendTo(td2);
		input3.appendTo(td3);
		input4.appendTo(td4);
		input5.appendTo(td5);
		input6.appendTo(td6);
		input7.appendTo(td7);
		/*input8.appendTo(td8);
		input9.appendTo(td9);
		input10.appendTo(td10);
		input11.appendTo(td11);
		input12.appendTo(td12);*/
		input13.appendTo(td13);
		//input14.appendTo(td14);
		input15.appendTo(td15);
		/*input16.appendTo(td16);
		input17.appendTo(td17);
		input18.appendTo(td18);
		input19.appendTo(td19);
		input20.appendTo(td20);
		input21.appendTo(td21);
		input22.appendTo(td22);
		input23.appendTo(td23);*/
		input24.appendTo(td24);
		input25.appendTo(td25);
		input26.appendTo(td26);
		input27.appendTo(td27);
		input28.appendTo(td28);
		input29.appendTo(td29);
		input30.appendTo(td30);
		input31.appendTo(td31);
		input32.appendTo(td32);
		input33.appendTo(td33);
		input34.appendTo(td34);
		input35.appendTo(td35);
		input36.appendTo(td36);				
				

		td1.appendTo(tr1);
		td2.appendTo(tr2);
		td3.appendTo(tr3);
		td4.appendTo(tr4);
		td5.appendTo(tr5);
		td6.appendTo(tr6);
		td7.appendTo(tr7);
		/*td8.appendTo(tr8);
		td9.appendTo(tr9);
		td10.appendTo(tr10);
		td11.appendTo(tr11);
		td12.appendTo(tr12);*/
		td13.appendTo(tr13);
		//td14.appendTo(tr14);
		td15.appendTo(tr15);
		/*td16.appendTo(tr16);
		td17.appendTo(tr17);
		td18.appendTo(tr18);
		td19.appendTo(tr19);
		td20.appendTo(tr20);
		td21.appendTo(tr21);
		td22.appendTo(tr22);
		td23.appendTo(tr23);*/
		td24.appendTo(tr24);
		td25.appendTo(tr25);
		td26.appendTo(tr26);
		td27.appendTo(tr27);
		td28.appendTo(tr28);
		td29.appendTo(tr29);
		td30.appendTo(tr30);
		td31.appendTo(tr31);
		td32.appendTo(tr32);
		td33.appendTo(tr33);
		td34.appendTo(tr34);
		td35.appendTo(tr35);
		td36.appendTo(tr36);		
		

		tr25.appendTo(self.config.containerIdentifier4);
		if (!displayAdd) {
			tr1.appendTo(self.config.containerIdentifier4);
		};
		tr7.appendTo(self.config.containerIdentifier4);
		tr2.appendTo(self.config.containerIdentifier4);
		tr3.appendTo(self.config.containerIdentifier4);
		tr4.appendTo(self.config.containerIdentifier4);
		tr5.appendTo(self.config.containerIdentifier4);
		tr6.appendTo(self.config.containerIdentifier4);
		/*tr8.appendTo(self.config.containerIdentifier4);
		tr9.appendTo(self.config.containerIdentifier4);
		tr10.appendTo(self.config.containerIdentifier4);
		tr11.appendTo(self.config.containerIdentifier4);
		tr12.appendTo(self.config.containerIdentifier4);*/
		tr13.appendTo(self.config.containerIdentifier4);
		//tr14.appendTo(self.config.containerIdentifier4);
		tr15.appendTo(self.config.containerIdentifier4);
		/*tr16.appendTo(self.config.containerIdentifier4);
		tr17.appendTo(self.config.containerIdentifier4);
		tr18.appendTo(self.config.containerIdentifier4);
		tr19.appendTo(self.config.containerIdentifier4);
		tr20.appendTo(self.config.containerIdentifier4);
		tr21.appendTo(self.config.containerIdentifier4);
		tr22.appendTo(self.config.containerIdentifier4);
		tr23.appendTo(self.config.containerIdentifier4);*/
		tr24.appendTo(self.config.containerIdentifier4);
		tr26.appendTo(self.config.containerIdentifier4);
		tr27.appendTo(self.config.containerIdentifier4);
		tr28.appendTo(self.config.containerIdentifier4);
		tr29.appendTo(self.config.containerIdentifier4);
		if (!displayAdd) {
			tr30.appendTo(self.config.containerIdentifier4);
		}
		tr31.appendTo(self.config.containerIdentifier4);
		tr32.appendTo(self.config.containerIdentifier4);
		tr33.appendTo(self.config.containerIdentifier4);
		tr34.appendTo(self.config.containerIdentifier4);
		tr35.appendTo(self.config.containerIdentifier4);
		tr36.appendTo(self.config.containerIdentifier4);

		console.log('displayMemberInfo for popup');

	},
	addH1: function(obj) {
		var h1 = $('<h1>', {
			  	text: obj.text,
			});
		console.log('obj.text addH1');
		h1.prependTo(obj.identifier);
	},
	addH3: function (obj) {
		var h3 = $('<h3>', {
			  	text: obj.text,
			});
		console.log('obj.text addH3');
		h3.prependTo(obj.identifier);
	},
	addButton: function(obj) {
		var button = $('<button>', {
			  	text: obj.text
			  	

			});
			button.addClass(obj.elementClass);
		console.log(obj.elementClass);
		button.appendTo(obj.identifier);
	},
	addInput: function(obj) {
		var input = $('<input>', {
			  	value: obj.text
			});
			input.addClass(obj.elementClass);
			input.val(obj.val);
			input.attr('placeholder', obj.placeholderText);
			//input.attr("required", "true");
			input.appendTo(obj.identifier);


	},
	addCheckbox: function(obj) {
		var input = $('<input>', {
			  	type: 'checkbox',
			  	name: obj.name
			});
			input.addClass(obj.elementClass);
			input.val(obj.val);
			input.appendTo(obj.identifier);
			input.attr('checked', obj.checked);
	},
	addRadio: function(obj) {
		var input = $('<input>', {
			  	type: 'radio',
			  	name: obj.name
			});
			input.addClass(obj.elementClass);
			input.val(obj.val);
			input.appendTo(obj.identifier);
			input.attr('checked', obj.checked);
	},
	addSpan: function(obj) {
		var span = $('<span>', {
			  	text: obj.text
			});
			span.addClass(obj.elementClass);
			span.appendTo(obj.identifier);

	},
	addDiv: function(obj) {
		var div = $('<div>', function() {

		});
		div.addClass(obj.elementClass);
		div.appendTo(obj.identifier);
	},
	addBr: function(obj) {
		var br = $('<br>', function() {

		});
		br.appendTo(obj.identifier);
	}



	
};
});