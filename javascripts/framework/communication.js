//var jsonData;
var Communicator = {

	getJSONObjSearch: function (obj) {
		var _this = this;
		console.log(obj);
		var	jsonData = $.getJSON(obj.url);

		jsonData.done(function(data) {
			if (typeof data == 'string') data = $.parseJSON(data);
			console.log(data);
		    console.log( "first success" );
		   
		    TempStore.agencyInfoAttr = $.map( data, function( results ) {
		    	console.log(results);
				if (results.agencyInfo) {
					return {
						'agencyInfo': results.agencyInfo
					};
				};	
			});
			TempStore.agencyInfo = $.map( TempStore.agencyInfoAttr, function( results2 ) {
					TempStore.agencyInfoArry = results2.agencyInfo;
			});
			console.log(TempStore.agencyInfoArry);
			console.log(TempStore.agencyInfo);
			TempStore.memberInfoAttr = $.map( data, function( results ) {
				console.log(results);
				console.log(results.memberInfo);
				if (results.memberInfo) {
					return {
						'memberInfo': results.memberInfo
					};
				};	
			});

			console.log(TempStore.memberInfoAttr);
			TempStore.setMemberInfoFunc = function() {
				var deferred = $.Deferred();
				TempStore.memberInfos = $.map( TempStore.memberInfoAttr, function( results3 ) {
		    		console.log(results3.memberInfo);
		    		console.log('in memberInfo')
					TempStore.memberInfoArry = results3.memberInfo;
					deferred.resolve();
				
				});

				return deferred.promise();

			};
			
			TempStore.setMemberInfoFunc().done( function() {
				console.log('Run download script');
				_this.getJSONObjTempDownload();

			});

			console.log(TempStore.agencyInfoArry);
			console.log(TempStore.memberInfoArry);
			
			//console.log(TempStore.memberInfo);
			
			console.log(obj.identifier);
			var obj1 = {},
				obj2 = {};

				console.log(obj.identifier[0]);
				console.log(obj.identifier[1]);

			obj1.identifier = obj.identifier[0] +' td';
			obj2.identifier = obj.identifier[1] +' td';
			console.log(obj1.identifier);
			console.log(obj2.identifier);

			
			
			
			
			Display.displayAgencyInfo(TempStore.agencyInfoArry);
			Display.displayMembersInfo(TempStore.memberInfoArry);
			
			Listners.addListerns(obj1);
			Listners.addListerns(obj2);

			TempStore.setNrOfMemberfieldRows (TempStore.memberInfoArry.length);
			Functionality.updateInformationBox();
		});
	},

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
			console.log('/////////////////');
			console.log(TempStore.topListItems2[0].TopListItems.length);
			console.log(TempStore.travelInfo2.length);

			TempStore.setNrOfMemberfieldRows (TempStore.topListItems2[0].TopListItems.length);
			Functionality.updateInformationBox();
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
		    //Functionality.JSON2CSV(data);

			//console.log(obj.identifier);
		});


	},
	getJSONObjTempDownload:function () {
		
			console.log('Johaneeee');
			console.log(TempStore.memberInfoArry);
		
		 

		    var emailList = $.map( TempStore.memberInfoArry, function( result1 ) {
				
					return {
						Email: result1.email
					};
				
			});
			emailList.push({columnText:'Email'});
		    console.log(emailList);
		    emailList.reverse();
		    var csv = Functionality.JSON2CSV(emailList);
		    TempStore.setCSV(csv);


		    var aTest = window.document.createElement('a');

		    if(typeof aTest.download != "undefined"){
		    	console.log('Update html attr');
		    	//button.addClass('button black');
		    	//button.appendTo(a);
		    	//a.appendTo('#buttonArea');
		    	$('#buttonArea').find('a').attr({
				  href: 'data:text/csv;charset=utf-8,' + escape(csv),
				  download: 'fileNameNEW.csv',
				});
		    	
			 	
		    }

		
		


	},
	getJSONObjAddMember: function(obj) {
		alert('Member added');
	},
	getJSONObjAddAgency: function(obj) {
		alert('Agency added');
	},
	getJSONObjMemberInfo: function (obj) {
		console.log(obj);
		console.log('show memberInfo');

	
		var jsonData = $.getJSON(obj.url)
			.done(function(data) {
				console.log(data);
		    	console.log( "second success" );

		    	var memberInfoTemp  = $.map( data, function( results2 ) {
					TempStore.memberInfo = results2;
				});
		    	console.log(TempStore.memberInfo);

				Display.displayMemberInfo();
				console.log('Display member info');
				TempStore.setMemberInfoDisplayed(true);
	  		}).fail(function() {
	    		console.log( "error" );
	  })
		
/*
		jsonData2.done(function(data) {
			if (typeof data == 'string') data = $.parseJSON(data)
			console.log(data);
		    console.log( "first success" );
		}
	*/	
	}
}