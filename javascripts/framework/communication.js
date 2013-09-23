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
	getJSONObjMemberInfo: function () {
		Display.displayMemberInfo();
	}
}