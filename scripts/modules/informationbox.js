define(['jquery', 'tempstore'], function ($, TempStore) {
return {
	updateInformationBox: function () {
    	console.log('In function informationbox.js');
        var search_area = $('#search-area');
    	search_area.find('.nrOfTotalMembers').html(TempStore.membersTotalNr);
        search_area.find('.nrOfTotalAgencies').html(TempStore.agenciesTotalNr);
    }
  };
});