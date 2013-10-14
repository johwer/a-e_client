var TempStore = TempStore  || {
    init: function () {
        this.dropdown = 'bo';
        this.clicked ='';
        this.nrOfMemberfieldRows = 0; 
        this.typed = null;
        this.member_id = '';
        this.password = '';
        this.encrypted_password = '';
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.company_chain = '';
        this.country = '';
        this.city = '';
        this.area_code = '';
        this.company_name = '';
        this.address = '';
        this.phone_daytime = '';
        this.phone_home = '';
        this.phone_cellular = '';
        this.fax = '';
        this.birthdate = '';
        this.sex = '';
        this.personal_description = '';
        this.civil_status = '';
        this.occupation = '';
        this.traveller_type = '';
        this.show_acceptance = '';
        this.last_visit = '';
        this.belongs_to_site = '';
        this.unregdate = '';
        this.vip = '';
        this.status = '';
        this.regdate = '';
        this.want_email = '';
        this.session_code = '';
        this.updated = '';
        this.last_news_email = '';
        this.last_news_email_info = '';
        this.origin = '';
        this.memberInfoDisplayed = false;
        this.csv = '';
        this.csvButton = true;


        /* memberInfo object */
        this.memberInfo = {};
        this.memberInfo.memberInfo = {};
        this.memberInfo.agencyInfo = {};

        this.memberInfo.id                          = "";
        this.memberInfo.password                    = "";
        this.memberInfo.encryptedPassword           = "";
        this.memberInfo.memberInfo.firstName        = "";
        this.memberInfo.memberInfo.lastName         = "";
        this.memberInfo.memberInfo.email            = "";
        this.memberInfo.memberInfo.login            = "";
        this.memberInfo.memberInfo.phoneDaytime     = "";
        this.memberInfo.memberInfo.phoneCellular    = "";
        this.memberInfo.agencyInfo.companyChain     = "";
        this.memberInfo.agencyInfo.country          = "";
        this.memberInfo.agencyInfo.city             = "";
        this.memberInfo.agencyInfo.areaCode         = "";
        this.memberInfo.agencyInfo.companyName      = "";
        this.memberInfo.agencyInfo.address          = "";
        this.memberInfo.phoneHome                   = "";
        this.memberInfo.fax                         = "";
        this.memberInfo.birthdate                   = "";
        this.memberInfo.sex                         = "";
        this.memberInfo.personalDescription         = "";
        this.memberInfo.civilStatus                 = "";
        this.memberInfo.occupation                  = "";
        this.memberInfo.travellerType               = "";
        this.memberInfo.showAcceptance              = "";
        this.memberInfo.lastVisit                   = "";
        this.memberInfo.belongsToSite               = "";
        this.memberInfo.unregdate                   = "";
        this.memberInfo.vip                         = "";
        this.memberInfo.status                      = "";
        this.memberInfo.regdate                     = "";
        this.memberInfo.wantEmail                   = "";
        this.memberInfo.sessionCode                 = "";
        this.memberInfo.updated                     = "";
        this.memberInfo.lastNewsEmail               = "";
        this.memberInfo.lastNewsEmailInfo           = "";
        this.memberInfo.origin                      = "";

    },
    setDownloadCSVButton: function(val) {
        console.log('set val');
        TempStore.csvButton = val;
        console.log(TempStore.csvButton);
    },
    getDownloadCSVButton: function() {
        console.log('csvButton');
        return TempStore.csvButton;
    },
    setCSV: function(val) {
        console.log('set val');
        TempStore.csv = val;
        console.log(TempStore.csv);
    },
    getCSV: function() {
        console.log('csv');
        return TempStore.csv;
    },
    setDropDownVal: function(val) {
    	console.log('set val');
    	TempStore.dropdown = val;
    	console.log(TempStore.dropdown);
    },
    getDropDownVal: function() {
    	console.log('getDropDownVal');
    	return TempStore.dropdown;
    },
    setClickedVal: function(val) {
    	console.log(val);
    	TempStore.clicked = val;
    },
    getClickedVal: function () {
    	return TempStore.clicked;
    },
    setMember_id: function (val) {
    	console.log(val);
    	TempStore.memberInfo.id = val;
    },
    getMember_id: function (val) {
    	return TempStore.memberInfo.id;
    },
    setPassword: function (val) {
    	console.log(val);
    	TempStore.memberInfo.password = val;
    },
    getPassword: function (val) {
    	return TempStore.memberInfo.password;
    },
    setEncrypted_password: function (val) {
    	console.log(val);
    	TempStore.memberInfo.encryptedPassword = val;
    },
    getEncrypted_password: function (val) {
    	return TempStore.memberInfo.encryptedPassword;
    },
    setFirst_name: function (val) {
    	console.log(val);
    	TempStore.memberInfo.memberInfo.firstName = val;
    },
    getFirst_name: function (val) {
    	return TempStore.memberInfo.memberInfo.firstName;
    },
    setLast_name: function (val) {
    	console.log(val);
    	TempStore.memberInfo.memberInfo.lastName = val;
    },
    setLogin: function (val) {
        console.log(val);
        TempStore.memberInfo.memberInfo.login = val;
    },
    getLogin: function (val) {
    	return TempStore.memberInfo.memberInfo.login;
    },
    setEmail: function (val) {
    	console.log(val);
    	TempStore.memberInfo.memberInfo.email = val;
    },
    getEmail: function (val) {
    	return TempStore.memberInfo.memberInfo.email;
    },
    setCountry: function (val) {
    	console.log(val);
    	TempStore.memberInfo.agencyInfo.country = val;
    },
    getCountry: function (val) {
    	return TempStore.memberInfo.agencyInfo.country;
    },
    setCity: function (val) {
    	console.log(val);
    	TempStore.memberInfo.agencyInfo.city = val;
    },
    getCity: function (val) {
    	return TempStore.memberInfo.agencyInfo.city;
    },
    setArea_code: function (val) {
    	console.log(val);
    	TempStore.memberInfo.agencyInfo.areaCode = val;
    },
    getArea_code: function (val) {
    	return TempStore.memberInfo.agencyInfo.areaCode;
    },
    setCompanyChain: function (val) {
    	console.log(val);
    	TempStore.memberInfo.agencyInfo.companyChain = val;
    },
    getCompanyChain: function (val) {
    	return TempStore.memberInfo.agencyInfo.companyChain;
    },
    setCompany_name: function (val) {
        console.log(val);
        TempStore.memberInfo.agencyInfo.companyName = val;
    },
    getCompany_name: function (val) {
        return TempStore.memberInfo.agencyInfo.companyName;
    },
    setAddress: function (val) {
    	console.log(val);
    	TempStore.memberInfo.agencyInfoaddress.address = val;
    },
    getAddress: function (val) {
    	return TempStore.memberInfo.agencyInfo.address;
    },
    setPhone_daytime: function (val) {
    	console.log(val);
    	TempStore.memberInfo.memberInfo.phoneDaytime = val;
    },
    getPhone_daytime: function (val) {
    	return TempStore.memberInfo.memberInfo.phoneDaytime;
    },
    setPhone_home: function (val) {
    	console.log(val);
    	TempStore.memberInfo.phoneHome = val;
    },
    getPhone_home: function (val) {
    	return TempStore.memberInfo.phoneHome;
    },
    setPhone_cellular: function (val) {
    	console.log(val);
    	TempStore.memberInfo.memberInfo.phoneCellular = val;
    },
    getPhone_cellular: function (val) {
    	return TempStore.memberInfo.memberInfo.phoneCellular;
    },
    setFax: function (val) {
    	console.log(val);
    	TempStore.memberInfo.fax = val;
    },
    getFax: function (val) {
    	return TempStore.memberInfo.fax;
    },
    setBirthdate: function (val) {
    	console.log(val);
    	TempStore.memberInfo.birthdate = val;
    },
    getBirthdate: function (val) {
    	return TempStore.memberInfo.birthdate;
    },
    setSex: function (val) {
    	console.log(val);
    	TempStore.memberInfo.sex = val;
    },
    getSex: function (val) {
    	return TempStore.memberInfo.sex;
    },
    setCivil_status: function (val) {
    	console.log(val);
    	TempStore.memberInfo.civilStatus = val;
    },
    getCivil_status: function (val) {
    	return TempStore.memberInfo.civilStatus;
    },
    setOccupation: function (val) {
    	console.log(val);
    	TempStore.memberInfo.occupation = val;
    },
    getOccupation: function (val) {
    	return TempStore.memberInfo.occupation;
    },
    setTraveller_type: function (val) {
    	console.log(val);
    	TempStore.memberInfo.travellerType = val;
    },
    getTraveller_type: function (val) {
    	return TempStore.memberInfo.travellerType;
    },
    setPersonal_description: function (val) {
    	console.log(val);
    	TempStore.memberInfo.personalDescription = val;
    },
    getPersonal_description: function (val) {
    	return TempStore.memberInfo.personalDescription;
    },
    setShow_acceptance: function (val) {
    	console.log(val);
    	TempStore.memberInfo.showAcceptance = val;
    },
    getShow_acceptance: function (val) {
    	return TempStore.memberInfo.showAcceptance;
    },
    setLast_visit: function (val) {
    	console.log(val);
    	TempStore.memberInfo.lastVisit = val;
    },
    getLast_visit: function (val) {
    	return TempStore.memberInfo.lastVisit;
    },
    setBelongs_to_site: function (val) {
    	console.log(val);
    	TempStore.memberInfo.belongsToSite = val;
    },
    getBelongs_to_site: function (val) {
    	return TempStore.memberInfo.belongsToSite;
    },
    setUnregdate: function (val) {
    	console.log(val);
    	TempStore.memberInfo.unregdate = val;
    },
    getUnregdate: function (val) {
    	return TempStore.memberInfo.unregdate;
    },
    setVip: function (val) {
    	console.log(val);
    	TempStore.memberInfo.vip = val;
    },
    getVip: function (val) {
    	return TempStore.memberInfo.vip;
    },
    setStatus: function (val) {
    	console.log(val);
    	TempStore.memberInfo.status = val;
    },
    getStatus: function (val) {
    	return TempStore.memberInfo.status;
    },
    setRegdate: function (val) {
    	console.log(val);
    	TempStore.memberInfo.regdate = val;
    },
    getRegdate: function (val) {
    	return TempStore.memberInfo.regdate;
    },
    setWant_email: function (val) {
    	console.log(val);
    	TempStore.memberInfo.wantEmail = val;
    },
    getWant_email: function (val) {
    	return TempStore.memberInfo.wantEmail;
    },
    setSession_code: function (val) {
    	console.log(val);
    	TempStore.memberInfo.sessionCode = val;
    },
    getSession_code: function (val) {
    	return TempStore.memberInfo.sessionCode;
    },
    setUpdated: function (val) {
    	console.log(val);
    	TempStore.memberInfo.updated = val;
    },
    getUpdated: function (val) {
    	return TempStore.memberInfo.updated;
    },
    setLast_news_email: function (val) {
    	console.log(val);
    	TempStore.memberInfo.lastNewsEmail = val;
    },
    getLast_news_email: function (val) {
    	return TempStore.memberInfo.lastNewsEmail;
    },
    setLast_news_email_info: function (val) {
    	console.log(val);
    	TempStore.memberInfo.lastNewsEmailInfo = val;
    },
    getLast_news_email_info: function (val) {
    	return TempStore.memberInfo.lastNewsEmailInfo;
    },
    setOrigin: function (val) {
    	console.log(val);
    	TempStore.memberInfo.origin = val;
    },
    getOrigin: function (val) {
    	return TempStore.memberInfo.origin;
    },
    setTypedVal: function(val){
    	console.log(val);
    	TempStore.typed = val;
    },
    getTypedVal: function () {
    	return TempStore.typed;
    },
    resetMemberInfo: function() {
        this.memberInfo.id                          = "";
        this.memberInfo.password                    = "";
        this.memberInfo.encryptedPassword           = "";
        this.memberInfo.memberInfo.firstName        = "";
        this.memberInfo.memberInfo.lastName         = "";
        this.memberInfo.memberInfo.email            = "";
        this.memberInfo.memberInfo.login            = "";
        this.memberInfo.memberInfo.phoneDaytime     = "";
        this.memberInfo.memberInfo.phoneCellular    = "";
        this.memberInfo.agencyInfo.companyChain     = "";
        this.memberInfo.agencyInfo.country          = "";
        this.memberInfo.agencyInfo.city             = "";
        this.memberInfo.agencyInfo.areaCode         = "";
        this.memberInfo.agencyInfo.companyName      = "";
        this.memberInfo.agencyInfo.address          = "";
        this.memberInfo.phoneHome                   = "";
        this.memberInfo.fax                         = "";
        this.memberInfo.birthdate                   = "";
        this.memberInfo.sex                         = "";
        this.memberInfo.personalDescription         = "";
        this.memberInfo.civilStatus                 = "";
        this.memberInfo.occupation                  = "";
        this.memberInfo.travellerType               = "";
        this.memberInfo.showAcceptance              = "";
        this.memberInfo.lastVisit                   = "";
        this.memberInfo.belongsToSite               = "";
        this.memberInfo.unregdate                   = "";
        this.memberInfo.vip                         = "";
        this.memberInfo.status                      = "";
        this.memberInfo.regdate                     = "";
        this.memberInfo.wantEmail                   = "";
        this.memberInfo.sessionCode                 = "";
        this.memberInfo.updated                     = "";
        this.memberInfo.lastNewsEmail               = "";
        this.memberInfo.lastNewsEmailInfo           = "";
        this.memberInfo.origin                      = "";
        console.log('reset');
        
    },
    /*setMemberInfo: function(obj) {
    	this.member_id 				= obj.member_id;
        this.password 				= obj.password;
        this.encrypted_password 	= obj.encrypted_password;
        this.first_name 			= obj.first_name;
        this.last_name 				= obj.last_name;
        this.email 					= obj.email;
        this.company_chain 			= obj.company_chain;
        this.country 				= obj.country;
        this.city 					= obj.city;
        this.area_code 				= obj.area_code;
        this.company_name 			= obj.company_name;
        this.address				= obj.address;
        this.phone_daytime 			= obj.phone_daytime;
        this.phone_home 			= obj.phone_home;
        this.phone_cellular 		= obj.phone_cellular;
        this.fax 					= obj.fax;
        this.birthdate 				= obj.birthdate;
        this.sex 					= obj.sex;
        this.personal_description 	= obj.personal_description;
        this.civil_status 			= obj.civil_status;
        this.occupation 			= obj.occupation;
        this.traveller_type 		= obj.traveller_type;
        this.show_acceptance 		= obj.show_acceptance;
        this.last_visit 			= obj.last_visit;
        this.belongs_to_site 		= obj.belongs_to_site;
        this.unregdate 				= obj.unregdate;
        this.vip 					= obj.vip;
        this.status 				= obj.status;
        this.regdate 				= obj.regdate;
        this.want_email 			= obj.want_email;
        this.session_code 			= obj.session_code;
        this.updated 				= obj.updated;
        this.last_news_email 		= obj.last_news_email;
        this.last_news_email_info 	= obj.last_news_email_info;
        this.origin 				= obj.origin;
    },*/
    setMemberInfoDisplayed: function(val) {
    	this.memberInfoDisplayed = val;
    },
    getMemberInfoDisplayed: function() {
    	console.log('this.memberInfoDisplayed');
    	return this.memberInfoDisplayed;
    },
    setNrOfMemberfieldRows: function(val) {
    	console.log(val);
    	this.nrOfMemberfieldRows = val;
    },
    getNrOfMemberfieldRows: function() {
    	return this.nrOfMemberfieldRows;
    }
 
}
TempStore.init();