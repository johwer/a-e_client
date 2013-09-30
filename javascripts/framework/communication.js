//var jsonData;
var Communicator = {

	getJSONObjAgency: function (obj) {
		console.log(obj);
		var	jsonData = $.getJSON(obj.url);

		jsonData.done(function(data) {
			if (typeof data == 'string') data = $.parseJSON(data);
		    console.log( "first success" );
		   
		    TempStore.topListItems = $.map( data, function( result1 ) {
				if (result1.Departure === obj.search) {
					return {
						TopListItems: result1.TopListItems
					};
				}
			});
			TempStore.travelInfo = $.map( TempStore.topListItems, function( result2 ) {
				TempStore.saveTopListItems = result2.TopListItems;
			});
			
			//Listners.removeListners(obj.identifier);
			//Display.removeInfo(obj.identifier);
			
			//console.log(obj.dataObjects);
			Display.displayAgencyInfo(TempStore.saveTopListItems);
			
			//var identified = obj.identifier +' td';
			Listners.addListerns(obj);
		});
	},
	getJSONObjMember: function (obj) {
		console.log(obj);
		var	jsonData = $.getJSON(obj.url);

		jsonData.done(function(data) {
			if (typeof data == 'string') data = $.parseJSON(data);
		    console.log( "second success" );
		    
		    TempStore.topListItems2 = $.map( data, function( result1 ) {
				if (result1.Departure === obj.search) {
					return {
						TopListItems: result1.TopListItems
					};
				}
			});
			TempStore.travelInfo2 = $.map( TempStore.topListItems2, function( result2 ) {
				TempStore.saveTopListItems2 = result2.TopListItems;
			});

			//Listners.removeListners(obj.identifier);
			//Display.removeInfo(obj.identifier);
			//console.log(TempStore.saveTopListItems2);
			Display.displayMembersInfo(TempStore.saveTopListItems2);
			
			var identified = obj.identifier +' td';
			Listners.addListerns(obj);

			//console.log(obj.identifier);
		});
	},
	getJSONObjTemp:function (obj) {

		var	jsonData = $.getJSON('http://root.resfeber.se/holidayevents/crm/bo/search/anyagency?page=0&size=10');

		jsonData.done(function(data) {
			if (typeof data == 'string') data = $.parseJSON(data);
		    console.log( "Real success" );
		    console.log(data);

			//console.log(obj.identifier);
		});


	},
	getJSONObjAddMember: function(obj) {
		alert('Member added');
	},
	getJSONObjAddAgency: function(obj) {
		alert('Agency added');
	},
	getJSONObjMemberInfo: function (obj) {
		/* Temp values*/

		obj.member_id = '35454444';
        obj.password = 'jodjfdjfjo93434';
        obj.encrypted_password = 'jodjfdjfjo93434';
        obj.first_name = 'Johan';
        obj.last_name = 'Wergelius';
        obj.email = 'johan.Wergelius@resia.com';
        obj.company_chain = 'Resia';
        obj.country = 'Sweden';
        obj.city = 'Stockholm';
        obj.area_code = '19342';
        obj.company_name = 'Resfeber';
        obj.address = 'Vallhallavägen 211';
        obj.phone_daytime = '0727075737';
        obj.phone_home = 'null';
        obj.phone_cellular = 'null';
        obj.fax = 'null';
        obj.birthdate = '79080628';
        obj.sex = 'Male';
        obj.personal_description = 'Bla bla bla bla bla';
        obj.civil_status = 'null';
        obj.occupation = 'Sale Manager';
        obj.traveller_type = 'VIP';
        obj.show_acceptance = 'null';
        obj.last_visit = new Date();
        obj.belongs_to_site = 'BO';
        obj.regdate = 'null';
        obj.unregdate = 'null';
        obj.vip = 'YES';
        obj.status = 'null';
        obj.want_email = 'YES';
        obj.session_code = 'ojvdo';
        obj.updated = '2013-03-23';
        obj.last_news_email = '2012-12-30';
        obj.last_news_email_info = 'London';
        obj.origin = 'England';


		TempStore.setMemberInfo(obj);
		Display.displayMemberInfo(obj);
		console.log('Display member info');
		TempStore.setMemberInfoDisplayed(true);
	}
}