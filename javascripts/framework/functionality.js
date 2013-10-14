var Functionality = Functionality || {
	init: function () {
		//Communicator.getJSONObjTemp();
		this.updateInformationBox();
		/*
		// Download members email
		_this.createDowloadCSVButton();
	    	TempStore.setDownloadCSVButton(false);
	    	//Communicator.getJSONObjTempDownload();

			if(TempStore.getDownloadCSVButton()){
	    		_this.createDowloadCSVButton();
	    		Communicator.getJSONObjTempDownload();
	    		console.log('Runn this');
	    		TempStore.setDownloadCSVButton(false);
	    	}

        */
    },
    getSearchJSONAndDisplay: function () {
    	var _this = this;
    	Listners.removeListners('#navigator-area-agency-list #tableAgency td');
    	Listners.removeListners('#navigator-area-member-list #tableMember td');

    	Display.removeInfo('#navigator-area-agency-list #tableAgency td');
    	Display.removeInfo('#navigator-area-member-list #tableMember td');
    	Communicator.getJSONObjSearch({
			//url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			url:'/javascripts/results.json',
			search:'Stockholm',
			identifier:['#navigator-area-agency-list','#navigator-area-member-list']
		});
		if(TempStore.getDownloadCSVButton()){
	    		_this.createDowloadCSVButton();
	    		console.log('Runn this');
	    		TempStore.setDownloadCSVButton(false);
	    		//Communicator.getJSONObjTempDownload;

	    }
	    else{
	    	//Communicator.getJSONObjTempDownload;
	    }

    },
    displayAgencyField: function() {
		Communicator.getJSONObjAgency({
			//url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			url:'/javascripts/results.json',
			search:'Stockholm',
			identifier:'#navigator-area-agency-list'
		});
    },
    displayMemberField: function() {
    	Communicator.getJSONObjMember({
			//url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			url:'/javascripts/results.json',
			search:'Göteborg',
			identifier:'#navigator-area-member-list'
		});
    },
    displayMemberInfo: function() {
    	console.log('getJSONObjMemberINfo');
    	Listners.removeListners('#view-area #tableView tr');
    	Display.removeInfo('#view-area #tableView tr');
    	console.log('should remove view-area first');
    	Communicator.getJSONObjMemberInfo({
			//url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			url:'/javascripts/member.json',
			search:'Göteborg',
			identifier:'#view-area #tableView'
		});

    },
    searchSubmitButton: function() {
    	var _this = this;
    	if(TempStore.getTypedVal()) {
    		console.log('TempStore.getTypedVal()');
    		console.log(TempStore.getTypedVal());
	    	console.log('display fields');
	    	//this.displayMemberField();
	    	console.log('display agency');
	    	//this.displayAgencyField();
	    	this.getSearchJSONAndDisplay();
    	}
    	else {
    		alert('Please type in the searchfield first');
    	}
    },
    submitAddMemberButton:function (){
    	Communicator.getJSONObjAddMember();
    },
    submitAddAgencyButton:function (){
    	Communicator.getJSONObjAddAgency();
    },
    editButton: function() {
    	if(TempStore.getMemberInfoDisplayed()){
	    	Display.toggleView('#popup');
	    	Display.addH1({
	    		text:'Edit View',
	    		identifier: '#popup #edit-add-list'
	    	});
	    	Display.displayEditAdd();
	    	Listners.editAdd();
	    	
	    	Display.addButton({
	    		text: 'Submit edit',
	    		identifier: '#popup #edit-add-list',
	    		class: 'addPopupEditButton button orange margin10'
	    	});
	    	Listners.addListerns({
            	identifier:'#popup .addPopupEditButton',
	    	});
    	}
    	else {
    		alert('You have to select a member to edit first');
    	}
    },
    addButton: function() {
    	
	    	Display.toggleView('#popup');
	    	Display.addH1({
	    		text:'Add View',
	    		identifier: '#popup #edit-add-list'
	    	});
	    	TempStore.resetMemberInfo();
	    	console.log(TempStore.memberInfo);
	    	Display.displayEditAdd();
	    	Listners.editAdd();
	    	
	    	Display.addButton({
	    		text: 'Submit add',
	    		identifier: '#popup #edit-add-list',
	    		class: 'addPopupAddButton button orange margin10'
	    	});
	    	Listners.addListerns({
            	identifier:'#popup .addPopupAddButton',
	    	});
    	
    },
    removeButton: function() {
    	if(TempStore.getMemberInfoDisplayed()){
	    	var x=window.confirm("Are you sure you want to remove user?")
			if (x){
				console.log('send remove');
			}
			else {
				console.log("do nothing");
			}
		}
		else {
    		alert('You have to select a member to edit first');
    	}
    },
    closeButton: function() {
    	Listners.removeListners('#popup');
    	Display.toggleView('#popup');
    	Display.removeInfo('#popup H1');
    	Display.removeInfo('#popup #edit-add-list #tableEditAdd tr');
    	Display.removeInfo('#popup button');


    },
    agencySearch: function() {
    	console.log('remove Listners');
    	Listners.removeListners('#navigator-area-agency-list #tableAgency td');
    	Listners.removeListners('#navigator-area-member-list #tableMember td');

    	console.log('remove elements');
    	Display.removeInfo('#navigator-area-agency-list #tableAgency td');
    	Display.removeInfo('#navigator-area-member-list #tableMember td');
    	console.log('Remove');
    	Communicator.getJSONObjSearch({
			//url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			url:'/javascripts/results.json',
			search:'Stockholm',
			identifier:['#navigator-area-agency-list','#navigator-area-member-list']
		});
    	/*
    	Communicator.getJSONObjAgency({
			url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			search:'Halmstad',
			identifier:'#navigator-area-agency-list'
		});
		Communicator.getJSONObjMember({
			url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			search:'Malmö',
			identifier:'#navigator-area-member-list'
		});*/
    },
    updateInformationBox: function() {
    	console.log('Try to update');
    	console.log(TempStore.getNrOfMemberfieldRows());
    	$('#search-area .nrOfMemberfieldRows').html(TempStore.getNrOfMemberfieldRows());
    	
    },
    createDowloadCSVButton: function () {
    	console.log('creating button');
    	var aTest = window.document.createElement('a');
    	var a = $('<a>', {
			 	href: 'data:text/csv;charset=utf-8,' , //+ escape(csv),
			 	download: 'fileName.csv'
			 	
			 });
		    
		    
		    
		    var button = $('<button>', {
			  	//text: 'Hello',
			  	//class: 'downloadCSV button black',
			  	text: 'Download mail list'
			  });


		    
		   
		    if(typeof aTest.download != "undefined"){
		    	console.log('Av download html attr');
		    	button.addClass('button black');
		    	button.appendTo(a);
		    	a.appendTo('#buttonArea');
		    }
		    else {
		    	console.log('Does not have download html attr');
		    	button.addClass('downloadCSV button black');
		    	button.appendTo('#buttonArea');
		    	Listners.addListerns({
		            identifier:'#search-area .downloadCSV',
		        });

		    }
    },
    downloadCSVButton: function() {
    	alert('Do not forget to rename the file. Because it can not be named dowload in Apsis');
    	window.open("data:text/csv;charset=utf-8," + escape(TempStore.getCSV()));
    },
    JSON2CSV: function (objArray) {
	    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

	    var str = '';
	    var line = '';

	    // Wrap values in double quotes
	    var in_double_quotes = false;
	    // Include labels in first row
	    var inc_ladels = false;

	    if (in_double_quotes) {
	        var head = array[0];
	        if (inc_ladels) {
	            for (var index in array[0]) {
	                var value = index + "";
	                line += '"' + value.replace(/"/g, '""') + '",';
	            }
	        } else {
	            for (var index in array[0]) {
	                line += index + ',';
	            }
	        }

	        line = line.slice(0, -1);
	        str += line + '\r\n';
	    }

	    for (var i = 0; i < array.length; i++) {
	        var line = '';

	        if (inc_ladels) {
	            for (var index in array[i]) {
	                var value = array[i][index] + "";
	                line += '"' + value.replace(/"/g, '""') + '",';
	            }
	        } else {
	            for (var index in array[i]) {
	                line += array[i][index] + ',';
	            }
	        }

	        line = line.slice(0, -1);
	        str += line + '\r\n';
	    }
	    return str;
	    
	}

}