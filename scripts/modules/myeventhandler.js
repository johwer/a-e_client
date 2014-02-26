define(['jquery', 'functionality'], function ($, Functionality) {
console.log('Start in function event.js');         
console.log(Functionality);
console.log($);
console.log('End in function event.js');


return {
	    eventHandlers: function (obj) {
		console.log('JIPOP');
        //alert('IN event');
		console.log(obj);
        var elementId        = obj.elementId,
            elementClass     = obj.elementClass,
            elementVal       = obj.elementVal,
            elementInnerHtml = obj.elementInnerHtml, 
            keyPress         = obj.keyPress,
            dataId           = obj.dataId
            dataSort         = obj.dataSort;
            lastInputCLicked = obj.lastInputCLicked;

       //alert(keyPress);

        console.log(obj.dataId);
        console.log(obj);
       
        console.log(Functionality);

        require(['functionality'], function (Functionality) {
		
        if (elementClass === "company") {
            console.log("agencySearch");
            Functionality.agencySearch(obj);
        }
        if (elementClass === "city" || elementClass === "areaCode" || elementClass === "address") {
            console.log("agencySearch");
            //Do nothing
        }
        else if (dataSort === "companyName" || dataSort === "commission" || dataSort === "city" || dataSort === "areaCode" || dataSort === "address") {
            console.log("Call Obj function for new search");
            Functionality.updateWithSortedlistTableAgency(dataSort);

        }
        else if (dataSort === "login" || dataSort === "firstName" || dataSort === "lastName" || dataSort === "email" || dataSort === "phoneDaytime" || dataSort === "phoneCellular") {
            console.log("Call Obj function for new search");
            Functionality.updateWithSortedlistTableMembers(dataSort);
        }  
        else if (elementClass === "editMember") {
        	//event.preventDefault();
            console.log("displayResults");
            Functionality.editMember();
        }
        else if (elementClass === "editAgency") {
            //event.preventDefault();
            console.log("editAgency");
            Functionality.editAgency();
        }
        else if (elementClass === "searchSubmit" || elementClass === "magnifiSymbol" || keyPress === 13  && lastInputCLicked === 'search') {
            
            	console.log('submit');
            	Functionality.searchSubmitButton();
            
        }
        else if (elementClass === "dropDownChanged") {
            console.log('dropDownChanged');
            Functionality.dropDownChanged();
        }
        else if (elementClass === "downloadCSV") {
            console.log('downloadCSV');
            Functionality.downloadCSVButton();
        }
        else if (elementClass === "customizeButton") {
            console.log('customizeButton');
            Functionality.customView();
        }
        else if (elementClass === "toggleViewContentButton") {
            console.log('toggleViewContent');
            Functionality.toggleViewContent();
        }
       
        else if (elementClass === "addMemberButton") {
            console.log('addMember');
            Functionality.addMember();
        }
        else if (elementClass === "addAgencyButton") {
            console.log('addAgency');
            Functionality.addAgency();
        }

        else if (elementClass === "memberAddSubmitButton") {
            console.log('addPopupAddButton clicked');
            Functionality.submitAddMember();
        }
        else if (elementClass === "memberEditSubmitButton") {
            console.log('addButton');
            Functionality.submiteditMember();
        }
         else if (elementClass === "agencyAddSubmitButton") {
            console.log('submiteditMember');
            Functionality.submitAddAgency();
        }
        else if (elementClass === "agencyEditSubmitButton") {
            console.log('submiteditAgency');
           Functionality.submiteditAgency();
        }
        else if (elementClass === "activetOrDeactiveButton") {
            console.log('edit');
            Functionality.activetOrDeactiveButton();
        }
        else if (elementClass === "activetOrDeactiveButtonSubmit") {
            console.log('submit commission and companychanin');
           Functionality.activetOrDeactiveButtonSubmit();
        }
        else if (elementClass === "commissionAndCompanyChainEditButton") {
            console.log('edit');
            Functionality.commissionAndCompanyChainEditButton();
        }
        else if (elementClass === "commissionChainEditSubmit") {
            console.log('submit commission and companychanin');
           Functionality.commissionAndCompanyChainEditButtonSubmit();
        }
        else if (elementClass === "memberRemoveButton") {
            console.log('remove');
            Functionality.memberRemove();
        }
        else if (elementClass === "closeButton") {
            console.log('closeButton');
            Functionality.closeButton();
        }
        
        /*
        else if(elementClass === "editAdd"){
            console.log ('Edit class fund');
            if (elementId === "phone_home" || elementId === "phone_daytime" || elementId === "phone_cellular" || elementId === "fax") {
                console.log('phone_home');
                Validation.phoneNumber(elementId, elementVal);
            }

        }
        */
        });
        
	}

};
});