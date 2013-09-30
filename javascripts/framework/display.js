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
			  	//text: 'Hello',
			  	class: 'agencyInfo'
			  });

			 var company = $('<td></td>', {
			 	text: value.Provider,
			 	class: 'company clickable hover'
			 }).appendTo(tr);

			 var country = $('<td></td>', {
			 	text: 'Sweden',
			 	class: 'country clickable hover'
			 }).appendTo(tr);
			 
			 var city = $('<td></td>', {
			 	text: value.DestinationCity,
			 	class: 'city clickable hover'
			 }).appendTo(tr);

			 var areaCode = $('<td></td>', {
			 	text: value.PricePerPerson,
			 	class: 'areaCode clickable hover'
			 }).appendTo(tr);

			 var address = $('<td></td>', {
			 	text: 'Vallhallavägen 211',
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
			  	//text: 'Hello',
			  	class: 'agencyInfo'
			  });

			 var login = $('<td></td>', {
			 	text: value.Provider,
			 	class: 'displayResults clickable hover'
			 });

			 var firstName	 = $('<td></td>', {
			 	text: 'Sweden',
			 	class: 'displayResults clickable hover align-right'
			 });
			 
			 var lastName = $('<td></td>', {
			 	text: value.DestinationCity,
			 	class: 'displayResults clickable hover'
			 });

			 var eMail = $('<td></td>', {
			 	class: 'clickable hover'
			 });

			 var phoneNumber = $('<td></td>', {
			 	class: 'clickable hover'
			 	//dataset: 'THIS DATASET'
			 });

			 
			var aTag1 = $('<a>', {
			 	href: "mailto:"+ 'johan.wergelius@resia.com',
			 	text: 'johan.wergelius@resia.com',
			 	class: 'displayResults mail'
			 	//dataset: 'THIS DATASET'
			 });

			var aTag2 = $('<a>', {
			 	href: "tel:"+value.PricePerPerson,
			 	text: value.PricePerPerson,
			 	class: 'displayResults phoneNumber'
			 	//dataset: 'THIS DATASET'
			 });


			aTag1.appendTo(eMail);
			aTag2.appendTo(phoneNumber);
			
			
			login.appendTo(tr);
			firstName.appendTo(tr);
			lastName.appendTo(tr); 
			eMail.appendTo(tr);
			phoneNumber.appendTo(tr);

			tr.appendTo(self.config.containerIdentifier2);	
		 
		});	

	},
	/*******************************************************************************************************************/
	displayMemberInfo: function() {
		var self = Display;

		var tr1 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th1 = $('<th></th>', {
			  	text: 'member_id',
			  	//class: 'agencyInfo'
			});
		var td1 = $('<td></td>', {
			  	text: TempStore.member_id,
			  	//class: 'agencyInfo'
			});

		var tr2 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th2 = $('<th></th>', {
			  	text: 'password',
			  	//class: 'agencyInfo'
			});
		var td2 = $('<td></td>', {
			  	text: TempStore.password,
			  	//class: 'agencyInfo'
			});

		var tr3 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th3 = $('<th></th>', {
			  	text: 'encrypted_password',
			  	//class: 'agencyInfo'
			});
		var td3 = $('<td></td>', {
			  	text: TempStore.encrypted_password,
			  	//class: 'agencyInfo'
			});

		var tr4 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th4 = $('<th></th>', {
			  	text: 'first_name',
			  	//class: 'agencyInfo'
			});
		var td4 = $('<td></td>', {
			  	text: TempStore.first_name,
			  	//class: 'agencyInfo'
			});

		var tr5 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th5 = $('<th></th>', {
			  	text: 'last_name',
			  	//class: 'agencyInfo'
			});
		var td5 = $('<td></td>', {
			  	text: TempStore.last_name,
			  	//class: 'agencyInfo'
			});
		var tr6 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th6 = $('<th></th>', {
			  	text: 'email',
			  	//class: 'agencyInfo'
			});
		var td6 = $('<td></td>', {
			  	//text: 'Johan',
			  	//class: 'agencyInfo'
			});
		var a6 = $('<a></a>', {
			  	href: "mailto:"+ TempStore.email,
			 	text: TempStore.email,
			});


		var tr7 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th7 = $('<th></th>', {
			  	text: 'company_chain',
			  	//class: 'agencyInfo'
			});
		var td7 = $('<td></td>', {
			  	text: TempStore.company_chain,
			  	//class: 'agencyInfo'
			});

		var tr8 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th8 = $('<th></th>', {
			  	text: 'country',
			  	//class: 'agencyInfo'
			});
		var td8 = $('<td></td>', {
			  	text: TempStore.country,
			  	//class: 'agencyInfo'
			});

		var tr9 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th9 = $('<th></th>', {
			  	text: 'city',
			  	//class: 'agencyInfo'
			});
		var td9 = $('<td></td>', {
			  	text: TempStore.city,
			  	//class: 'agencyInfo'
			});

		var tr10 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th10 = $('<th></th>', {
			  	text: 'area_code',
			  	//class: 'agencyInfo'
			});
		var td10 = $('<td></td>', {
			  	text: TempStore.area_code,
			  	//class: 'agencyInfo'
			});

		var tr11 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th11 = $('<th></th>', {
			  	text: 'company_name',
			  	//class: 'agencyInfo'
			});
		var td11 = $('<td></td>', {
			  	text: TempStore.company_name,
			  	//class: 'agencyInfo'
			});

		var tr12 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th12 = $('<th></th>', {
			  	text: 'address',
			  	//class: 'agencyInfo'
			});
		var td12 = $('<td></td>', {
			  	text: TempStore.address,
			  	//class: 'agencyInfo'
			});

		var tr13 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th13 = $('<th></th>', {
			  	text: 'phone_daytime',
			  	//class: 'agencyInfo'
			});
		var td13 = $('<td></td>', {
			  	text: TempStore.phone_daytime,
			  	//class: 'agencyInfo'
			});

		var tr14 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th14 = $('<th></th>', {
			  	text: 'phone_home',
			  	//class: 'agencyInfo'
			});
		var td14 = $('<td></td>', {
			  	text: TempStore.phone_home,
			  	//class: 'agencyInfo'
			});

		var tr15 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th15 = $('<th></th>', {
			  	text: 'phone_cellular',
			  	//class: 'agencyInfo'
			});
		var td15 = $('<td></td>', {
			  	text: TempStore.phone_cellular,
			  	//class: 'agencyInfo'
			});

		var tr16 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th16 = $('<th></th>', {
			  	text: 'fax',
			  	//class: 'agencyInfo'
			});
		var td16 = $('<td></td>', {
			  	text: TempStore.fax,
			  	//class: 'agencyInfo'
			});

		var tr17 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th17 = $('<th></th>', {
			  	text: 'birthdate',
			  	//class: 'agencyInfo'
			});
		var td17 = $('<td></td>', {
			  	text: TempStore.birthdate,
			  	//class: 'agencyInfo'
			});

		var tr18 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th18 = $('<th></th>', {
			  	text: 'sex',
			  	//class: 'agencyInfo'
			});
		var td18 = $('<td></td>', {
			  	text: TempStore.sex,
			  	//class: 'agencyInfo'
			});

		var tr19 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th19 = $('<th></th>', {
			  	text: 'personal_description',
			  	//class: 'agencyInfo'
			});
		var td19 = $('<td></td>', {
			  	text: TempStore.personal_description,
			  	//class: 'agencyInfo'
			});

		var tr20 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th20 = $('<th></th>', {
			  	text: 'civil_status',
			  	//class: 'agencyInfo'
			});
		var td20 = $('<td></td>', {
			  	text: TempStore.civil_status,
			  	//class: 'agencyInfo'
			});

		var tr21 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th21 = $('<th></th>', {
			  	text: 'occupation',
			  	//class: 'agencyInfo'
			});
		var td21 = $('<td></td>', {
			  	text: TempStore.occupation,
			  	//class: 'agencyInfo'
			});

		var tr22 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th22 = $('<th></th>', {
			  	text: 'traveller_type',
			  	//class: 'agencyInfo'
			});
		var td22 = $('<td></td>', {
			  	text: TempStore.traveller_type,
			  	//class: 'agencyInfo'
			});

		var tr23 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th23 = $('<th></th>', {
			  	text: 'show_acceptance',
			  	//class: 'agencyInfo'
			});
		var td23 = $('<td></td>', {
			  	text: TempStore.show_acceptance,
			  	//class: 'agencyInfo'
			});

		var tr24 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th24 = $('<th></th>', {
			  	text: 'last_visit',
			  	//class: 'agencyInfo'
			});
		var td24 = $('<td></td>', {
			  	text: TempStore.last_visit,
			  	//class: 'agencyInfo'
			});

		var tr25 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th25 = $('<th></th>', {
			  	text: 'belongs_to_site',
			  	//class: 'agencyInfo'
			});
		var td25 = $('<td></td>', {
			  	text: TempStore.belongs_to_site,
			  	//class: 'agencyInfo'
			});

		var tr26 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th26 = $('<th></th>', {
			  	text: 'regdate',
			  	//class: 'agencyInfo'
			});
		var td26 = $('<td></td>', {
			  	text: TempStore.regdate,
			  	//class: 'agencyInfo'
			});

		var tr27 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th27 = $('<th></th>', {
			  	text: 'unregdate',
			  	//class: 'agencyInfo'
			});
		var td27 = $('<td></td>', {
			  	text: TempStore.unregdate,
			  	//class: 'agencyInfo'
			});

		var tr28 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th28 = $('<th></th>', {
			  	text: 'vip',
			  	//class: 'agencyInfo'
			});
		var td28 = $('<td></td>', {
			  	text: TempStore.vip,
			  	//class: 'agencyInfo'
			});

		var tr29 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th29 = $('<th></th>', {
			  	text: 'status',
			  	//class: 'agencyInfo'
			});
		var td29 = $('<td></td>', {
			  	text: TempStore.status,
			  	//class: 'agencyInfo'
			});

		var tr30 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th30 = $('<th></th>', {
			  	text: 'last_visit',
			  	//class: 'agencyInfo'
			});
		var td30 = $('<td></td>', {
			  	text: TempStore.last_visit,
			  	//class: 'agencyInfo'
			});

		var tr31 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th31 = $('<th></th>', {
			  	text: 'want_email',
			  	//class: 'agencyInfo'
			});
		var td31 = $('<td></td>', {
			  	text: TempStore.want_email,
			  	//class: 'agencyInfo'
			});

		var tr32 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th32 = $('<th></th>', {
			  	text: 'session_code',
			  	//class: 'agencyInfo'
			});
		var td32 = $('<td></td>', {
			  	text: TempStore.session_code,
			  	//class: 'agencyInfo'
			});

		var tr33 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th33 = $('<th></th>', {
			  	text: 'updated',
			  	//class: 'agencyInfo'
			});
		var td33 = $('<td></td>', {
			  	text: TempStore.updated,
			  	//class: 'agencyInfo'
			});

		var tr34 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th34 = $('<th></th>', {
			  	text: 'last_news_email',
			  	//class: 'agencyInfo'
			});
		var td34 = $('<td></td>', {
			  	text: TempStore.last_news_email,
			  	//class: 'agencyInfo'
			});

		var tr35 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th35 = $('<th></th>', {
			  	text: 'last_news_email_info',
			  	//class: 'agencyInfo'
			});
		var td35 = $('<td></td>', {
			  	text: TempStore.last_news_email_info,
			  	//class: 'agencyInfo'
			});

		var tr36 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th36 = $('<th></th>', {
			  	text: 'origin',
			  	//class: 'agencyInfo'
			});
		var td36 = $('<td></td>', {
			  	text: TempStore.origin,
			  	//class: 'agencyInfo'
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
		th30.appendTo(tr30);
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
		td30.appendTo(tr30);
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
		tr30.appendTo(self.config.containerIdentifier3);
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
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th1 = $('<th></th>', {
			  	text: 'member_id'
			  	//class: 'agencyInfo'
			});
		var td1 = $('<td></td>', {
			  	//text: TempStore.member_id,
			  	//class: 'agencyInfo'
			});
		var input1 = $('<input>', {
			  	class: 'member_id',
			  	type:'text',
			  	value: TempStore.member_id
			});

		var tr2 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th2 = $('<th></th>', {
			  	text: 'password'
			  	//class: 'agencyInfo'
			});
		var td2 = $('<td></td>', {
			  	//text: TempStore.password,
			  	//class: 'agencyInfo'
			});
		var input2 = $('<input>', {
			  	class: 'password',
			  	type: 'text',
			  	value: TempStore.password
			});


		var tr3 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th3 = $('<th></th>', {
			  	text: 'encrypted_password'
			  	//class: 'agencyInfo'
			});
		var td3 = $('<td></td>', {
			  	//text: TempStore.encrypted_password,
			  	//class: 'agencyInfo'
			});
		var input3 = $('<input>', {
			  	class: 'encrypted_password',
			  	type: 'text',
			  	value: TempStore.encrypted_password
			});

		var tr4 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th4 = $('<th></th>', {
			  	text: 'first_name'
			  	//class: 'agencyInfo'
			});
		var td4 = $('<td></td>', {
			  	//text: TempStore.first_name,
			  	//class: 'agencyInfo'
			});
		var input4 = $('<input>', {
			  	class: 'first_name',
			  	type: 'text',
			  	value: TempStore.first_name
			});

		var tr5 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th5 = $('<th></th>', {
			  	text: 'last_name'
			  	//class: 'agencyInfo'
			});
		var td5 = $('<td></td>', {
			  	//text: TempStore.last_name,
			  	//class: 'agencyInfo'
			});
		var input5 = $('<input>', {
			  	class: 'last_name',
			  	type: 'text',
			  	value: TempStore.last_name
			});

		var tr6 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th6 = $('<th></th>', {
			  	text: 'email'
			  	//class: 'agencyInfo'
			});
		var td6 = $('<td></td>', {
			  	//text: 'Johan',
			  	//class: 'agencyInfo'
			});
		var input6 = $('<input>', {
			  	class: 'email',
			  	type: 'text',
			  	value: TempStore.email
			});
		


		var tr7 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th7 = $('<th></th>', {
			  	text: 'company_chain'
			  	//class: 'agencyInfo'
			});
		var td7 = $('<td></td>', {
			  	//text: TempStore.company_chain,
			  	//class: 'agencyInfo'
			});
		var input7 = $('<input>', {
			  	class: 'email',
			  	type: 'text',
			  	value: TempStore.email
			});

		var tr8 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th8 = $('<th></th>', {
			  	text: 'country'
			  	//class: 'agencyInfo'
			});
		var td8 = $('<td></td>', {
			  	//text: TempStore.country,
			  	//class: 'agencyInfo'
			});
		var input8 = $('<input>', {
			  	class: 'country',
			  	type: 'text',
			  	value: TempStore.country
			});

		var tr9 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th9 = $('<th></th>', {
			  	text: 'city'
			  	//class: 'agencyInfo'
			});
		var td9 = $('<td></td>', {
			  	//text: TempStore.city,
			  	//class: 'agencyInfo'
			});
		var input9 = $('<input>', {
			  	class: 'city',
			  	type: 'text',
			  	value: TempStore.city
			});

		var tr10 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th10 = $('<th></th>', {
			  	text: 'area_code'
			  	//class: 'agencyInfo'
			});
		var td10 = $('<td></td>', {
			  	//text: TempStore.area_code,
			  	//class: 'agencyInfo'
			});
		var input10 = $('<input>', {
			  	class: 'area_code',
			  	type: 'text',
			  	value: TempStore.area_code
			});

		var tr11 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th11 = $('<th></th>', {
			  	text: 'company_name'
			  	//class: 'agencyInfo'
			});
		var td11 = $('<td></td>', {
			  	//text: TempStore.company_name,
			  	//class: 'agencyInfo'
			});
		var input11 = $('<input>', {
			  	class: 'company_name',
			  	type: 'text',
			  	value: TempStore.company_name
			});

		var tr12 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th12 = $('<th></th>', {
			  	text: 'address'
			  	//class: 'agencyInfo'
			});
		var td12 = $('<td></td>', {
			  	//text: TempStore.address,
			  	//class: 'agencyInfo'
			});
		var input12 = $('<input>', {
			  	class: 'address',
			  	type: 'text',
			  	value: TempStore.address
			});

		var tr13 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th13 = $('<th></th>', {
			  	text: 'phone_daytime'
			  	//class: 'agencyInfo'
			});
		var td13 = $('<td></td>', {
			  	//text: TempStore.phone_daytime,
			  	//class: 'agencyInfo'
			});
		var input13 = $('<input>', {
			  	class: 'phone_daytime',
			  	type: 'text',
			  	value: TempStore.phone_daytime
			});

		var tr14 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th14 = $('<th></th>', {
			  	text: 'phone_home'
			  	//class: 'agencyInfo'
			});
		var td14 = $('<td></td>', {
			  	//text: TempStore.phone_home,
			  	//class: 'agencyInfo'
			});
		var input14 = $('<input>', {
			  	class: 'phone_home',
			  	type: 'text',
			  	value: TempStore.phone_home
			});

		var tr15 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th15 = $('<th></th>', {
			  	text: 'phone_cellular'
			  	//class: 'agencyInfo'
			});
		var td15 = $('<td></td>', {
			  	//text: TempStore.phone_cellular,
			  	//class: 'agencyInfo'
			});
		var input15 = $('<input>', {
			  	class: 'phone_cellular',
			  	type: 'text',
			  	value: TempStore.phone_cellular
			});

		var tr16 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th16 = $('<th></th>', {
			  	text: 'fax'
			  	//class: 'agencyInfo'
			});
		var td16 = $('<td></td>', {
			  	//text: TempStore.fax,
			  	//class: 'agencyInfo'
			});
		var input16 = $('<input>', {
			  	class: 'fax',
			  	type: 'text',
			  	value: TempStore.fax
			});

		var tr17 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th17 = $('<th></th>', {
			  	text: 'birthdate'
			  	//class: 'agencyInfo'
			});
		var td17 = $('<td></td>', {
			  	//text: TempStore.birthdate,
			  	//class: 'agencyInfo'
			});
		var input17 = $('<input>', {
			  	class: 'birthdate',
			  	type: 'text',
			  	value: TempStore.birthdate
			});

		var tr18 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th18 = $('<th></th>', {
			  	text: 'sex'
			  	//class: 'agencyInfo'
			});
		var td18 = $('<td></td>', {
			  	//text: TempStore.sex,
			  	//class: 'agencyInfo'
			});
		var input18 = $('<input>', {
			  	class: 'sex',
			  	type: 'text',
			  	value: TempStore.sex
			});

		var tr19 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th19 = $('<th></th>', {
			  	text: 'personal_description'
			  	//class: 'agencyInfo'
			});
		var td19 = $('<td></td>', {
			  	//text: TempStore.personal_description,
			  	//class: 'agencyInfo'
			});
		var input19 = $('<input>', {
			  	class: 'personal_description',
			  	type: 'text',
			  	value: TempStore.personal_description
			});

		var tr20 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th20 = $('<th></th>', {
			  	text: 'civil_status'
			  	//class: 'agencyInfo'
			});
		var td20 = $('<td></td>', {
			  	//text: TempStore.civil_status,
			  	//class: 'agencyInfo'
			});
		var input20 = $('<input>', {
			  	class: 'civil_status',
			  	type: 'text',
			  	value: TempStore.civil_status
			});

		var tr21 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th21 = $('<th></th>', {
			  	text: 'occupation'
			  	//class: 'agencyInfo'
			});
		var td21 = $('<td></td>', {
			  	//text: TempStore.occupation,
			  	//class: 'agencyInfo'
			});
		var input21 = $('<input>', {
			  	class: 'occupation',
			  	type: 'text',
			  	value: TempStore.occupation
			});

		var tr22 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th22 = $('<th></th>', {
			  	text: 'traveller_type'
			  	//class: 'agencyInfo'
			});
		var td22 = $('<td></td>', {
			  	//text: TempStore.traveller_type,
			  	//class: 'agencyInfo'
			});
		var input22 = $('<input>', {
			  	class: 'traveller_type',
			  	type: 'text',
			  	value: TempStore.traveller_type
			});

		var tr23 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th23 = $('<th></th>', {
			  	text: 'show_acceptance'
			  	//class: 'agencyInfo'
			});
		var td23 = $('<td></td>', {
			  	//text: TempStore.show_acceptance,
			  	//class: 'agencyInfo'
			});
		var input23 = $('<input>', {
			  	class: 'show_acceptance',
			  	type: 'text',
			  	value: TempStore.show_acceptance
			});

		var tr24 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th24 = $('<th></th>', {
			  	text: 'last_visit'
			  	//class: 'agencyInfo'
			});
		var td24 = $('<td></td>', {
			  	//text: TempStore.last_visit,
			  	//class: 'agencyInfo'
			});
		var input24 = $('<input>', {
			  	class: 'last_visit',
			  	type: 'text',
			  	value: TempStore.last_visit
			});

		var tr25 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th25 = $('<th></th>', {
			  	text: 'belongs_to_site'
			  	//class: 'agencyInfo'
			});
		var td25 = $('<td></td>', {
			  	//text: TempStore.belongs_to_site,
			  	//class: 'agencyInfo'
			});
		var input25 = $('<input>', {
			  	class: 'belongs_to_site',
			  	type: 'text',
			  	value: TempStore.belongs_to_site
			});

		var tr26 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th26 = $('<th></th>', {
			  	text: 'regdate'
			  	//class: 'agencyInfo'
			});
		var td26 = $('<td></td>', {
			  	//text: TempStore.regdate,
			  	//class: 'agencyInfo'
			});
		var input26 = $('<input>', {
			  	class: 'regdate',
			  	type: 'text',
			  	value: TempStore.regdate
			});

		var tr27 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th27 = $('<th></th>', {
			  	text: 'unregdate'
			  	//class: 'agencyInfo'
			});
		var td27 = $('<td></td>', {
			  	//text: TempStore.unregdate,
			  	//class: 'agencyInfo'
			});
		var input27 = $('<input>', {
			  	class: 'unregdate',
			  	type: 'text',
			  	value: TempStore.unregdate
			});

		var tr28 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th28 = $('<th></th>', {
			  	text: 'vip'
			  	//class: 'agencyInfo'
			});
		var td28 = $('<td></td>', {
			  	//text: TempStore.vip,
			  	//class: 'agencyInfo'
			});
		var input28 = $('<input>', {
			  	class: 'vip',
			  	type: 'text',
			  	value: TempStore.vip
			});

		var tr29 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th29 = $('<th></th>', {
			  	text: 'status'
			  	//class: 'agencyInfo'
			});
		var td29 = $('<td></td>', {
			  	//text: TempStore.status,
			  	//class: 'agencyInfo'
			});
		var input29 = $('<input>', {
			  	class: 'status',
			  	type: 'text',
			  	value: TempStore.status
			});

		var tr30 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th30 = $('<th></th>', {
			  	text: 'last_visit'
			  	//class: 'agencyInfo'
			});
		var td30 = $('<td></td>', {
			  	//text: TempStore.last_visit,
			  	//class: 'agencyInfo'
			});
		var input30 = $('<input>', {
			  	class: 'last_visit',
			  	type: 'text',
			  	value: TempStore.last_visit
			});

		var tr31 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th31 = $('<th></th>', {
			  	text: 'want_email'
			  	//class: 'agencyInfo'
			});
		var td31 = $('<td></td>', {
			  	//text: TempStore.want_email,
			  	//class: 'agencyInfo'
			});
		var input31 = $('<input>', {
			  	class: 'want_email',
			  	type: 'text',
			  	value: TempStore.want_email
			});

		var tr32 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th32 = $('<th></th>', {
			  	text: 'session_code'
			  	//class: 'agencyInfo'
			});
		var td32 = $('<td></td>', {
			  	//text: TempStore.session_code,
			  	//class: 'agencyInfo'
			});
		var input32 = $('<input>', {
			  	class: 'session_code',
			  	type: 'text',
			  	value: TempStore.session_code
			});

		var tr33 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th33 = $('<th></th>', {
			  	text: 'updated'
			  	//class: 'agencyInfo'
			});
		var td33 = $('<td></td>', {
			  	//text: TempStore.updated,
			  	//class: 'agencyInfo'
			});
		var input33 = $('<input>', {
			  	class: 'updated',
			  	type: 'text',
			  	value: TempStore.updated
			});

		var tr34 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th34 = $('<th></th>', {
			  	text: 'last_news_email'
			  	//class: 'agencyInfo'
			});
		var td34 = $('<td></td>', {
			  	//text: TempStore.last_news_email,
			  	//class: 'agencyInfo'
			});
		var input34 = $('<input>', {
			  	class: 'last_news_email',
			  	type: 'text',
			  	value: TempStore.last_news_email
			});

		var tr35 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th35 = $('<th></th>', {
			  	text: 'last_news_email_info'
			  	//class: 'agencyInfo'
			});
		var td35 = $('<td></td>', {
			  	//text: TempStore.last_news_email_info,
			  	//class: 'agencyInfo'
			});
		var input35 = $('<input>', {
			  	class: 'last_news_email_info',
			  	type: 'text',
			  	value: TempStore.last_news_email_info
			});

		var tr36 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th36 = $('<th></th>', {
			  	text: 'origin'
			  	//class: 'agencyInfo'
			});
		var td36 = $('<td></td>', {
			  	//text: TempStore.origin,
			  	//class: 'agencyInfo'
			});
		var input36 = $('<input>', {
			  	class: 'origin',
			  	type: 'text',
			  	value: TempStore.origin
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
		var button = $('<h1>', {
			  	text: obj.text,
			});
		console.log('obj.text addH1');
		button.prependTo(obj.identifier);
	},
	addButton: function(obj) {
		var button = $('<button>', {
			  	text: obj.text,
			  	class: obj.class
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