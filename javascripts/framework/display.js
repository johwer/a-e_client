/*Display*/
var Display = Display || {
	init: function( config ) {
		this.config = config;
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
	/*******************************************************************************************************************/
	displayAgencyInfo: function (obj) {
		$( obj ).each(function(index,value) {

		  //$( this ).addClass( "foo" );
		  
		  //console.log(index);
		  //console.log(value);
			 var self = Display;

			 var tr = $('<tr></tr>', {
			  	
			  	class: 'agencyInfo'
			  });

			 var company = $('<td></td>', {
			 	text: value.companyName,
			 	class: 'company clickable hover'
			 }).appendTo(tr);

			 var country = $('<td></td>', {
			 	text: value.country,
			 	class: 'country clickable hover'
			 }).appendTo(tr);
			 
			 var city = $('<td></td>', {
			 	text: value.city,
			 	class: 'city clickable hover'
			 }).appendTo(tr);

			 var areaCode = $('<td></td>', {
			 	text: value.areaCode,
			 	class: 'areaCode clickable hover'
			 }).appendTo(tr);

			 var address = $('<td></td>', {
			 	text: value.address,
			 	class: 'address clickable hover'
			 }).appendTo(tr);

			 tr.appendTo(self.config.containerIdentifier1);	
		 
		});		
	},
	/*******************************************************************************************************************/
	displayMembersInfo: function(obj) {
		$( obj ).each(function(index,value) {
		  //$( this ).addClass( "foo" );
		  
		  //console.log(index);
			 //console.log(value);
			 var self = Display;

			 var tr = $('<tr></tr>', {
			  	
			  	class: 'agencyInfo'
			  });

			 var login = $('<td></td>', {
			 	text: value.login,
			 	class: 'displayResults clickable hover'
			 });

			 var firstName	 = $('<td></td>', {
			 	text: value.firstName,
			 	class: 'displayResults clickable hover align-right'
			 });
			 
			 var lastName = $('<td></td>', {
			 	text: value.lastName,
			 	class: 'displayResults clickable hover'
			 });

			 var eMail = $('<td></td>', {
			 	class: 'clickable hover'
			 });

			 var phoneDaytime = $('<td></td>', {
			 	class: 'clickable hover'
			 	
			 });

			 var phoneCellular = $('<td></td>', {
			 	class: 'clickable hover'
			 	
			 });

			 
			var aTag1 = $('<a>', {
			 	href: "mailto:"+ value.email,
			 	text: value.email,
			 	class: 'displayResults mail'
			 	
			 });

			var aTag2 = $('<a>', {
			 	href: "tel:"+value.phoneDaytime,
			 	text: value.phoneDaytime,
			 	class: 'displayResults phoneDaytime'
			 	
			 });

			var aTag3 = $('<a>', {
			 	href: "tel:"+value.phoneCellular,
			 	text: value.phoneCellular,
			 	class: 'displayResults phoneCellular'
			 	
			 });


			aTag1.appendTo(eMail);
			aTag2.appendTo(phoneDaytime);
			aTag3.appendTo(phoneCellular);
			
			
			login.appendTo(tr);
			firstName.appendTo(tr);
			lastName.appendTo(tr); 
			eMail.appendTo(tr);
			phoneDaytime.appendTo(tr);
			phoneCellular.appendTo(tr);

			tr.appendTo(self.config.containerIdentifier2);	
		 
		});	

	},
	/*******************************************************************************************************************/
	displayMemberInfo: function() {
		console.log(TempStore.memberInfo);
		console.log('sdsfdsf');
		var self = Display;

		var tr1 = $('<tr></tr>', {
			  	
			});
		var th1 = $('<th></th>', {
			  	text: 'member_id',
			  	
			});
		var td1 = $('<td></td>', {
			  	text: TempStore.memberInfo.id,
			  	
			});

		var tr2 = $('<tr></tr>', {
			  	
			});
		var th2 = $('<th></th>', {
			  	text: 'password',
			  	
			});
		var td2 = $('<td></td>', {
			  	text: TempStore.memberInfo.password,
			  	
			});

		var tr3 = $('<tr></tr>', {
			  	
			});
		var th3 = $('<th></th>', {
			  	text: 'encrypted_password',
			  	
			});
		var td3 = $('<td></td>', {
			  	text: TempStore.memberInfo.encryptedPassword,
			  	
			});

		var tr4 = $('<tr></tr>', {
			  	
			});
		var th4 = $('<th></th>', {
			  	text: 'first_name',
			  	
			});
		var td4 = $('<td></td>', {
			  	text: TempStore.memberInfo.memberInfo.firstName,
			  	
			});

		var tr5 = $('<tr></tr>', {
			  	
			});
		var th5 = $('<th></th>', {
			  	text: 'last_name',
			  	
			});
		var td5 = $('<td></td>', {
			  	text: TempStore.memberInfo.memberInfo.lastName,
			  	
			});
		var tr6 = $('<tr></tr>', {
			  	
			});
		var th6 = $('<th></th>', {
			  	text: 'email',
			  	
			});
		var td6 = $('<td></td>', {
			 
			  	
			});
		var a6 = $('<a></a>', {
			  	href: "mailto:"+ TempStore.memberInfo.memberInfo.email,
			 	text: TempStore.memberInfo.memberInfo.email,
			});


		var tr7 = $('<tr></tr>', {
			  	
			});
		var th7 = $('<th></th>', {
			  	text: 'company_chain',
			  	
			});
		var td7 = $('<td></td>', {
			  	text: TempStore.memberInfo.agencyInfo.companyChain,
			  	
			});

		var tr8 = $('<tr></tr>', {
			  	
			});
		var th8 = $('<th></th>', {
			  	text: 'country',
			  	
			});
		var td8 = $('<td></td>', {
			  	text: TempStore.memberInfo.agencyInfo.country,
			  	
			});

		var tr9 = $('<tr></tr>', {
			  	
			});
		var th9 = $('<th></th>', {
			  	text: 'city',
			  	
			});
		var td9 = $('<td></td>', {
			  	text: TempStore.memberInfo.agencyInfo.city,
			  	
			});

		var tr10 = $('<tr></tr>', {
			  	
			});
		var th10 = $('<th></th>', {
			  	text: 'area_code',
			  	
			});
		var td10 = $('<td></td>', {
			  	text: TempStore.memberInfo.agencyInfo.areaCode,
			  	
			});

		var tr11 = $('<tr></tr>', {
			  	
			});
		var th11 = $('<th></th>', {
			  	text: 'company_name',
			  	
			});
		var td11 = $('<td></td>', {
			  	text: TempStore.memberInfo.agencyInfo.companyName,
			  	
			});

		var tr12 = $('<tr></tr>', {
			  	
			});
		var th12 = $('<th></th>', {
			  	text: 'address',
			  	
			});
		var td12 = $('<td></td>', {
			  	text: TempStore.memberInfo.agencyInfo.address,
			  	
			});

		var tr13 = $('<tr></tr>', {
			  	
			});
		var th13 = $('<th></th>', {
			  	text: 'phone_daytime',
			  	
			});
		var td13 = $('<td></td>', {
			  	text: TempStore.memberInfo.memberInfo.phoneDaytime,
			  	
			});

		var tr14 = $('<tr></tr>', {
			  	
			});
		var th14 = $('<th></th>', {
			  	text: 'phone_home',
			  	
			});
		var td14 = $('<td></td>', {
			  	text: TempStore.memberInfo.phoneHome,
			  	
			});

		var tr15 = $('<tr></tr>', {
			  	
			});
		var th15 = $('<th></th>', {
			  	text: 'phone_cellular',
			  	
			});
		var td15 = $('<td></td>', {
			  	text: TempStore.memberInfo.memberInfo.phoneCellular,
			  	
			});

		var tr16 = $('<tr></tr>', {
			  	
			});
		var th16 = $('<th></th>', {
			  	text: 'fax',
			  	
			});
		var td16 = $('<td></td>', {
			  	text: TempStore.memberInfo.fax,
			  	
			});

		var tr17 = $('<tr></tr>', {
			  	
			});
		var th17 = $('<th></th>', {
			  	text: 'birthdate',
			  	
			});
		var td17 = $('<td></td>', {
			  	text: TempStore.memberInfo.birthdate,
			  	
			});

		var tr18 = $('<tr></tr>', {
			  	
			});
		var th18 = $('<th></th>', {
			  	text: 'sex',
			  	
			});
		var td18 = $('<td></td>', {
			  	text: TempStore.memberInfo.sex,
			  	
			});

		var tr19 = $('<tr></tr>', {
			  	
			});
		var th19 = $('<th></th>', {
			  	text: 'personal_description',
			  	
			});
		var td19 = $('<td></td>', {
			  	text: TempStore.memberInfo.personalDescription,
			  	
			});

		var tr20 = $('<tr></tr>', {
			  	
			});
		var th20 = $('<th></th>', {
			  	text: 'civil_status',
			  	
			});
		var td20 = $('<td></td>', {
			  	text: TempStore.memberInfo.civilStatus,
			  	
			});

		var tr21 = $('<tr></tr>', {
			  	
			});
		var th21 = $('<th></th>', {
			  	text: 'occupation',
			  	
			});
		var td21 = $('<td></td>', {
			  	text: TempStore.memberInfo.occupation,
			  	
			});

		var tr22 = $('<tr></tr>', {
			  	
			});
		var th22 = $('<th></th>', {
			  	text: 'traveller_type',
			  	
			});
		var td22 = $('<td></td>', {
			  	text: TempStore.memberInfo.travellerType,
			  	
			});

		var tr23 = $('<tr></tr>', {
			  	
			});
		var th23 = $('<th></th>', {
			  	text: 'show_acceptance',
			  	
			});
		var td23 = $('<td></td>', {
			  	text: TempStore.memberInfo.showAcceptance,
			  	
			});

		var tr24 = $('<tr></tr>', {
			  	
			});
		var th24 = $('<th></th>', {
			  	text: 'last_visit',
			  	
			});
		var td24 = $('<td></td>', {
			  	text: TempStore.memberInfo.lastVisit,
			  	
			});

		var tr25 = $('<tr></tr>', {
			  	
			});
		var th25 = $('<th></th>', {
			  	text: 'belongs_to_site',
			  	
			});
		var td25 = $('<td></td>', {
			  	text: TempStore.memberInfo.belongsToSite,
			  	
			});

		var tr26 = $('<tr></tr>', {
			  	
			});
		var th26 = $('<th></th>', {
			  	text: 'regdate',
			  	
			});
		var td26 = $('<td></td>', {
			  	text: TempStore.memberInfo.regdate,
			  	
			});

		var tr27 = $('<tr></tr>', {
			  	
			});
		var th27 = $('<th></th>', {
			  	text: 'unregdate',
			  	
			});
		var td27 = $('<td></td>', {
			  	text: TempStore.memberInfo.unregdate,
			  	
			});

		var tr28 = $('<tr></tr>', {
			  	
			});
		var th28 = $('<th></th>', {
			  	text: 'vip',
			  	
			});
		var td28 = $('<td></td>', {
			  	text: TempStore.memberInfo.vip,
			  	
			});

		var tr29 = $('<tr></tr>', {
			  	
			});
		var th29 = $('<th></th>', {
			  	text: 'status',
			  	
			});
		var td29 = $('<td></td>', {
			  	text: TempStore.memberInfo.status,
			  	
			});

		/*var tr30 = $('<tr></tr>', {
			  	
			});
		var th30 = $('<th></th>', {
			  	text: 'last_visit',
			  	
			});
		var td30 = $('<td></td>', {
			  	text: TempStore.memberInfo.last_visit,
			  	
			});*/

		var tr31 = $('<tr></tr>', {
			  	
			});
		var th31 = $('<th></th>', {
			  	text: 'want_email',
			  	
			});
		var td31 = $('<td></td>', {
			  	text: TempStore.memberInfo.wantEmail,
			  	
			});

		var tr32 = $('<tr></tr>', {
			  	
			});
		var th32 = $('<th></th>', {
			  	text: 'session_code',
			  	
			});
		var td32 = $('<td></td>', {
			  	text: TempStore.memberInfo.sessionCode,
			  	
			});

		var tr33 = $('<tr></tr>', {
			  	
			});
		var th33 = $('<th></th>', {
			  	text: 'updated',
			  	
			});
		var td33 = $('<td></td>', {
			  	text: TempStore.memberInfo.updated,
			  	
			});

		var tr34 = $('<tr></tr>', {
			  	
			});
		var th34 = $('<th></th>', {
			  	text: 'last_news_email',
			  	
			});
		var td34 = $('<td></td>', {
			  	text: TempStore.memberInfo.lastNewsEmail,
			  	
			});

		var tr35 = $('<tr></tr>', {
			  	
			});
		var th35 = $('<th></th>', {
			  	text: 'last_news_email_info',
			  	
			});
		var td35 = $('<td></td>', {
			  	text: TempStore.memberInfo.lastNewsEmailInfo,
			  	
			});

		var tr36 = $('<tr></tr>', {
			  	
			});
		var th36 = $('<th></th>', {
			  	text: 'origin',
			  	
			});
		var td36 = $('<td></td>', {
			  	text: TempStore.memberInfo.origin,
			  	
			});
						
					
		//Append the th element to each tr tag			
					
		th1.appendTo(tr1);
		th2.appendTo(tr2);
		th3.appendTo(tr3);
		th4.appendTo(tr4);
		th5.appendTo(tr5);
		th6.appendTo(tr6);
		th7.appendTo(tr7);
		th8.appendTo(tr8);
		th9.appendTo(tr9);
		th10.appendTo(tr10);
		th11.appendTo(tr11);
		th12.appendTo(tr12);
		th13.appendTo(tr13);
		th14.appendTo(tr14);
		th15.appendTo(tr15);
		th16.appendTo(tr16);
		th17.appendTo(tr17);
		th18.appendTo(tr18);
		th19.appendTo(tr19);
		th20.appendTo(tr20);
		th21.appendTo(tr21);
		th22.appendTo(tr22);
		th23.appendTo(tr23);
		th24.appendTo(tr24);
		th25.appendTo(tr25);
		th26.appendTo(tr26);
		th27.appendTo(tr27);
		th28.appendTo(tr28);
		th29.appendTo(tr29);
		//th30.appendTo(tr30);
		th31.appendTo(tr31);
		th32.appendTo(tr32);
		th33.appendTo(tr33);
		th34.appendTo(tr34);
		th35.appendTo(tr35);
		th36.appendTo(tr36);			
				
		// Append td element to the tr element		
					
		td1.appendTo(tr1);
		td2.appendTo(tr2);
		td3.appendTo(tr3);
		td4.appendTo(tr4);
		td5.appendTo(tr5);
		td6.appendTo(tr6);
		td7.appendTo(tr7);
		td8.appendTo(tr8);
		td9.appendTo(tr9);
		td10.appendTo(tr10);
		td11.appendTo(tr11);
		td12.appendTo(tr12);
		td13.appendTo(tr13);
		td14.appendTo(tr14);
		td15.appendTo(tr15);
		td16.appendTo(tr16);
		td17.appendTo(tr17);
		td18.appendTo(tr18);
		td19.appendTo(tr19);
		td20.appendTo(tr20);
		td21.appendTo(tr21);
		td22.appendTo(tr22);
		td23.appendTo(tr23);
		td24.appendTo(tr24);
		td25.appendTo(tr25);
		td26.appendTo(tr26);
		td27.appendTo(tr27);
		td28.appendTo(tr28);
		td29.appendTo(tr29);
		//td30.appendTo(tr30);
		td31.appendTo(tr31);
		td32.appendTo(tr32);
		td33.appendTo(tr33);
		td34.appendTo(tr34);
		td35.appendTo(tr35);
		td36.appendTo(tr36);

		// append a atag to the td element			
		a6.appendTo(td6);		
		
		// append each tr to the dom
		tr1.appendTo(self.config.containerIdentifier3);
		tr2.appendTo(self.config.containerIdentifier3);
		tr3.appendTo(self.config.containerIdentifier3);
		tr4.appendTo(self.config.containerIdentifier3);
		tr5.appendTo(self.config.containerIdentifier3);
		tr6.appendTo(self.config.containerIdentifier3);
		tr7.appendTo(self.config.containerIdentifier3);
		tr8.appendTo(self.config.containerIdentifier3);
		tr9.appendTo(self.config.containerIdentifier3);
		tr10.appendTo(self.config.containerIdentifier3);
		tr11.appendTo(self.config.containerIdentifier3);
		tr12.appendTo(self.config.containerIdentifier3);
		tr13.appendTo(self.config.containerIdentifier3);
		tr14.appendTo(self.config.containerIdentifier3);
		tr15.appendTo(self.config.containerIdentifier3);
		tr16.appendTo(self.config.containerIdentifier3);
		tr17.appendTo(self.config.containerIdentifier3);
		tr18.appendTo(self.config.containerIdentifier3);
		tr19.appendTo(self.config.containerIdentifier3);
		tr20.appendTo(self.config.containerIdentifier3);
		tr21.appendTo(self.config.containerIdentifier3);
		tr22.appendTo(self.config.containerIdentifier3);
		tr23.appendTo(self.config.containerIdentifier3);
		tr24.appendTo(self.config.containerIdentifier3);
		tr25.appendTo(self.config.containerIdentifier3);
		tr26.appendTo(self.config.containerIdentifier3);
		tr27.appendTo(self.config.containerIdentifier3);
		tr28.appendTo(self.config.containerIdentifier3);
		tr29.appendTo(self.config.containerIdentifier3);
		//tr30.appendTo(self.config.containerIdentifier3);
		tr31.appendTo(self.config.containerIdentifier3);
		tr32.appendTo(self.config.containerIdentifier3);
		tr33.appendTo(self.config.containerIdentifier3);
		tr34.appendTo(self.config.containerIdentifier3);
		tr35.appendTo(self.config.containerIdentifier3);
		tr36.appendTo(self.config.containerIdentifier3);

		console.log('displaying member info');
	},
	/*******************************************************************************************************************/
	displayEditAdd: function() {
		var self = Display;

		var tr1 = $('<tr></tr>', {
			  	
			});
		var th1 = $('<th></th>', {
			  	text: 'member_id'
			  	
			});
		var td1 = $('<td></td>', {
			  	
			  	
			});
		var input1 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'member_id',
			  	type:'text',
			  	value: TempStore.memberInfo.id
			});

		var tr2 = $('<tr></tr>', {
			  	
			});
		var th2 = $('<th></th>', {
			  	text: 'password'
			  	
			});
		var td2 = $('<td></td>', {
			  	
			  	
			});
		var input2 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'password',
			  	type: 'text',
			  	value: TempStore.memberInfo.password
			});


		var tr3 = $('<tr></tr>', {
			  	
			});
		var th3 = $('<th></th>', {
			  	text: 'encrypted_password'
			  	
			});
		var td3 = $('<td></td>', {
		
			  	
			});
		var input3 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'encrypted_password',
			  	type: 'text',
			  	value: TempStore.memberInfo.encryptedPassword
			});

		var tr4 = $('<tr></tr>', {
			  	
			});
		var th4 = $('<th></th>', {
			  	text: 'first_name'
			  	
			});
		var td4 = $('<td></td>', {
			  	
			  	
			});
		var input4 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'first_name',
			  	type: 'text',
			  	value: TempStore.memberInfo.memberInfo.firstName
			});

		var tr5 = $('<tr></tr>', {
			  	
			});
		var th5 = $('<th></th>', {
			  	text: 'last_name'
			  	
			});
		var td5 = $('<td></td>', {
			  
			  	
			});
		var input5 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'last_name',
			  	type: 'text',
			  	value: TempStore.memberInfo.memberInfo.lastName
			});

		var tr6 = $('<tr></tr>', {
			  	
			});
		var th6 = $('<th></th>', {
			  	text: 'email'
			  	
			});
		var td6 = $('<td></td>', {
			  	
			  	
			});
		var input6 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'email',
			  	type: 'email',
			  	required: true,
			  	value: TempStore.memberInfo.memberInfo.email
			});
		


		var tr7 = $('<tr></tr>', {
			  	
			});
		var th7 = $('<th></th>', {
			  	text: 'company_chain'
			  	
			});
		var td7 = $('<td></td>', {
			  	
			  	
			});
		var input7 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'company_chain',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.companyChain
			});

		var tr8 = $('<tr></tr>', {
			  	
			});
		var th8 = $('<th></th>', {
			  	text: 'country'
			  	
			});
		var td8 = $('<td></td>', {
			  	
			  	
			});
		var input8 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'country',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.country
			});

		var tr9 = $('<tr></tr>', {
			  	
			});
		var th9 = $('<th></th>', {
			  	text: 'city'
			  	
			});
		var td9 = $('<td></td>', {
			  
			});
		var input9 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'city',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.city
			});

		var tr10 = $('<tr></tr>', {
			  	
			});
		var th10 = $('<th></th>', {
			  	text: 'area_code'
			  	
			});
		var td10 = $('<td></td>', {
			  
			});
		var input10 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'area_code',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.areaCode
			});

		var tr11 = $('<tr></tr>', {
			  	
			});
		var th11 = $('<th></th>', {
			  	text: 'company_name'
			  	
			});
		var td11 = $('<td></td>', {
			  	
			});
		var input11 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'company_name',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.companyName
			});

		var tr12 = $('<tr></tr>', {
			  	
			});
		var th12 = $('<th></th>', {
			  	text: 'address'
			  	
			});
		var td12 = $('<td></td>', {
			  
			  	
			});
		var input12 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'address',
			  	type: 'text',
			  	value: TempStore.memberInfo.agencyInfo.address
			});

		var tr13 = $('<tr></tr>', {
			  	
			});
		var th13 = $('<th></th>', {
			  	text: 'phone_daytime'
			  	
			});
		var td13 = $('<td></td>', {
			  	
			  	
			});
		var input13 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'phone_daytime',
			  	type: 'tel',
			  	pattern: '',
			  	value: TempStore.memberInfo.memberInfo.phoneDaytime
			});

		var tr14 = $('<tr></tr>', {
			  	
			});
		var th14 = $('<th></th>', {
			  	text: 'phone_home'
			  	
			});
		var td14 = $('<td></td>', {
			  
			  	
			});
		var input14 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'phone_home',
			  	type: 'tel',
			  	value: TempStore.memberInfo.phoneHome
			});

		var tr15 = $('<tr></tr>', {
			  	
			});
		var th15 = $('<th></th>', {
			  	text: 'phone_cellular'
			  	
			});
		var td15 = $('<td></td>', {
			  	
			  	
			});
		var input15 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'phone_cellular',
			  	type: 'tel',
			  	value: TempStore.memberInfo.memberInfo.phoneCellular
			});

		var tr16 = $('<tr></tr>', {
			  	
			});
		var th16 = $('<th></th>', {
			  	text: 'fax'
			  	
			});
		var td16 = $('<td></td>', {
			  
			  	
			});
		var input16 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'fax',
			  	type: 'tel',
			  	value: TempStore.memberInfo.fax
			});

		var tr17 = $('<tr></tr>', {
			  	
			});
		var th17 = $('<th></th>', {
			  	text: 'birthdate'
			  	
			});
		var td17 = $('<td></td>', {
			  
			  	
			});
		var input17 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'birthdate',
			  	type: 'text',
			  	value: TempStore.memberInfo.birthdate
			});

		var tr18 = $('<tr></tr>', {
			  	
			});
		var th18 = $('<th></th>', {
			  	text: 'sex'
			  	
			});
		var td18 = $('<td></td>', {
			  
			  	
			});
		var input18 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'sex',
			  	type: 'text',
			  	value: TempStore.memberInfo.sex
			});

		var tr19 = $('<tr></tr>', {
			  	
			});
		var th19 = $('<th></th>', {
			  	text: 'personal_description'
			  	
			});
		var td19 = $('<td></td>', {
			  
			  	
			});
		var input19 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'personal_description',
			  	type: 'text',
			  	value: TempStore.memberInfo.personalDescription
			});

		var tr20 = $('<tr></tr>', {
			  	
			});
		var th20 = $('<th></th>', {
			  	text: 'civil_status'
			  	
			});
		var td20 = $('<td></td>', {
			  
			  	
			});
		var input20 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'civil_status',
			  	type: 'text',
			  	value: TempStore.memberInfo.civilStatus
			});

		var tr21 = $('<tr></tr>', {
			  	
			});
		var th21 = $('<th></th>', {
			  	text: 'occupation'
			  	
			});
		var td21 = $('<td></td>', {
			  
			  	
			});
		var input21 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'occupation',
			  	type: 'text',
			  	value: TempStore.memberInfo.occupation
			});

		var tr22 = $('<tr></tr>', {
			  	
			});
		var th22 = $('<th></th>', {
			  	text: 'traveller_type'
			  	
			});
		var td22 = $('<td></td>', {
			  
			  	
			});
		var input22 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'traveller_type',
			  	type: 'text',
			  	value: TempStore.memberInfo.travellerType
			});

		var tr23 = $('<tr></tr>', {
			  	
			});
		var th23 = $('<th></th>', {
			  	text: 'show_acceptance'
			  	
			});
		var td23 = $('<td></td>', {
			  
			  	
			});
		var input23 = $('<input>', {
			  	class: 'editAdd',
			  	id:'show_acceptance',
			  	type: 'text',
			  	value: TempStore.memberInfo.showAcceptance
			});

		var tr24 = $('<tr></tr>', {
			  	
			});
		var th24 = $('<th></th>', {
			  	text: 'last_visit'
			  	
			});
		var td24 = $('<td></td>', {
			  
			  	
			});
		var input24 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'last_visit',
			  	type: 'text',
			  	value: TempStore.memberInfo.lastVisit
			});

		var tr25 = $('<tr></tr>', {
			  	
			});
		var th25 = $('<th></th>', {
			  	text: 'belongs_to_site'
			  	
			});
		var td25 = $('<td></td>', {
			  	
			  	
			});
		var input25 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'belongs_to_site',
			  	type: 'text',
			  	value: TempStore.memberInfo.belongsToSite
			});

		var tr26 = $('<tr></tr>', {
			  	
			});
		var th26 = $('<th></th>', {
			  	text: 'regdate'
			  	
			});
		var td26 = $('<td></td>', {
			  	
			  	
			});
		var input26 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'regdate',
			  	type: 'text',
			  	value: TempStore.memberInfo.regdate
			});

		var tr27 = $('<tr></tr>', {
			  	
			});
		var th27 = $('<th></th>', {
			  	text: 'unregdate'
			  	
			});
		var td27 = $('<td></td>', {
			  	
			  	
			});
		var input27 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'unregdate',
			  	type: 'text',
			  	value: TempStore.memberInfo.unregdate
			});

		var tr28 = $('<tr></tr>', {
			  	
			});
		var th28 = $('<th></th>', {
			  	text: 'vip'
			  	
			});
		var td28 = $('<td></td>', {
			  	
			  	
			});
		var input28 = $('<input>', {
			  	class: 'editAdd',
			  	id:'vip',
			  	type: 'text',
			  	value: TempStore.memberInfo.vip
			});

		var tr29 = $('<tr></tr>', {
			  	
			});
		var th29 = $('<th></th>', {
			  	text: 'status'
			  	
			});
		var td29 = $('<td></td>', {
			  	
			  	
			});
		var input29 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'status',
			  	type: 'text',
			  	value: TempStore.memberInfo.status
			});

		var tr30 = $('<tr></tr>', {
			  	
			});
		var th30 = $('<th></th>', {
			  	text: 'login'
			  	
			});
		var td30 = $('<td></td>', {
			  	
			  	
			});
		var input30 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'login',
			  	type: 'text',
			  	value: TempStore.memberInfo.memberInfo.login
			});

		var tr31 = $('<tr></tr>', {
			  	
			});
		var th31 = $('<th></th>', {
			  	text: 'want_email'
			  	
			});
		var td31 = $('<td></td>', {
			  	
			  	
			});
		var input31 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'want_email',
			  	type: 'text',
			  	value: TempStore.memberInfo.wantEmail
			});

		var tr32 = $('<tr></tr>', {
			  	
			});
		var th32 = $('<th></th>', {
			  	text: 'session_code'
			  	
			});
		var td32 = $('<td></td>', {
			  	
			  	
			});
		var input32 = $('<input>', {
			  	class: 'editAdd',
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
			  	class: 'editAdd',
			  	id: 'updated',
			  	type: 'text',
			  	value: TempStore.memberInfo.updated
			});

		var tr34 = $('<tr></tr>', {
			  	
			});
		var th34 = $('<th></th>', {
			  	text: 'last_news_email'
			  	
			});
		var td34 = $('<td></td>', {
			  
			  	
			});
		var input34 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'last_news_email',
			  	type: 'text',
			  	value: TempStore.memberInfo.lastNewsEmail
			});

		var tr35 = $('<tr></tr>', {
			  	
			});
		var th35 = $('<th></th>', {
			  	text: 'last_news_email_info'
			  	
			});
		var td35 = $('<td></td>', {
			  	
			  	
			});
		var input35 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'last_news_email_info',
			  	type: 'text',
			  	value: TempStore.memberInfo.lastNewsEmailInfo
			});

		var tr36 = $('<tr></tr>', {
			  	
			});
		var th36 = $('<th></th>', {
			  	text: 'origin'
			  	
			});
		var td36 = $('<td></td>', {
			  
			  	
			});
		var input36 = $('<input>', {
			  	class: 'editAdd',
			  	id: 'origin',
			  	type: 'text',
			  	value: TempStore.memberInfo.origin
			});
					
					
		th1.appendTo(tr1);
		th2.appendTo(tr2);
		th3.appendTo(tr3);
		th4.appendTo(tr4);
		th5.appendTo(tr5);
		th6.appendTo(tr6);
		th7.appendTo(tr7);
		th8.appendTo(tr8);
		th9.appendTo(tr9);
		th10.appendTo(tr10);
		th11.appendTo(tr11);
		th12.appendTo(tr12);
		th13.appendTo(tr13);
		th14.appendTo(tr14);
		th15.appendTo(tr15);
		th16.appendTo(tr16);
		th17.appendTo(tr17);
		th18.appendTo(tr18);
		th19.appendTo(tr19);
		th20.appendTo(tr20);
		th21.appendTo(tr21);
		th22.appendTo(tr22);
		th23.appendTo(tr23);
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
		input8.appendTo(td8);
		input9.appendTo(td9);
		input10.appendTo(td10);
		input11.appendTo(td11);
		input12.appendTo(td12);
		input13.appendTo(td13);
		input14.appendTo(td14);
		input15.appendTo(td15);
		input16.appendTo(td16);
		input17.appendTo(td17);
		input18.appendTo(td18);
		input19.appendTo(td19);
		input20.appendTo(td20);
		input21.appendTo(td21);
		input22.appendTo(td22);
		input23.appendTo(td23);
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
		td8.appendTo(tr8);
		td9.appendTo(tr9);
		td10.appendTo(tr10);
		td11.appendTo(tr11);
		td12.appendTo(tr12);
		td13.appendTo(tr13);
		td14.appendTo(tr14);
		td15.appendTo(tr15);
		td16.appendTo(tr16);
		td17.appendTo(tr17);
		td18.appendTo(tr18);
		td19.appendTo(tr19);
		td20.appendTo(tr20);
		td21.appendTo(tr21);
		td22.appendTo(tr22);
		td23.appendTo(tr23);
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
		
		
		tr1.appendTo(self.config.containerIdentifier4);
		tr2.appendTo(self.config.containerIdentifier4);
		tr3.appendTo(self.config.containerIdentifier4);
		tr4.appendTo(self.config.containerIdentifier4);
		tr5.appendTo(self.config.containerIdentifier4);
		tr6.appendTo(self.config.containerIdentifier4);
		tr7.appendTo(self.config.containerIdentifier4);
		tr8.appendTo(self.config.containerIdentifier4);
		tr9.appendTo(self.config.containerIdentifier4);
		tr10.appendTo(self.config.containerIdentifier4);
		tr11.appendTo(self.config.containerIdentifier4);
		tr12.appendTo(self.config.containerIdentifier4);
		tr13.appendTo(self.config.containerIdentifier4);
		tr14.appendTo(self.config.containerIdentifier4);
		tr15.appendTo(self.config.containerIdentifier4);
		tr16.appendTo(self.config.containerIdentifier4);
		tr17.appendTo(self.config.containerIdentifier4);
		tr18.appendTo(self.config.containerIdentifier4);
		tr19.appendTo(self.config.containerIdentifier4);
		tr20.appendTo(self.config.containerIdentifier4);
		tr21.appendTo(self.config.containerIdentifier4);
		tr22.appendTo(self.config.containerIdentifier4);
		tr23.appendTo(self.config.containerIdentifier4);
		tr24.appendTo(self.config.containerIdentifier4);
		tr25.appendTo(self.config.containerIdentifier4);
		tr26.appendTo(self.config.containerIdentifier4);
		tr27.appendTo(self.config.containerIdentifier4);
		tr28.appendTo(self.config.containerIdentifier4);
		tr29.appendTo(self.config.containerIdentifier4);
		tr30.appendTo(self.config.containerIdentifier4);
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
	addButton: function(obj) {
		var button = $('<button>', {
			  	text: obj.text,
			  	class: obj.class,
			  	type: 'submit'

			});
		console.log(obj.class);
		button.appendTo(obj.identifier);
	}
	
};

Display.init({
	containerIdentifier1: $('#navigator-area-agency-list #tableAgency'),
	containerIdentifier2: $('#navigator-area-member-list #tableMember'),
	containerIdentifier3: $('#view-area #tableView'),
	containerIdentifier4: $('#popup #edit-add-list #tableEditAdd')
});