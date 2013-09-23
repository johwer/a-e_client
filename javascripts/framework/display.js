/*Display*/
var Display = Display || {
	init: function( config ) {
		this.config = config;
	},
	removeInfo: function (identifier) {
		$(identifier).remove();
		console.log('try to remove identifier');
		console.log(identifier);
	},
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
	displayMemberInfo: function(obj) {
		var self = Display;

		var tr1 = $('<tr></tr>', {
			  	//text: 'Hello',
			  	//class: 'agencyInfo'
			});
		var th1 = $('<th></th>', {
			  	text: 'Integer member_id',
			  	//class: 'agencyInfo'
			});
		var td1 = $('<td></td>', {
			  	text: '454095045',
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
			  	text: 'Qfm444X£cw908*',
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
			  	text: 'Qfm444X£cw908*',
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
			  	text: 'Johan',
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
			  	text: 'Wergelius',
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
			  	href: "mailto:"+ 'johan.wergelius@resia.com',
			 	text: 'johan.wergelius@resia.com',
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
			  	text: 'Resia Travel Group',
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
			  	text: 'Sweden',
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
			  	text: 'Stockholm',
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
			  	text: '19844',
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
			  	text: 'Resia',
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
			  	text: 'Vallhallavägen 211',
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
			  	text: '08 984 45',
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
			  	text: '097870880',
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
			  	text: '070 870 88 30',
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
			  	text: '097870881',
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
			  	text: '700424',
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
			  	text: 'Male',
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
			  	text: 'Lorum ipsum il iherus',
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
			  	text: 'null',
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
			  	text: 'Sales Manager',
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
			  	text: 'null',
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
			  	text: 'null',
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
			  	text: '1914-07-23',
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
			  	text: 'boxoffice.se',
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
			  	text: '1910-07-29',
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
			  	text: '2001-03-21',
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
			  	text: 'null',
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
			  	text: 'null',
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
			  	text: new Date(),
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
			  	text: 'YES',
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
			  	text: 'null',
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
			  	text: 'NO',
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
			  	text: '2012-12-23',
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
			  	text: 'Halva priset på fotboll',
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
			  	text: 'England',
			  	//class: 'agencyInfo'
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

					
		a6.appendTo(td6);		
		console.log('displaying member info');
		
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

	}

}

Display.init({
	containerIdentifier1: $('#navigator-area-agency-list #tableAgency'),
	containerIdentifier2: $('#navigator-area-member-list #tableMember'),
	containerIdentifier3: $('#view-area #tableView')
});