define(['jquery', 'tempstore', 'display', 'listners', 'communicator', 'informationbox', 'jsoncsv'], function ($, TempStore, Display , Listners, Communicator, Informationbox, JSONCSV) {
/*console.log('Start functionality.js');
console.log($);
console.log(TempStore);
console.log(Display);
console.log(Listners);
console.log(Communicator);
console.log(Informationbox);
console.log('End functionality.js');*/


return {
	init: function (string) {

		this.locationOrigin = string;  

		//Communicator.getJSONObjTemp();
		//this.updateInformationBox();
		/*
		// Download members email
		self.createDowloadCSVButton();
	    	TempStore.setDownloadCSVButton(false);
	    	//Communicator.getJSONObjTempDownload();

			if(TempStore.getDownloadCSVButton()){
	    		self.createDowloadCSVButton();
	    		Communicator.getJSONObjTempDownload();
	    		console.log('Runn this');
	    		TempStore.setDownloadCSVButton(false);
	    	}

        */
    },
    commonSearchFunction: function (data, obj) {
    	var self = this;
    	var nummberof = 1;



    	if (typeof data === 'string') {
            data = $.parseJSON(data);
        }
        //console.log(data);
        //console.log(obj);

    	if (obj.getType === 'textSearch') {
    		console.log(nummberof++);
    		TempStore.agencyInfoArry = data.agency;
            TempStore.memberInfoArry = data.memberInfo;

            var obj1 = {},
                obj2 = {};

            obj1.identifier = obj.identifier[0] + ' td.company';
            obj2.identifier = obj.identifier[1] + ' td';
			
			Display.displayCommssionAgencyInfo(TempStore.agencyInfoArry);
            Display.displayAgencyInfo(TempStore.agencyInfoArry);
            Display.displayMembersInfo(TempStore.memberInfoArry);

            console.log('Runn displayCommssionAgencyInfo');
            
            // Displaying of commission 
            Listners.addListerns(obj1);
            Listners.addListerns(obj2);
   
            this.getJSONObjTempDownloadData();


            TempStore.setNrOfAgencyfieldRows(TempStore.agencyInfoArry.length);
	    	TempStore.setNrOfMemberfieldRows(TempStore.memberInfoArry.length);
	    	

            //Reapply listner to submit button, return key, searchfield entery and dropdown list change
            self.checkAndCreateCVSButton();
            $('progress').hide();
            $('.searchContainer').show();
            self.resizeScreen();

    	} else if (obj.getType === 'memberInfo') {
    				//Save data to TempStore attribute
    				TempStore.memberInfo = data;

			  //   	console.log(TempStore.memberInfo);

					// Display.displayMemberInfo();
					// console.log('Display member info');
					// TempStore.setMemberInfoDisplayed(true);

					Display.toggleView('#popup');
			    	Display.addH1({
			    		text:'Edit Member View',
			    		identifier: '#popup #edit-add-list'
			    	});
			    	Display.displayEditAdd();
			    	Listners.editAdd();


			    	Display.addButton({
			    		text: 'Remove',
			    		identifier: '#popup #edit-add-list',
			    		elementClass: 'memberRemoveButton button red margin10'
			    	});
			    	Listners.addListerns({
		            	identifier:'#popup .memberRemoveButton',
			    	});
			    	
			    	Display.addButton({
			    		text: 'Submit edit',
			    		identifier: '#popup #edit-add-list',
			    		elementClass: 'memberEditSubmitButton button orange margin10'
			    	});
			    	Listners.addListerns({
		            	identifier:'#popup .memberEditSubmitButton',
			    	});



    	} else if (obj.getType === 'agency') {
    				TempStore.memberInfoArry = data;
                    var obj2 = {};
                    obj2.identifier = obj.identifier[1] + ' td';
                    Display.displayMembersInfo(TempStore.memberInfoArry);
                    Listners.addListerns(obj2);

                    TempStore.setNrOfMemberfieldRows(TempStore.memberInfoArry.length);
                    require(['informationbox'], function (InformationBox) {
	                   self.updateNrOfMembersCount();
	        		});
                    self.checkAndCreateCVSButton();
                    this.getJSONObjTempDownloadData();

    	 
        } else if (obj.getType === 'agencyInfo') {
    				//alert('all');
    				console.log('Get info of a specific company');
    				//console.log(data);
    				var arr = data;
    				//console.log(arr);

    				TempStore.agencyInfoArry = arr;
    				Display.displayCommssionAgencyInfo(data);
    				Display.displayAgencyInfo(data);

    				var obj1 = {};

            		obj1.identifier = obj.identifier[0] + ' td';
			        Listners.addListerns(obj1);
           			//alert(TempStore.agencyInfoArry.length);
			        TempStore.setNrOfAgencyfieldRows(TempStore.agencyInfoArry.length);
	    			//TempStore.setNrOfMemberfieldRows(TempStore.agencyInfoArry.length);

    				$('progress').hide();
            		$('.searchContainer').show();
            		self.resizeScreen();
    	
    	} else if (obj.getType === 'all') {
    				//alert('all');
    				console.log('Get all data per brand');
    				//console.log(data);
    				TempStore.agencyInfoArry = data;
    				Display.displayCommssionAgencyInfo(data);
    				Display.displayAgencyInfo(data);

    				var obj1 = {};

            		obj1.identifier = obj.identifier[0] + ' td';
			        Listners.addListerns(obj1);
           			//alert(TempStore.agencyInfoArry.length);
			        TempStore.setNrOfAgencyfieldRows(TempStore.agencyInfoArry.length);
	    			TempStore.setNrOfMemberfieldRows(0);

    				$('progress').hide();
            		$('.searchContainer').show();
            		self.resizeScreen();

    	}
    	else if (obj.getType === 'agencyCount') {
			console.log('Total nr of age per brand');
			//console.log(data);

			$.each( data, function( key, value ) {
		  //console.log( key + ": " + value );
			 //F console.log(value.id);
			  console.log(value.store);
			  if (value.store === 'bo') {
			  	console.log('Store bo total m & a');
			  	TempStore.agenciesBoTotalNr = value.agencies;
			  	TempStore.membersBoTotalNr = value.members;
			  } else if (value.store === 'ts') {
			  	console.log('Store ts total m & a');
			  	TempStore.agenciesTsTotalNr = value.agencies;
			  	TempStore.membersTsTotalNr = value.members;
			  } else {
			  	console.log('Store ud total m & a');
			  	TempStore.agenciesUdTotalNr = value.agencies;
			  	TempStore.membersUdTotalNr = value.members;
			  };
			  //return (value.id === TempStore.getAgengcySelectedId());
			});

			TempStore.agenciesTotalNr = TempStore.agenciesBoTotalNr + TempStore.agenciesTsTotalNr + TempStore.agenciesUdTotalNr;
			TempStore.membersTotalNr = TempStore.membersBoTotalNr + TempStore.membersTsTotalNr + TempStore.membersUdTotalNr;
			console.log(TempStore.agenciesTotalNr);
			
			
			//console.log(dropdown);
			
			
			//Remember to remove dubbles
		 	function setNrOfAgenciesPerBrand(site) {
		 		var dropdown = $('#search-area .searchContainer select');
		 		console.log('set nr');
		 		dropdown.find("option[value='" + site+ "']").html(function(index, value) {
		 			var capitalizeSite = capitalize(site);
		 			var tempstring = 'agencies'+capitalizeSite+'TotalNr',
		 				tempstring2 = 'members'+capitalizeSite+'TotalNr',
		 				siteName = 'siteName'+capitalizeSite;
		 			console.log('TempStore.tempstring');
		 			console.log(TempStore[tempstring]);
		 			
		 			return  TempStore[siteName] + ' A'+ '['+TempStore[tempstring]+']'+ ' E'+ '['+TempStore[tempstring2]+']';
		 		});
			}
			function capitalize(s)
			{
			    return s[0].toUpperCase() + s.slice(1);
			}

			setNrOfAgenciesPerBrand('bo');
			setNrOfAgenciesPerBrand('ts');
			setNrOfAgenciesPerBrand('ud');

			//TempStore.setNrOfAgencyfieldRows(data.length);
	    	
	    	//TempStore.setNrOfMemberfieldRows(TempStore.memberInfoArry.length);
			require(['informationbox'], function (InformationBox) {
	                   InformationBox.updateInformationBox();
	                  self.updateNrOfAgencyCount();
	                  self.updateNrOfMembersCount();
	        });
			 
    	}
    	
    	if((obj.getType === 'textSearch') || (obj.getType === 'all')) {
    		console.log('Runn selectable');
    		var valued = 1;

    		$("#tableCommissionRate tbody").selectable({
    			unselecting: function( event, ui ) {
    				
    				if ("TD" === ui.unselecting.nodeName) {
    					var matches = $(ui.unselecting).attr('data-id');
						$('#navigator-area-agency-list #tableAgency tr[data-id*='+matches+']').removeClass("ui-selecting");
    				};
    				
    			},
    			unselected: function( event, ui ) {
    				
    				if ("TR" === ui.unselected.nodeName) {
    					var matches = $(ui.unselected).attr('data-id');
						$('#navigator-area-agency-list #tableAgency tr[data-id*='+matches+']').removeClass("ui-selected");
    				};
    				
    			},
    			selecting: function( event, ui ) {
    				// console.log('td');
    				// console.log($(event.target).attr('data-sort'));
    				if ('TD' === ui.selecting.nodeName) {
    					var matches = $(ui.selecting).attr('data-id');
    					if(matches){
    						//alert(matches);
							$('#navigator-area-agency-list #tableAgency tr[data-id*='+matches+']').addClass( "ui-selecting" );
						}
						else {
							var isDisabled = $( this ).first().removeClass('ui-selectee ui-selected').children().removeClass('ui-selectee');
						}
    				};
    				
    			},
    			selected: function( event, ui ) {
    				// console.log('tr');
    				// //.match(/^([\w\-]+)/g);
    				// console.log(ui);
    				// console.log($(event.target));
    				// console.log($(ui).attr('class'));
    				//  console.log($(event.target).attr('class'));
    				// console.log($(event.target).attr('data-sort'));
    				if ('TR' === ui.selected.nodeName) {
    					//console.log('ui.selected');
    					var matches = $(ui.selected).attr('data-id');
    					//alert(matches);
    					if(matches){
    						//alert(matches);
							$('#navigator-area-agency-list #tableAgency tr[data-id*='+matches+']').addClass( "ui-selected" );
						}
						else {
							var isDisabled = $( this ).first().removeClass('ui-selectee ui-selected').children().removeClass('ui-selectee');
						}
    				};
    				
    			},
		        stop: function () {
		        	//console.log(TempStore);
		        	TempStore.commissionRateIdArr = [];
					TempStore.commissionRateValueArr = [];
					TempStore.selectedAgencyArr = [];

					//Fuctionallity is still overridning this though
		        	var isDisabled = $( "#tableCommissionRate tbody tr" ).first().removeClass('ui-selectee ui-selected').children().removeClass('ui-selectee');

					$('#tableCommissionRate tbody .ui-widget-content.ui-selected .comission').each(function(index,value) {
				    	TempStore.setCommissionRateValueArr($(this).attr('data-commission-rates'));
				    	TempStore.setCommissionRateIdArr($(this).attr('data-id'));
					});

		   		 	console.log('data-commission-id: ' + TempStore.getCommissionRateIdArr());
		   		 	console.log('data-commission-rates: ' + TempStore.getCommissionRateValueArr());
		   		 	self.setSelectedArr(TempStore.agencyInfoArry, TempStore.getCommissionRateIdArr());
		   		 	console.log(TempStore.getSelectedAgencyArr());

		   		 	//console.log(TempStore.getCommissionRateIdArr());
		   		 	if(TempStore.getCommissionRateIdArr().length === 0){
		   		 		self.updateWithSortedlistTableAgency('commission');
		   		 	} else {
		   		 		$('#navigator-area-agency-list #tableAgency tr').removeClass( "edit-selected" );
    					$('#tableCommissionRate tbody tr').removeClass( "edit-selected" );
		   		 	}

		   		 	/*$('#tableCommissionRate tbody tr.comission').attr('data-sort' , function( i, val ) {
  						//alert(val);
  						//alert(i);
  						if(val === 'commission'){
  							self.updateWithSortedlistTableAgency(val);
  						}
					});
		   		 	 */
		        }
		    });
			
			
			//.removeClass('ui-selectee');
			//.selectee( "option", "disabled" );
			
			require(['informationbox'], function (InformationBox) {
	                   InformationBox.updateInformationBox();
	                   self.updateNrOfAgencyCount();
	                   self.updateNrOfMembersCount();
	        });
	    	
    	}
    	$('.info').show();
	    $('.error').hide();
    },
    commonPostFunction: function (data, obj) {
    	var self = this;
    	console.log(data);
    	console.log(obj);
    	
    	if(obj.postType === 'addMember') {
    		self.getAgengcyInfo(TempStore.getAgencyId());
    		self.agencySearch('', TempStore.getAgencyId());
    		//alert('submitAddMember complete');
    		alert('Success' +'\n'+'add member: ' +data);
    	} else if(obj.postType === 'addAgency') {
    		
    		self.getAgengcyInfo(data);
    		//alert('submitAddAgency complete');
    		alert('Success' +'\n'+'add agency: ' +data);
    	}
		self.getAgencyCount();
		//alert(data);
    	self.closeButton();
    },
    commonPutFunction: function (data, obj) {
    	var self = this;
    	console.log(data);
    	console.log(obj);
    	if (obj.putType === 'commissionAndCompanyChain') {
    		TempStore.setNrOfAgencyfieldRows(TempStore.getCommissionRateIdArr().length);
	 
	    	self.updateNrOfAgencyCount();  		
	    	self.getAgengcyInfo(TempStore.getCommissionRateIdArr());
    		alert('Success' +'\n'+'Commission and company chain: ' +data);
    	} else if (obj.putType === 'activetOrDeactive') {
    		//alert('success'TempStore.getCommissionRateIdArr().length);
    		TempStore.setNrOfAgencyfieldRows(TempStore.getCommissionRateIdArr().length);
	    
	    	self.updateNrOfAgencyCount();
    		self.getAgengcyInfo(TempStore.getCommissionRateIdArr());
    		self.agencySearch('', TempStore.commissionRateIdArr[0]);

    		alert('Success' +'\n'+'activet or deactive: ' +data);
    	} else if (obj.putType === 'remove') {
    		alert('Removed complete');
    	} else if (obj.putType === 'editMember') {
    		self.updateNrOfAgencyCount();
    		self.getAgengcyInfo(TempStore.getAgengcySelectedId());
    		self.agencySearch('', TempStore.getAgengcySelectedId());
    		alert('Success' +'\n'+'updated member: ' +data);
    		//Update this aswell
    	} else if (obj.putType === 'editAgency') {
    		self.updateNrOfAgencyCount();
    		self.getAgengcyInfo(TempStore.getAgengcySelectedId());
    		self.agencySearch('', TempStore.getAgengcySelectedId());
    		alert('Success' +'\n'+'updated agency: ' +data);
    	};
    	
    	//alert(data);
    	self.closeButton();
    	
    },
    setSelectedArr: function (arr, arr2) {
    	for (var i = 0; i < arr.length; i++) {
		    for (var j = 0; j < arr2.length; j++) {
		    	//console.log(arr[i].id);
		    	//console.log(arr2[j]);
		    	if (arr[i].id.toString() === arr2[j].toString()){
		    		TempStore.setSelectedAgencyArr(arr[i]);
		    		console.log(arr[i]);
		    		//Can't use return here because of multiple selection
		    	}
		    }
		}
		console.log(TempStore.getSelectedAgencyArr());
    },
    getJSONObjTempDownloadData: function () {
    	var emailList = $.map( TempStore.memberInfoArry, function( result1 ) {		
			return {
					Email: result1.email
				};
		});

		emailList.push({columnText:'Email'});
		emailList.reverse();

		var csv = JSONCSV.CSVMethod(emailList);
		TempStore.setCSV(csv);

		var aTest = window.document.createElement('a');

	    if(typeof aTest.download != "undefined"){
	    	console.log('Update html attr');
	    	//button.addClass('button black');
	    	//button.appendTo(a);
	    	//a.appendTo('#buttonArea');
	    	$('#function-area').find('a.dowloadCSVPerAgency').attr({
			  href: 'data:text/csv;charset=utf-8,' + escape(csv),
			  download: TempStore.getAgengcySelectedId()+'.csv',
			});
	    	
		 	
	    }

    },
    dropDownChanged: function () {
    	this.updateDownloadCsvAllButton();
        require(['informationbox'], function (InformationBox) {
	        InformationBox.updateInformationBox();               
	    });
    },
    updateDownloadCsvAllButton: function () {
    	self = this;
    	//alert($('#function-area button.dropDownChangedButton').parent().get( 0 ).tagName);
    	console.log('Inside updateDownloadCsvAllButton');
    	//console.log($('#function-area button.dowloadCSVButtonAll').parent().attr('href'));
    	console.log(self.locationOrigin+'crm/members/'+TempStore.getDropDownVal()+'/download/email-list.csv');
    	
    	$('#function-area button.dowloadCSVButtonAll').parent().attr({
			  href: self.locationOrigin+'crm/members/'+TempStore.getDropDownVal()+'/download/email-list.csv'
		});
    	
    },
    getAgengcyInfo: function(agencyId) {
    	var self = this;
    	Listners.removeListners('#navigator-area-agency-list #tableCommissionRate td');
    	Listners.removeListners('#navigator-area-agency-list #tableAgency td');
    	Listners.removeListners('#navigator-area-member-list #tableMember td');

		Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-agency-list #tableCommissionRate tr');
    	Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-agency-list #tableAgency tr');
    	Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-member-list #tableMember tr');

    	Communicator.getJSONObj({
			//     http://joker2.test.resfeber.se/crm/agencies/bo13152
		  	url: self.locationOrigin+'crm/agencies/'+agencyId,
			getType:'agencyInfo',
			identifier:['#navigator-area-agency-list','#navigator-area-member-list']
		});


    },
    getSearchJSONAndDisplay: function () {
    	var self = this;
    	Listners.removeListners('#navigator-area-agency-list #tableCommissionRate td');
    	Listners.removeListners('#navigator-area-agency-list #tableAgency td');
    	Listners.removeListners('#navigator-area-member-list #tableMember td');

		Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-agency-list #tableCommissionRate tr');
    	Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-agency-list #tableAgency tr');
    	Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-member-list #tableMember tr');
    	console.log(TempStore.getDropDownVal());

    	

    	if(!TempStore.getTypedVal() || 0 === TempStore.getTypedVal().length) {
    		Communicator.getJSONObj({
	    		//http://joker2.test.resfeber.se/crm/agencies/all/bo
				url: self.locationOrigin+'crm/agencies/all/'+TempStore.getDropDownVal(),
				getType:'all',
				identifier:['#navigator-area-agency-list'],
			});
    	}
    	else{
    		Communicator.getJSONObj({
	    		//url:'/default/a-e_client/javascripts/results.json',
				url:self.locationOrigin+'crm/'+TempStore.getDropDownVal()+'/search?q='+TempStore.getTypedVal(),
				getType:'textSearch',
				identifier:['#navigator-area-agency-list','#navigator-area-member-list']
			});
    	}
		self.getAgencyCount();
		if(TempStore.getDownloadAllCSVButton()){
			self.createDowloadCSVButtonAll();
			TempStore.setDownloadAllCSVButton(false);
		}
    },
    checkAndCreateCVSButton: function() {
    	self = this;
    	if(TempStore.getDownloadCSVButton()){
	    	self.createDowloadCSVButton();
	    	console.log('Run this');
	    	TempStore.setDownloadCSVButton(false);
	    }
    },
    getAgencyCount: function() {
    	self = this;
    	console.log('in agencyCount');
    	Communicator.getJSONObj({
		  	url:self.locationOrigin+'crm/agencies/count/all',
			getType:'agencyCount'
		});
    },
    searchSubmitButton: function() {
    	var self = this;
    	console.log('Inside searchSubmitButton');
    	console.log(TempStore);
    	console.log(TempStore.getTypedVal());
    	
    		console.log('TempStore.getTypedVal()');
    		console.log(TempStore.getTypedVal());
	    	console.log('display fields');
	    	//this.displayMemberField();
	    	console.log('display agency');
	    	//this.displayAgencyField();
	    	//Remove listner submit button and return/enter key for not getting a new search while already processing
	    	$('.searchContainer').hide();
	    	$('progress').show();
	    	// Change color on button
	    	this.getSearchJSONAndDisplay();

    	
    },
    submitAddMember: function () {
    	var self = this,
    		mandatory = false;
    	//Use post for adding


    	//Check mandatory
    	mandatory = self.checkValidationAddMember();
    	
    	if(mandatory) {
    		
    		//Active attr must be a string for the sql to handle
    		var newObject = $.extend(true, {}, TempStore.memberInfo);
	   		newObject.memberInfo.active = newObject.memberInfo.active.toString();
			
	   		//TempStore.memberInfo.memberInfo.active = TempStore.memberInfo.memberInfo.active.toString();

			console.log(newObject);
			console.log(TempStore.memberInfo);
	    	Communicator.postJSONObj({

				url: self.locationOrigin+'crm/members/',
				//url: self.locationOrigin+'crm/bo/agencies/1234 http://joker2.test.resfeber.se/crm/'+TempStore.getDropDownVal()+'/members?agencyId='+TempStore.getDataId(),
				postType:'addMember',
				datas: JSON.stringify(newObject)
			});

    	} else {
    		alert('Please fill in mandatory fields');
    		console.log(TempStore.memberInfo);
    		self.noInputAddMember();
    	}
    	
    	console.log('Send data');
    },
    checkValidationAddMember: function() {
    	if (TempStore.memberInfo) {
    		if(TempStore.getFirst_name() && TempStore.getLast_name() && TempStore.getEmail() && TempStore.getPassword() && TempStore.getAgencyId() && TempStore.getVip() !== ''){
    			
	    		$('input#first_name').removeClass('errorInput');
		    	$('input#agencyId').removeClass('errorInput');
		    	$('input#last_name').removeClass('errorInput');
		    	$('input#email').removeClass('errorInput');
		    	$('input#password').removeClass('errorInput');
		    	$('input#vip').removeClass('errorInput');
		    	return true;
    		}
    	};
    	return false;
    },
    noInputAddMember: function() {
    	if(!TempStore.getFirst_name()) { $('input#first_name').addClass('errorInput'); } else {$('input#first_name').removeClass('errorInput');}
    	if(!TempStore.getAgencyId()){ $('input#agencyId').addClass('errorInput'); } else {$('input#agencyId').removeClass('errorInput');}
    	if(!TempStore.getLast_name()){ $('input#last_name').addClass('errorInput'); } else {$('input#last_name').removeClass('errorInput');}
    	if(!TempStore.getEmail()){ $('input#email').addClass('errorInput'); } else {$('input#email').removeClass('errorInput');}
    	if(!TempStore.getPassword()){ $('input#password').addClass('errorInput'); } else {$('input#password').removeClass('errorInput');}

    	console.log(TempStore.getVip());
    	console.log('TempStore.getVip()');
    	if(TempStore.getVip() === undefined || TempStore.getVip() === null || TempStore.getVip() === ''){ $('input#vip').addClass('errorInput'); } else {$('input#vip').removeClass('errorInput');}

    },
    submitAddAgency: function (){
    	console.log(TempStore.agencyInfo);
    	Communicator.postJSONObj({
			url: self.locationOrigin+'crm/agencies/'+TempStore.getDropDownVal(),
				//http://joker2.test.resfeber.se/crm/bo/agencies/
				//http://joker2.test.resfeber.se/crm/agencies/bo
			postType:'addAgency',
			datas: JSON.stringify(TempStore.agencyInfo)
		});
    },
    submiteditAgency: function(){
    	
    	console.log(TempStore.agencyInfo);
    	Communicator.putJSONObj({
    			 //http://joker2.test.resfeber.se/crm/agencies/
			url: self.locationOrigin+'crm/agencies',
			putType:'editAgency',
			datas: JSON.stringify(TempStore.agencyInfo)

		});
    },
    submiteditMember: function(){
    	console.log(TempStore.memberInfo);
    	Communicator.putJSONObj({
    		   //http://joker2.test.resfeber.se/crm/members
			url: self.locationOrigin+'crm/members',
			//url: self.locationOrigin+'crm/bo/agencies/1234 http://joker2.test.resfeber.se/crm/'+TempStore.getDropDownVal()+'/members?agencyId='+TempStore.getDataId(),
			putType:'editMember',
			datas: JSON.stringify(TempStore.memberInfo)
		});

    },
    activetOrDeactiveButton: function() {

    	Display.activeOrDeactivateMembersInCompany();

    	//////
    	$("#popup #edit-add-list .chocieActiveOrDeactivate input[type='radio']").change(function (event) {
  
    		console.log('Start');
    		console.log(event.target);
            console.log($(event.target).attr("id"));
            console.log($(event.target).attr('class'));
            console.log($(event.target).attr('value'));
            console.log($(event.target).val());
            console.log($(event.target).html());
            console.log($(event.which));
            console.log($(event));
            console.log('Stop');
            console.log(TempStore.Store);
	    	$("#popup #edit-add-list .chocieActiveOrDeactivate input[type='radio']").prop( "checked", function( i, val ){
	    		console.log(val);
	    		console.log(i);
	    		if(val) {
	    			console.log($(this).val());
	    			if ($(this).val() === 'activate') {
	    				console.log($(this).val());
	    				//TempStore.setCommissionRateChoosen($(this).val());
	    				TempStore.setActivetOrDeactive($(this).val());
	    				
	    			} else if ($(this).val() === 'deactivate') {
	    				TempStore.setActivetOrDeactive($(this).val());
	    			}
	    		}
	    	});
    	});
		Listners.addListerns({
        	identifier:'#popup .submitArea .activetOrDeactiveButtonSubmit'
    	});
    	
    },
    activetOrDeactiveButtonSubmit: function() {

    	var tempAgencyIdString = $.map( TempStore.getSelectedAgencyArr(), function( value, indexOrKey ) {
    		return value.id;
    	});
    	var agenciesString = tempAgencyIdString.join();
    	//console.log(agenciesString);
    	
    	console.log( self.locationOrigin+'crm/agencies/'+agenciesString+'/'+TempStore.getActivetOrDeactive());
    				
    	console.log(TempStore.getSelectedAgencyArr().length);
    	
    	
    	if(0 < TempStore.getSelectedAgencyArr().length ) {
	    	Communicator.putJSONObj({
				url: self.locationOrigin+'crm/agencies/'+agenciesString+'/'+TempStore.getActivetOrDeactive(),
				putType:'activetOrDeactive'
				//datas: JSON.stringify(TempStore.agencyInfo)
			});
			TempStore.setActivetOrDeactive('activate');
		} else {
			alert('Please select a agency/agencies');
		}
    },
    commissionAndCompanyChainEditButtonSubmit: function() {
    	
    	var tempAgencyIdString = $.map( TempStore.getSelectedAgencyArr(), function( value, indexOrKey ) {
    		return value.id;
    	});
    	var agenciesString = tempAgencyIdString.join();
    	//console.log(agenciesString);
    	
    	
    	
    	console.log(TempStore.getSelectedAgencyArr().length);
    	if(TempStore.getCommissionRateChoosen() === ''){
    		TempStore.setCommissionRateChoosen('null');
    	}
    	if(TempStore.getNewCompanyChainChoosen() === ''){
    		TempStore.setNewCompanyChainChoosen('null');
    	}
    	
    	//alert(TempStore.getCommissionRateChoosen());
    	//alert(TempStore.getNewCompanyChainChoosen());
    	console.log( self.locationOrigin+'crm/agencies/'+agenciesString+'?commission='+TempStore.getCommissionRateChoosen()+'&companyChain='+TempStore.getNewCompanyChainChoosen());
    	
    	if(0 < TempStore.getSelectedAgencyArr().length ) {
	    	Communicator.putJSONObj({
	    		//   http://joker2.test.resfeber.se/crm/agencies/bo1234,bo3456,bo5678?commission=as_is&companyChain=Resia
				url: self.locationOrigin+'crm/agencies/'+agenciesString+'?commission='+TempStore.getCommissionRateChoosen()+'&companyChain='+TempStore.getNewCompanyChainChoosen(),
				putType:'commissionAndCompanyChain'
				//datas: JSON.stringify(TempStore.agencyInfo)
			});
		} else {
			alert('Please select a agency/agencies');
		}
		
    },
    commissionAndCompanyChainEditButton: function () {
  		Display.choiseInCommissionAndCompanyChain();

    	//////
    	$("#popup #edit-add-list .chocieCompanyChain input[type='radio']").change(function (event) {
  
    		console.log('Start');
    		console.log(event.target);
            console.log($(event.target).attr("id"));
            console.log($(event.target).attr('class'));
            console.log($(event.target).attr('value'));
            console.log($(event.target).val());
            console.log($(event.target).html());
            console.log($(event.which));
            console.log($(event));
            console.log('Stop');
	    	$("#popup #edit-add-list .chocieCompanyChain input[type='radio']").prop( "checked", function( i, val ){
	    		console.log(val);
	    		console.log(i);
	    		if(val) {
	    			console.log($(this).val());
	    			if ($(this).val() !== 'setCommissionRateValue') {
	    				console.log($(this).val());
	    				//TempStore.setCommissionRateChoosen($(this).val());
	    				TempStore.setNewCompanyChainChoosen($(this).val());
	    				
	    			} else {
	    				TempStore.setNewCompanyChainChoosen(TempStore.getNewCompanyChain());
	    				//console.log($(this).val());
	    				//console.log(TempStore.getCommissionRate());
	    				//console.log(TempStore.getAgencyInfoCommission());
	    				//TempStore.setCommissionRateChoosen(TempStore.getCommissionRate());
	    			}
	    		}
	    	});
    	});

    	$("#popup #edit-add-list .chocieRate input[type='radio']").change(function (event) {
  
    		console.log('Start');
    		console.log(event.target);
            console.log($(event.target).attr("id"));
            console.log($(event.target).attr('class'));
            console.log($(event.target).attr('value'));
            console.log($(event.target).val());
            console.log($(event.target).html());
            console.log($(event.which));
            console.log($(event));
            console.log('Stop');
	    	$("#popup #edit-add-list .chocieRate input[type='radio']").prop( "checked", function( i, val ){
	    		console.log(val);
	    		console.log(i);
	    		if(val) {
	    			console.log($(this).val());
	    			if ($(this).val() !== 'comissionRate') {
	    				console.log($(this).val());
	    				TempStore.setCommissionRateChoosen($(this).val());
	    				
	    			} else {
	    				console.log(TempStore.getCommissionRate());
	    				console.log(TempStore.getAgencyInfoCommission());
	    				TempStore.setCommissionRateChoosen(TempStore.getCommissionRate());
	    			}
	    		}
	    	});
    	});

	    Listners.commissionAndCompanyChain();

    	Listners.addListerns({
        	identifier:'#popup .submitArea .commissionChainEditSubmit'
    	});
		
    },
    addMember: function() {
    		var self = this;
    		self.generatPassword();
	    	Display.toggleView('#popup');
	    	Display.addH1({
	    		text:'Add Member View',
	    		identifier: '#popup #edit-add-list'
	    	});
	    	TempStore.resetMemberInfo();
	    	TempStore.memberInfo.id = null;
	    	console.log(TempStore.memberInfo);
	    	console.log(Display);
	    	TempStore.setAgencyId(TempStore.getAgengcySelectedId());
	    	TempStore.setPassword(self.generatPassword());
	    	Display.displayEditAdd(true);

	    	Listners.editAdd();
	    	
	    	Display.addButton({
	    		text: 'Submit add Member',
	    		identifier: '#popup #edit-add-list',
	    		elementClass: 'memberAddSubmitButton button green margin10'
	    	});
	    	Listners.addListerns({
            	identifier:'#popup .memberAddSubmitButton'
	    	});
    	
    },
    editMember: function() {
    	console.log('editMember /////////');
    	//Listners.removeListners('#view-area #tableView tr');
    	//Display.removeInfo('#view-area #tableView tr');
    	//console.log('should remove view-area first');
    	//console.log(TempStore.getDataId());
    	

    	Communicator.getJSONObj({
			url: self.locationOrigin+'crm/members/'+TempStore.getDataId(),
			   //http://joker2.test.resfeber.se/crm/members/bo14567
		       //http://joker2.test.resfeber.se/crm/members/bo14567
		       //http://joker2.test.resfeber.se/crm/bo/members/bo14542
			getType:'memberInfo',
			identifier:'#view-area #tableView'
		});
    },
    addAgency: function() {
    	TempStore.agencyInfo.id 			= null;
    	TempStore.agencyInfo.address        = null;
        TempStore.agencyInfo.areaCode       = null;
        TempStore.agencyInfo.city           = null;
        TempStore.agencyInfo.commission     = null;
        TempStore.agencyInfo.companyChain   = null;
        TempStore.agencyInfo.companyName	= null;
		
    	Display.toggleView('#popup');
	    	Display.addH1({
	    		text:'Add Agency View',
	    		identifier: '#popup #edit-add-list'
	    	});
    	Display.addButton({
    		text: 'Submit add Agency',
    		identifier: '#popup #edit-add-list',
    		elementClass: 'agencyAddSubmitButton button green margin10'
    	});

	   	// Listners.commissionAndCompanyChain();
	  	Display.displayAgencyEditAdd();
	  	Listners.agencyEditAddListner();
    	Listners.addListerns({
        	identifier:'#popup .agencyAddSubmitButton'
    	});

    },
    editAgency: function() {
    	console.log('Edit Agency');
    	console.log(TempStore.getAgengcySelectedId());
    	//alert(TempStore.getAgengcySelectedId());
    	console.log('Edit Agency End');

    	//Set saved angency singel object
    	$.each( TempStore.agencyInfoArry, function( key, value ) {
		  //console.log( key + ": " + value );
		  console.log(value);
		  if (value.id === TempStore.getAgengcySelectedId()) {
		  	console.log('SAVE NOW the agency selected');
		  	//TempStore.agencyInfo = value;
		  	console.log(value);
		  	console.log(value.id);
		  	console.log(TempStore.agencyInfo);
		  	TempStore.agencyInfo.address          = value.address;
		    TempStore.agencyInfo.areaCode         = value.areaCode;
		    TempStore.agencyInfo.city             = value.city;
		    TempStore.agencyInfo.commission       = value.commission;
		    TempStore.agencyInfo.companyChain     = value.companyChain;
		    TempStore.agencyInfo.companyName      = value.companyName;

		  	return false;
		  };
		  //return (value.id === TempStore.getAgengcySelectedId());
		});
    	console.log(TempStore.agencyInfo);

    	Display.toggleView('#popup');
	    	Display.addH1({
	    		text:'Edit Agency View',
	    		identifier: '#popup #edit-add-list'
	    	});

	    Display.displayAgencyEditAdd();
    	Display.addButton({
    		text: 'Edit Agency',
    		identifier: '#popup #edit-add-list',
    		elementClass: 'agencyEditSubmitButton button orange margin10'
    	});
	    // Listners.commissionAndCompanyChain();
	    Listners.agencyEditAddListner();
    	Listners.addListerns({
        	identifier:'#popup .agencyEditSubmitButton'
    	});
    },
    memberRemove: function() {
    
    	var x = window.confirm("Are you sure you want to remove user?")
		if (x){
			/*console.log('send remove');
			Communicator.postJSONObj({
				url: self.locationOrigin+'crm/bo/agencies/1234',
				//http://joker2.test.resfeber.se/crm/'+TempStore.getDropDownVal()+'/members?agencyId='+TempStore.getDataId(),
				putType:'remove'
			});*/
		}
		else {
			console.log("do nothing");
		}
		
    },
    agencyRemove: function() {
    
    	var x = window.confirm("Are you sure you want to remove user?")
		if (x){
			/*console.log('send remove');
			Communicator.postJSONObj({
				url: self.locationOrigin+'crm/bo/agencies/1234',
				//http://joker2.test.resfeber.se/crm/'+TempStore.getDropDownVal()+'/members?agencyId='+TempStore.getDataId(),
				putType:'remove'
			});*/
		}
		else {
			console.log("do nothing");
		}
		
    },
    closeButton: function() {
    	
    	Listners.removeListners('#popup');
    	Display.toggleView('#popup');
    	Display.removeInfo('#popup H1');
    	Display.removeInfo('#popup #edit-add-list #tableEditAdd tr');
    	Display.removeInfo('#popup button');
    	Display.removeInfo('#popup span');
    	Display.removeInfo('#popup input');
    	Display.removeInfo('#popup .chocieCompanyChain');
    	Display.removeInfo('#popup .chocieActiveOrDeactivate');
    	Display.removeInfo('#popup .chocieRate');
    	Display.removeInfo('#popup .submitArea');
    },
    agencySearch: function(obj, string) {
    	var self = this;

    	if (string) {
    		//Works because of closure
    		var obj = {dataId:string};
    	};
    	console.log(string);
    	console.log(obj);
    	
    	console.log('remove Listners');
    	Listners.removeListners('#navigator-area-member-list #tableMember td');

    	console.log('remove elements');
    	
    	Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-member-list #tableMember tr');
    	$('#navigator-area-agency-list #tableAgency tr[data-id*='+TempStore.getAgengcySelectedId()+']').removeClass( "edit-selected" );
    	$('#tableCommissionRate tbody tr[data-id*='+TempStore.getAgengcySelectedId()+']').removeClass( "edit-selected" );
    	console.log('Remove');
    	//console.log(TempStore.getDataId());
    	Communicator.getJSONObj({
			//url: self.locationOrigin+'crm/bo/members?agencyId=bo14542',
			//     http://joker2.test.resfeber.se/crm/agencies/bo13152
		  	url: self.locationOrigin+'crm/members?agencyId='+obj.dataId,
			getType:'agency',
			identifier:['#navigator-area-agency-list','#navigator-area-member-list']
		});
		self.getAgencyCount();
		
		if(!TempStore.editAgencyButton) {
			Display.addButton({
	    		text: 'Edit agency',
	    		identifier: '#function-area',
	    		elementClass: 'editAgency button orange margin10'
	    	});
	    	
	    	Listners.addListerns({
            	identifier:'#function-area .editAgency'
        	});
	    	TempStore.editAgencyButton = true;
    	}
    	console.log('Print object');
    	console.log(obj.dataId);
    	$('#navigator-area-agency-list #tableAgency tr[data-id*='+obj.dataId+']').addClass( "edit-selected" );
    	$('#tableCommissionRate tbody tr[data-id*='+obj.dataId+']').addClass( "edit-selected" );

    	$('#navigator-area-agency-list #tableAgency tr').removeClass( "ui-selected ui-selecting" );
    	$('#tableCommissionRate tbody tr').removeClass( "ui-selected ui-selecting" );

    	//alert(obj.dataId);
    	TempStore.setAgengcySelectedId(obj.dataId);
    	TempStore.agencyInfo.id = (obj.dataId);
    	//$(obj.elementClass).addClass('ui-selected');
	    //Listners.commissionAndCompanyChain();
		console.log(TempStore.getClickedVal());

    },
    createDowloadCSVButton: function () {
    	console.log('creating button');
    	var aTest = window.document.createElement('a');
    	var a = $('<a>', {
			 	href: 'data:text/csv;charset=utf-8,' , //+ escape(csv),
			 	download: TempStore.getAgengcySelectedId()+'.csv'
			 	
			 });
		    a.addClass('dowloadCSVPerAgency')
		    var button = $('<button>', {
			  	//text: 'Hello',
			  	//class: 'downloadCSV button black',
			  	text: 'Download mail list for an Agency'
			  });

		    if(typeof aTest.download != "undefined"){
		    	console.log('Av download html attr');
		    	button.addClass('button black margin10');
		    	button.appendTo(a);
		    	a.appendTo('#function-area');
		    }
		    else {
		    	console.log('Does not have download html attr');
		    	button.addClass('downloadCSV button black margin10');
		    	button.appendTo('#function-area');
		    	Listners.addListerns({
		            identifier:'#function-area .downloadCSV',
		        });
		    }
    },
    createDowloadCSVButtonAll: function () {
    	console.log('creating button');
    	var aTest = window.document.createElement('a');
    	var a = $('<a>', {
			 	href:  self.locationOrigin+'crm/members/'+TempStore.getDropDownVal()+'/download/email-list.csv',
			 	target: '_blank'
			 	
			 });
		    
		    var button = $('<button>', {
			  	//text: 'Hello',
			  	//class: 'downloadCSV button black',
			  	text: 'Download mail list per brand'
			  });
		    button.addClass('dowloadCSVButtonAll button black margin10');
		   
		    	button.appendTo(a);
		    	a.appendTo('#function-area');
		    	Listners.addListerns({
		            identifier:'#function-area .dowloadCSVButtonAll',
		        });
		   
    },
    downloadCSVButton: function() {
    	alert('Do not forget to rename the file. Because it can not be named dowload in Apsis');
    	window.open("data:text/csv;charset=utf-8," + escape(TempStore.getCSV()));
    },
	updateWithSortedlistTableAgency: function(value) {
		console.log('In updateWithSortedlist');
		if(TempStore.agencyInfoArry) {
			
			console.log('In updateWithSortedlist');
			TempStore.agencyInfoArry.sort(this.dynamicSort(value));
			
			console.log('remove elements');
			//First for angency
			Listners.removeListners('#navigator-area-agency-list #tableAgency td');
    		
    		Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-agency-list #tableAgency tr');

    		//Second for commission
    		Listners.removeListners('#navigator-area-agency-list #tableCommissionRate td');
			Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-agency-list #tableCommissionRate tr');

			Display.displayCommssionAgencyInfo(TempStore.agencyInfoArry);
    		Display.displayAgencyInfo(TempStore.agencyInfoArry);
    		
    		Listners.addListerns({
            	identifier:'#navigator-area-agency-list #tableCommissionRate th'
        	});

    		Listners.addListerns({
            	identifier:'#navigator-area-agency-list #tableAgency td'
        	});
		}
	},
	updateWithSortedlistTableMembers: function(value) {
		console.log('In updateWithSortedlist');
		if(TempStore.memberInfoArry) {

			console.log('In updateWithSortedlist');
			TempStore.memberInfoArry.sort(this.dynamicSort(value));

			Listners.removeListners('#navigator-area-member-list #tableMember td');

    		console.log('remove elements');
    	
    		Display.removeInfoNextAll(':nth-child(1)', '#navigator-area-member-list #tableMember tr');


    		Display.displayMembersInfo(TempStore.memberInfoArry);
    		//Listners.addListerns('#navigator-area-member-list #tableAgency td');
    		Listners.addListerns({
            	identifier:'#navigator-area-member-list #tableMember td'
        	});
		}
	},
	dynamicSort: function(property) {
		var sortOrder = 1;
	    if(property[0] === "-") {
	        sortOrder = -1;
	        property = property.substr(1);
	    }
	    return function (a,b) {
	        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
	        return result * sortOrder;
	    }
	},
	generatPassword: function() {
		var randomstring = Math.random().toString(36).slice(-8);

		Math.random()                // Generate random number, eg: 0.123456
        	.toString(36)           // Convert  to base-36 : "0.4fzyo82mvyr"
            .slice(-8);				// Cut off last 8 characters : "yo82mvyr"

        //TempStore.setPassword(randomstring);

        return randomstring;
	},
	updateNrOfAgencyCount: function() {
		$('#navigator-area-agency h3 span.nrOfAgencyfieldRows').html(TempStore.getNrOfAgencyfieldRows());
	},
	updateNrOfMembersCount: function() {
		$('#navigator-area-member h3 span.nrOfMembersfieldRows').html(TempStore.getNrOfMemberfieldRows());
	},
	getScrollbarWidth: function(){
		// Create the measurement node
		var scrollDiv = window.document.createElement("div");
		scrollDiv.className = "scrollbar-measure";
		window.document.body.appendChild(scrollDiv);

		// Get the scrollbar width
		//alert(scrollDiv.offsetWidth - scrollDiv.clientWidth);
		TempStore.setScrollbarWidth (scrollDiv.offsetWidth - scrollDiv.clientWidth);
		//alert('TempStore.getScrollbarWidth()');
		console.log(TempStore.getScrollbarWidth()); // Mac:  15

		// Delete the DIV 
		window.document.body.removeChild(scrollDiv);
	},
	statusBar: function() {

	},
	resizeScreen: function() {
		//$(".rightPanelData").css('height', (ç);
		console.log('//////////');
		console.log($('#navigator-area-agency-list').width());
		console.log($('#navigator-area-agency-list #tableCommissionRate').width());
		console.log($('#navigator-area-agency-list #tableAgency').width());

		var containerSize = $('#navigator-area-agency-list').width(),
			comissionSize = $('#navigator-area-agency-list #tableCommissionRate').width(),
			tempSize = '';

			//Minus 1 probably because of uneven calculations
			tempSize = containerSize - comissionSize - 1 - TempStore.getScrollbarWidth();

		$('#navigator-area-agency-list #tableAgency').css('width', tempSize );

		console.log(tempSize);
	},
	toggleViewContent: function() {
		self = this;
		if(TempStore.toggleViewContentVal === 'option1'){
			$("#function-area .toggleViewContentButton").html('Toggle view ' +TempStore.toggleViewContentVal);
			$('#navigator-area-agency').css( "width", "70%");
			self.resizeScreen();
			$('#navigator-area-member').css( "width", "30%");
			TempStore.toggleViewContentVal = 'option2';
		} else if (TempStore.toggleViewContentVal === 'option2'){
			$("#function-area .toggleViewContentButton").html('Toggle view ' +TempStore.toggleViewContentVal);
			$('#navigator-area-agency').css( "width", "30%");
			self.resizeScreen();
			
			$('#navigator-area-member').css( "width", "70%");
			TempStore.toggleViewContentVal = 'option3';
		} else {
			$("#function-area .toggleViewContentButton").html('Toggle view ' +TempStore.toggleViewContentVal);
			$('#navigator-area-agency').css( "width", "50%");
			self.resizeScreen();
			$('#navigator-area-member').css( "width", "50%");
			TempStore.toggleViewContentVal = 'option1';
		}
	},
	customView: function() {
		self = this;
		console.log('In customView');
		if(TempStore.customViewBoolean){
			$("#search-area .notification").draggable().addClass('cursorMove');
			$("#search-area .searchContainer").draggable().addClass('cursorMove');;
			$("#navigator-area-agency").draggable().resizable( {animate: true, helper: "ui-resizable-helper", ghost: true, start: function( event, ui ) { self.resizeScreen() }, resize: function( event, ui ) { self.resizeScreen() }, stop: function( event, ui ) { self.resizeScreen() } }).addClass('cursorMove');;
			$("#navigator-area-member").draggable().resizable( {animate: true, helper: "ui-resizable-helper", ghost: true}).addClass('cursorMove');;
			$("#function-area").draggable().resizable( {animate: true, helper: "ui-resizable-helper", ghost: true}).addClass('cursorMove scrollable');;
			$("#function-area .customizeButton").html('Customize view On');
			$("#navigator-area-agency-list").css({"max-height": "100%", "min-height": "1%"});
			$("#navigator-area-member-list").css({"max-height": "100%", "min-height": "1%"});
			TempStore.customViewBoolean = false;
		} else {
			$("#search-area .notification").draggable( "destroy" ).removeClass('cursorMove');
			$("#search-area .searchContainer").draggable( "destroy" ).removeClass('cursorMove');
			$("#navigator-area-agency").draggable("destroy").resizable("destroy").removeClass('cursorMove');
			$("#navigator-area-member").draggable("destroy").resizable("destroy").removeClass('cursorMove');
			$("#function-area").draggable("destroy").resizable("destroy").removeClass('cursorMove');
			$("#function-area .customizeButton").html('Customize view Off');
			TempStore.customViewBoolean = true;
		}
	}


}; //End object
});//End define