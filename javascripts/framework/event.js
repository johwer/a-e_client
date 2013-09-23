var MyEvent = MyEvent || {

	eventHandlers: function (event) {
		console.log('JIPOP');
		console.log(event);
		var elementInnerText    = event.originalEvent.target.innerHTML,
                elementClass    = event.originalEvent.target.classList[0];

        //Store for global value last clicked text
        TempStore.setClickedVal(elementInnerText);

		if (elementClass === "company" || elementClass === "country" || elementClass === "city" || elementClass === "areaCode" || elementClass === "address") {
            event.preventDefault();
            console.log("Call Obj function for new search");
            Functionality.agencySearch();

        } 
        else if (elementClass === "displayResults") {
        	//event.preventDefault();
            console.log("displayResults");
            Functionality.displayMemberInfo();
        }
        else if (elementClass === "submit") {
        	console.log('submit');
        	Functionality.buttonSubmit();
        }

	}

}