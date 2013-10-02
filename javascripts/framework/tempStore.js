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
    	TempStore.member_id = val;
    },
    getMember_id: function (val) {
    	return TempStore.member_id;
    },
    setPassword: function (val) {
    	console.log(val);
    	TempStore.password = val;
    },
    getPassword: function (val) {
    	return TempStore.password;
    },
    setEncrypted_password: function (val) {
    	console.log(val);
    	TempStore.encrypted_password = val;
    },
    getEncrypted_password: function (val) {
    	return TempStore.encrypted_password;
    },
    setFirst_name: function (val) {
    	console.log(val);
    	TempStore.first_name = val;
    },
    getFirst_name: function (val) {
    	return TempStore.first_name;
    },
    setLast_name: function (val) {
    	console.log(val);
    	TempStore.last_name = val;
    },
    getLast_name: function (val) {
    	return TempStore.last_name;
    },
    setEmail: function (val) {
    	console.log(val);
    	TempStore.email = val;
    },
    getEmail: function (val) {
    	return TempStore.email;
    },
    setCountry: function (val) {
    	console.log(val);
    	TempStore.country = val;
    },
    getCountry: function (val) {
    	return TempStore.country;
    },
    setCity: function (val) {
    	console.log(val);
    	TempStore.city = val;
    },
    getCity: function (val) {
    	return TempStore.city;
    },
    setArea_code: function (val) {
    	console.log(val);
    	TempStore.area_code = val;
    },
    getArea_code: function (val) {
    	return TempStore.area_code;
    },
    setCompany_name: function (val) {
    	console.log(val);
    	TempStore.company_name = val;
    },
    getCompany_name: function (val) {
    	return TempStore.company_name;
    },
    setAddress: function (val) {
    	console.log(val);
    	TempStore.address = val;
    },
    getAddress: function (val) {
    	return TempStore.address;
    },
    setPhone_daytime: function (val) {
    	console.log(val);
    	TempStore.phone_daytime = val;
    },
    getPhone_daytime: function (val) {
    	return TempStore.phone_daytime;
    },
    setPhone_home: function (val) {
    	console.log(val);
    	TempStore.phone_home = val;
    },
    getPhone_home: function (val) {
    	return TempStore.phone_home;
    },
    setPhone_cellular: function (val) {
    	console.log(val);
    	TempStore.phone_cellular = val;
    },
    getPhone_cellular: function (val) {
    	return TempStore.phone_cellular;
    },
    setFax: function (val) {
    	console.log(val);
    	TempStore.fax = val;
    },
    getFax: function (val) {
    	return TempStore.fax;
    },
    setBirthdate: function (val) {
    	console.log(val);
    	TempStore.birthdate = val;
    },
    getBirthdate: function (val) {
    	return TempStore.birthdate;
    },
    setSex: function (val) {
    	console.log(val);
    	TempStore.sex = val;
    },
    getSex: function (val) {
    	return TempStore.sex;
    },
    setCivil_status: function (val) {
    	console.log(val);
    	TempStore.civil_status = val;
    },
    getCivil_status: function (val) {
    	return TempStore.civil_status;
    },
    setOccupation: function (val) {
    	console.log(val);
    	TempStore.occupation = val;
    },
    getOccupation: function (val) {
    	return TempStore.occupation;
    },
    setTraveller_type: function (val) {
    	console.log(val);
    	TempStore.traveller_type = val;
    },
    getTraveller_type: function (val) {
    	return TempStore.traveller_type;
    },
    setPersonal_description: function (val) {
    	console.log(val);
    	TempStore.personal_description = val;
    },
    getPersonal_description: function (val) {
    	return TempStore.personal_description;
    },
    setShow_acceptance: function (val) {
    	console.log(val);
    	TempStore.show_acceptance = val;
    },
    getShow_acceptance: function (val) {
    	return TempStore.show_acceptance;
    },
    setLast_visit: function (val) {
    	console.log(val);
    	TempStore.last_visit = val;
    },
    getLast_visit: function (val) {
    	return TempStore.last_visit;
    },
    setBelongs_to_site: function (val) {
    	console.log(val);
    	TempStore.belongs_to_site = val;
    },
    getBelongs_to_site: function (val) {
    	return TempStore.belongs_to_site;
    },
    setUnregdate: function (val) {
    	console.log(val);
    	TempStore.unregdate = val;
    },
    getUnregdate: function (val) {
    	return TempStore.unregdate;
    },
    setVip: function (val) {
    	console.log(val);
    	TempStore.vip = val;
    },
    getVip: function (val) {
    	return TempStore.vip;
    },
    setStatus: function (val) {
    	console.log(val);
    	TempStore.status = val;
    },
    getStatus: function (val) {
    	return TempStore.status;
    },
    setRegdate: function (val) {
    	console.log(val);
    	TempStore.regdate = val;
    },
    getRegdate: function (val) {
    	return TempStore.regdate;
    },
    setWant_email: function (val) {
    	console.log(val);
    	TempStore.want_email = val;
    },
    getWant_email: function (val) {
    	return TempStore.want_email;
    },
    setSession_code: function (val) {
    	console.log(val);
    	TempStore.session_code = val;
    },
    getSession_code: function (val) {
    	return TempStore.session_code;
    },
    setUpdated: function (val) {
    	console.log(val);
    	TempStore.updated = val;
    },
    getUpdated: function (val) {
    	return TempStore.updated;
    },
    setLast_news_email: function (val) {
    	console.log(val);
    	TempStore.last_news_email = val;
    },
    getLast_news_email: function (val) {
    	return TempStore.last_news_email;
    },
    setLast_news_email_info: function (val) {
    	console.log(val);
    	TempStore.last_news_email_info = val;
    },
    getLast_news_email_info: function (val) {
    	return TempStore.last_news_email_info;
    },
    setOrigin: function (val) {
    	console.log(val);
    	TempStore.origin = val;
    },
    getOrigin: function (val) {
    	return TempStore.origin;
    },
    setTypedVal: function(val){
    	console.log(val);
    	TempStore.typed = val;
    },
    getTypedVal: function () {
    	return TempStore.typed;
    },
    setMemberInfo: function(obj) {
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
    },
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