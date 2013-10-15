var MyEvent = MyEvent || {

	eventHandlers: function (elementId, elementClass, elementVal, elementInnerHtml) {
		console.log('JIPOP');
		

        /*
		var elementInnerText    = event.originalEvent.target.innerHTML,
                elementClass    = event.originalEvent.target.classList[0],
                elementId       = event.originalEvent.target.id,
                elmenteValue    = event.originalEvent.target.value;


                console.log('event.originalEvent.target.classList');
                console.log(event.originalEvent.target.classList);
                if(event.originalEvent.target.classList == 'search') {
                    console.log('blow me');
                }
        //Store for global value last clicked text
        */
        TempStore.setClickedVal(elementInnerHtml);

		if (elementClass === "company" || elementClass === "country" || elementClass === "city" || elementClass === "areaCode" || elementClass === "address") {
            console.log("Call Obj function for new search");
            Functionality.agencySearch();

        } 
        else if (elementClass === "displayResults") {
        	//event.preventDefault();
            console.log("displayResults");
            Functionality.displayMemberInfo();
        }
        else if (elementClass === "searchSubmit" || elementClass === "magnifiSymbol") {
        	console.log('submit');
        	Functionality.searchSubmitButton();
        }
        else if (elementClass === "editButton") {
        	console.log('edit');
        	Functionality.editButton();
        }
        else if (elementClass === "removeButton") {
        	console.log('remove');
        	Functionality.removeButton();
        }
        else if (elementClass === "closeButton") {
        	console.log('closeButton');
        	Functionality.closeButton();
        }
        else if (elementClass === "addMemberButton") {
        	console.log('addButton');
        	Functionality.addButton();
        }
        else if (elementClass === "addPopupAddButton") {
        	console.log('addPopupAddButton clicked');
        	Functionality.submitAddMemberButton();
        }
        else if (elementClass === "addPopupEditButton") {
        	console.log('addButton');
        	Functionality.submitAddAgencyButton();
        }
        else if (elementClass === "downloadCSV") {
            console.log('downloadCSV');
            Functionality.downloadCSVButton();
        }
        else if(elementClass === "editAdd"){
            console.log ('Edit class fund');
            if (elementId === "phone_home" || elementId === "phone_daytime" || elementId === "phone_cellular" || elementId === "fax") {
                console.log('phone_home');
                Validation.phoneNumber(elementId, elementVal);
            }

        }
        
	}

}