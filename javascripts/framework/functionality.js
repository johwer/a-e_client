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
    	Communicator.getJSONObjMemberInfo();
    },
    buttonSubmit: function() {
    	console.log('display fields');
    	this.displayMemberField();
    	console.log('display agency');
    	this.displayAgencyField();
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