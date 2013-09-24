var Functionality = Functionality || {
	init: function () {
        
    },
    displayAgencyField: function() {
		Communicator.getJSONObjAgency({
			url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			search:'Stockholm',
			identifier:'#navigator-area-agency-list'
		});
    },
    displayMemberField: function() {
    	Communicator.getJSONObjMember({
			url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
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
			url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			search:'Göteborg',
			identifier:'#view-area #tableView'
		});
    },
    buttonSubmit: function() {
    	if(TempStore.getTypedVal()) {
	    	console.log('display fields');
	    	this.displayMemberField();
	    	console.log('display agency');
	    	this.displayAgencyField();
    	}
    	else {
    		alert('Please type in the searchfield first');
    	}
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
	    		text: 'edit',
	    		identifier: '#popup #edit-add-list',
	    		class: 'addPopupEdidButton button orange margin10'
	    	});
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
    agencySearch: function() {
    	Listners.removeListners('#navigator-area-agency-list #tableAgency td');
    	Listners.removeListners('#navigator-area-member-list #tableMember td');

    	Display.removeInfo('#navigator-area-agency-list #tableAgency td');
    	Display.removeInfo('#navigator-area-member-list #tableMember td');

    	Communicator.getJSONObjAgency({
			url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			search:'Halmstad',
			identifier:'#navigator-area-agency-list'
		});
		Communicator.getJSONObjMember({
			url:'http://static.resfeber.se/static/imported/mr_orange_offers.js',
			search:'Malmö',
			identifier:'#navigator-area-member-list'
		});
    }

}