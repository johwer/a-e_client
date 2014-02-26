requirejs([ 'jquery', 'tempstore', 'myeventhandler', 'display', 'listners', 'jqueryui', 'informationbox', 'functionality'], function ($, TempStore,  MyEvent, Display, Listners, jUi, InformationBox, Functionality) {
	console.log("Funka");
	console.log(TempStore);
	console.log($);
	console.log(Display);
	console.log(MyEvent);
	console.log(Listners);
	console.log(jUi);
	

	TempStore.init();


	
	Listners.init();
	Listners.createListnerSelectOrCheckedChange({
            identifier:'#search-area select',
            val: true,
            setFunctionality: 'setDropDownVal'
        });
        Listners.keyUpListner({
            identifier:'#search-area .search',
            setFunctionality: 'setTypedVal'
        });
        Listners.addListerns({
            identifier:'#search-area .search'
        });
        Listners.addListerns({
            identifier:'#search-area .searchSubmit'
        });
        Listners.addListerns({
            identifier:'#function-area .customizeButton'
        });
        Listners.addListerns({
            identifier:'#function-area .toggleViewContentButton'
        });
        Listners.addListerns({
            identifier:'#function-area .commissionAndCompanyChainEditButton'
        });
        Listners.addListerns({
            identifier:'#function-area .activetOrDeactiveButton'
        });
        Listners.addListerns({
            identifier:'#function-area .addMemberButton'
        });
        Listners.addListerns({
            identifier:'#function-area .addAgencyButton'
        });
        Listners.addListerns({
            identifier:'#popup .closeButton'
        });
        Listners.addListerns({
            identifier:'#navigator-area-member-list #tableMember th'
        });
        Listners.addListerns({
            identifier:'#navigator-area-agency-list #tableAgency th'
        });


	
	
	console.log('Next run display');
	Display.init({
		containerIdentifier0: $('#navigator-area-agency-list #tableCommissionRate'),
		containerIdentifier1: $('#navigator-area-agency-list #tableAgency'),
		containerIdentifier2: $('#navigator-area-member-list #tableMember'),
		//containerIdentifier3: $('#view-area #tableView'),
		containerIdentifier4: $('#popup #edit-add-list #tableEditAdd')
	});

	InformationBox.updateInformationBox();
    Functionality.init('http://joker1.test.resfeber.se/');
	Functionality.updateNrOfAgencyCount();
	Functionality.updateNrOfMembersCount();



    //Render DOM
	$('body').css('display', 'block');

    //Must be after the DOM has render
    Functionality.getScrollbarWidth();
    //jQuery window resize call/event
    $(window).resize(function() {
        //alert('resizing process');
        Functionality.resizeScreen();
    });
	
	
	

	
	
});