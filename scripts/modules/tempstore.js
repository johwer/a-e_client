
define( function () {
console.log('TempStore');
//return window.TempStore;

return {
    init: function () {
        this.scrollbarWidth = 0;
        this.siteNameBo = 'boxoffice.se';
        this.siteNameUd = 'arteudland.dk';
        this.siteNameTs = 'ticketservice.no';
        this.dropdown = 'bo';
        this.clicked ='';
        this.lastInputClicked = null;
        this.nrOfAgencyfieldRows = 0;
        this.nrOfMemberfieldRows = 0;
        this.nrOfMembersBo = 0;
        this.nrOfMembersTs = 0; 
        this.nrOfMembersUd = 0;
        this.nrOfTotalMembers = 0;
        this.typed = '';
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
        this.csvAllButton = true;
        this.dataId = '';
        this.commissionRateIdArr = [];
        this.commissionRateValueArr = [];
        this.selectedAgencyArr = [];
        this.activetOrDeactive = 'activate';
        this.commissionRate = null;
        this.commissionRateChoosen = 'as_is';
        this.newCompanyChain = null;
        this.newCompanyChainChoosen = 'as_is';
        this.customViewBoolean = true;
        this.toggleViewContentVal = 'option1';
        this.editAgencyButton = false;
        this.agengcySelectedId ='';

        this.agenciesTotalNr = null;
        this.agenciesBoTotalNr = null;
        this.agenciesTsTotalNr = null;
        this.agenciesUdTotalNr = null;
        this.membersTotalNr = null;
        this.membersUdTotalNr = null;
        this.membersUdTotalNr = null;
        this.membersUdTotalNr = null;


       
        


        this.agencyInfo = {};
        this.agencyInfo.address          = null;
        this.agencyInfo.areaCode         = null;
        this.agencyInfo.city             = null;
        this.agencyInfo.commission       = null;
        this.agencyInfo.companyChain     = null;
        this.agencyInfo.companyName      = null;
        this.agencyInfo.id               = null;
        //this.agencyInfo.country          = null;
        

        this.memberInfo = {};
        this.memberInfo.memberInfo = {};
        this.memberInfo.id = null;
        this.memberInfo.agencyId = null;
        this.memberInfo.memberInfo.id               = null;
        this.memberInfo.memberInfo.login            = null;
        this.memberInfo.memberInfo.firstName        = null;
        this.memberInfo.memberInfo.lastName         = null;
        this.memberInfo.memberInfo.email            = null;
        this.memberInfo.memberInfo.phoneDaytime     = null;
        this.memberInfo.memberInfo.phoneCellular    = null;
        this.memberInfo.memberInfo.active           = false;
        this.memberInfo.password = null;
        this.memberInfo.encryptedPassword = null;
        this.memberInfo.vip = null;
        this.memberInfo.status = false;
        this.memberInfo.wantEmail = null;
        this.memberInfo.sessionCode = null;
        this.memberInfo.updated = null;
        this.memberInfo.regdate = null;
        this.memberInfo.unregdate = null;
        this.memberInfo.lastVisit = null;
        this.memberInfo.lastNewsEmail = null;
        this.memberInfo.lastNewsEmailInfo = null;
        this.memberInfo.origin = null;


/* //Old
        this.memberInfo.id                          = null;
        this.memberInfo.password                    = "";
        this.memberInfo.encryptedPassword           = "";
        this.memberInfo.memberInfo.firstName        = "";
        this.memberInfo.memberInfo.lastName         = "";
        this.memberInfo.memberInfo.email            = "";
        this.memberInfo.memberInfo.login            = "";

        this.memberInfo.memberInfo.phoneDaytime     = "";
        this.memberInfo.phoneCellular               = "";
        this.memberInfo.agencyInfo.companyChain     = "";
        this.memberInfo.country                     = "";
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
*/
    },
    setScrollbarWidth: function(val) {
        this.scrollbarWidth = val;
    },
    getScrollbarWidth: function() {
        return this.scrollbarWidth;
    },
    setLastInputCLicked: function(val) {
        console.log(val);
        this.lastInputClicked = val;
    },
    getLastInputCLicked: function() {
        return this.lastInputClicked;
    },
    setAgencyInfoId: function(val) {
        this.agencyInfo.id = val;
    },
    getAgencyInfoId: function() {
        return this.agencyInfo.id;
    },
    setAgencyInfoAddress: function(val) {
        this.agencyInfo.address = val;
    },
    getAgencyInfoAddress: function() {
        return this.agencyInfo.address;
    },
    setAgencyInfoAreaCode: function(val) {
        this.agencyInfo.areaCode = val;
    },
    getAgencyInfoAreaCode: function() {
       return this.agencyInfo.areaCode;
    },
    setAgencyInfoCity: function(val) {
        console.log(val);
        this.agencyInfo.city = val;
    },
    getAgencyInfoCity: function() {
        return this.agencyInfo.city;
    },
    setAgencyInfoCommission: function(val) {
        this.agencyInfo.commission = val;
    },
    getAgencyInfoCommission: function() {
        return this.agencyInfo.commission;
    },
    setAgencyInfoCompanyChain: function(val) {
        this.agencyInfo.companyChain  = val;
    },
    getAgencyInfoCompanyChain: function() {
        return this.agencyInfo.companyChain;
    },
    setAgencyInfoCompanyName: function(val) {
        this.agencyInfo.companyName = val;
    },
    getAgencyInfoCompanyName: function() {
        return this.agencyInfo.companyName;
    },
    // setAgencyInfoCountry: function(val) {
    //     this.agencyInfo.country = val;
    // },
    // getAgencyInfoCountry: function() {
    //     return this.agencyInfo.country;
    // },
    setDataId: function(val) {
        console.log('set val');
        this.dataId = val;
        console.log(this.dataId);
    },
    getDataId: function() {
        console.log('dataId');
        return this.dataId;
    },
    setDownloadCSVButton: function(val) {
        console.log('set val');
        this.csvButton = val;
        console.log(this.csvButton);
    },
    getDownloadCSVButton: function() {
        console.log('csvButton');
        return this.csvButton;
    },
    setDownloadAllCSVButton: function(val) {
        console.log('set val');
        this.csvAllButton = val;
        console.log(this.csvButton);
    },
    getDownloadAllCSVButton: function() {
        console.log('csvButton');
        return this.csvAllButton;
    },
    setCSV: function(val) {
        console.log('set val');
        this.csv = val;
    },
    getCSV: function() {
        console.log('csv');
        return this.csv;
    },
    setDropDownVal: function(val) {
    	console.log('set val');
    	this.dropdown = val;
    	console.log(this.dropdown);
        //return val;
    },
    getDropDownVal: function() {
    	console.log('getDropDownVal' +this.dropdown);
    	return this.dropdown;
    },
    setClickedVal: function(val) {
    	console.log(val);
    	this.clicked = val;
    },
    getClickedVal: function () {
    	return this.clicked;
    },
    setMember_id: function (val) {
    	console.log(val);
    	this.memberInfo.id = val;
    },
    getMember_id: function () {
    	return this.memberInfo.id;
    },
    setPassword: function (val) {
        console.log(this);
        console.log('this');
        console.log(self);
    	console.log(val);
    	this.memberInfo.password = val;
    },
    getPassword: function () {
    	return this.memberInfo.password;
    },
    setEncrypted_password: function (val) {
    	console.log(val);
    	this.memberInfo.encryptedPassword = val;
    },
    getEncrypted_password: function () {
    	return this.memberInfo.encryptedPassword;
    },
    setFirst_name: function (val) {
    	console.log(val);
    	this.memberInfo.memberInfo.firstName = val;
    },
    getFirst_name: function () {
    	return this.memberInfo.memberInfo.firstName;
    },
    setLast_name: function (val) {
    	console.log(val);
        console.log(this);
        console.log('this');
    	this.memberInfo.memberInfo.lastName = val;
    },
    getLast_name: function () {
        return this.memberInfo.memberInfo.lastName;
    },
    setLogin: function (val) {
        console.log(val);
        this.memberInfo.memberInfo.login = val;
    },
    getLogin: function () {
    	return this.memberInfo.memberInfo.login;
    },
    setEmail: function (val) {
    	console.log(val);
    	this.memberInfo.memberInfo.email = val;
    },
    getEmail: function () {
    	return this.memberInfo.memberInfo.email;
    },
    /*setCountry: function (val) {
    	console.log(val);
    	this.memberInfo.agencyInfo.country = val;
    },
    getCountry: function () {
    	return this.memberInfo.agencyInfo.country;
    },*/
    /*setCity: function (val) {
    	console.log(val);
    	this.memberInfo.agencyInfo.city = val;
    },
    getCity: function () {
    	return this.memberInfo.agencyInfo.city;
    },*/
    /*setArea_code: function (val) {
    	console.log(val);
    	this.memberInfo.agencyInfo.areaCode = val;
    },
    getArea_code: function () {
    	return this.memberInfo.agencyInfo.areaCode;
    },*/
    /*setCompanyChain: function (val) {
    	console.log(val);
    	this.memberInfo.agencyInfo.companyChain = val;
    },
    getCompanyChain: function () {
    	return this.memberInfo.agencyInfo.companyChain;
    },
    setCompany_name: function (val) {
        console.log(val);
        this.memberInfo.agencyInfo.companyName = val;
    },
    getCompany_name: function () {
        return this.memberInfo.agencyInfo.companyName;
    },
    setAddress: function (val) {
    	console.log(val);
    	this.memberInfo.agencyInfo.address = val;
    },
    getAddress: function () {
    	return this.memberInfo.agencyInfo.address;
    },*/
    setAgencyId: function (val) {
        console.log(val);
        this.memberInfo.agencyId = val;
    },
    getAgencyId: function (){
        return this.memberInfo.agencyId;
    },
    setPhone_daytime: function (val) {
    	console.log(val);
    	this.memberInfo.memberInfo.phoneDaytime = val;
    },
    getPhone_daytime: function () {
    	return this.memberInfo.memberInfo.phoneDaytime;
    },
    /*setPhone_home: function (val) {
    	console.log(val);
    	this.memberInfo.phoneHome = val;
    },
    getPhone_home: function () {
    	return this.memberInfo.phoneHome;
    },*/
    setPhone_cellular: function (val) {
    	console.log(val);
    	this.memberInfo.memberInfo.phoneCellular = val;
    },
    getPhone_cellular: function () {
    	return this.memberInfo.memberInfo.phoneCellular;
    },
    /*setFax: function (val) {
    	console.log(val);
    	this.memberInfo.fax = val;
    },
    getFax: function () {
    	return this.memberInfo.fax;
    },*/
    /*setBirthdate: function (val) {
    	console.log(val);
    	this.memberInfo.birthdate = val;
    },
    getBirthdate: function () {
    	return this.memberInfo.birthdate;
    },*/
   /* setSex: function (val) {
    	console.log(val);
    	this.memberInfo.sex = val;
    },
    getSex: function () {
    	return this.memberInfo.sex;
    },*/
    /*setCivil_status: function (val) {
    	console.log(val);
    	this.memberInfo.civilStatus = val;
    },
    getCivil_status: function () {
    	return this.memberInfo.civilStatus;
    },*/
    /*setOccupation: function (val) {
    	console.log(val);
    	this.memberInfo.occupation = val;
    },
    getOccupation: function () {
    	return this.memberInfo.occupation;
    },
    setTraveller_type: function (val) {
    	console.log(val);
    	this.memberInfo.travellerType = val;
    },
    getTraveller_type: function () {
    	return this.memberInfo.travellerType;
    },*/
    /*setPersonal_description: function (val) {
    	console.log(val);
    	this.memberInfo.personalDescription = val;
    },
    getPersonal_description: function () {
    	return this.memberInfo.personalDescription;
    },*/
    /*setShow_acceptance: function (val) {
    	console.log(val);
    	this.memberInfo.showAcceptance = val;
    },
    getShow_acceptance: function () {
    	return this.memberInfo.showAcceptance;
    },*/
    setLast_visit: function (val) {
    	console.log(val);
    	this.memberInfo.lastVisit = val;
    },
    getLast_visit: function () {
    	return this.memberInfo.lastVisit;
    },
    setActive: function (val) {
    	console.log(val);
    	this.memberInfo.memberInfo.active = val;
    },
    getActive: function () {
    	return this.memberInfo.memberInfo.active;
    },
    setUnregdate: function (val) {
    	console.log(val);
    	this.memberInfo.unregdate = val;
    },
    getUnregdate: function () {
    	return this.memberInfo.unregdate;
    },
    setVip: function (val) {
    	console.log(val);
    	this.memberInfo.vip = val;
    },
    getVip: function () {
    	return this.memberInfo.vip;
    },
    setStatus: function (val) {
    	console.log(val);
    	this.memberInfo.status = val;
    },
    getStatus: function () {
    	return this.memberInfo.status;
    },
    setRegdate: function (val) {
    	console.log(val);
    	this.memberInfo.regdate = val;
    },
    getRegdate: function () {
    	return this.memberInfo.regdate;
    },
    setWant_email: function (val) {
    	console.log(val);
    	this.memberInfo.wantEmail = val;
    },
    getWant_email: function () {
    	return this.memberInfo.wantEmail;
    },
    setSession_code: function (val) {
    	console.log(val);
    	this.memberInfo.sessionCode = val;
    },
    getSession_code: function () {
    	return this.memberInfo.sessionCode;
    },
    setUpdated: function (val) {
    	console.log(val);
    	this.memberInfo.updated = val;
    },
    getUpdated: function () {
    	return this.memberInfo.updated;
    },
    setLast_news_email: function (val) {
    	console.log(val);
    	this.memberInfo.lastNewsEmail = val;
    },
    getLast_news_email: function () {
    	return this.memberInfo.lastNewsEmail;
    },
    setLast_news_email_info: function (val) {
    	console.log(val);
    	this.memberInfo.lastNewsEmailInfo = val;
    },
    getLast_news_email_info: function () {
    	return this.memberInfo.lastNewsEmailInfo;
    },
    setOrigin: function (val) {
    	console.log(val);
    	this.memberInfo.origin = val;
    },
    getOrigin: function () {
    	return this.memberInfo.origin;
    },
    setTypedVal: function(val){
    	console.log(val);
    	this.typed = val;
    },
    getTypedVal: function () {
    	return this.typed;
    },
    setCommissionRateIdArr: function (val) {
        var convertedVal = val.toString();
        this.commissionRateIdArr.push(convertedVal);
    },
    getCommissionRateIdArr: function () {
        return this.commissionRateIdArr;
    },
    setCommissionRateValueArr: function (val) {
        this.commissionRateValueArr.push(val);
    },
    getCommissionRateValueArr: function () {
        return this.commissionRateValueArr;
    },
    setSelectedAgencyArr: function (val) {
        this.selectedAgencyArr.push(val);
    },
    getSelectedAgencyArr: function () {
        return this.selectedAgencyArr;
    },
    setActivetOrDeactive: function(val) {
        console.log('Now setting active/deactive');
        console.log(val);
        this.activetOrDeactive = val;
    },
    getActivetOrDeactive: function(val) {
        return this.activetOrDeactive;
    },
    setCommissionRate: function (val) {
        console.log(val); 
        this.commissionRate = val;
    },
    getCommissionRate: function () {
        return this.commissionRate;
    },
    setCommissionRateChoosen: function (val) {
        console.log(val); 
        this.commissionRateChoosen = val;
    },
    getCommissionRateChoosen: function () {
        return this.commissionRateChoosen;
    },
    setNewCompanyChain: function (val) { 
        console.log(val);
        this.newCompanyChain = val;
    },
    getNewCompanyChain: function () {
        return this.newCompanyChain;
    },
    setNewCompanyChainChoosen: function (val) { 
        console.log(val);
        this.newCompanyChainChoosen = val;
    },
    getNewCompanyChainChoosen: function () {
        return this.newCompanyChainChoosen;
    },
    setAgengcySelectedId: function (val) { 
        console.log(val);
        this.agengcySelectedId = val;
    },
    getAgengcySelectedId: function () {
        return this.agengcySelectedId;
    },
    resetAgencyInfo: function() {

    },
    setAgencyInfo: function(obj) {
        this.agencyInfo = obj;
    },
    getAgencyInfo: function() {
      return this.agencyInfo;
    },
    resetMemberInfo: function() {
        this.memberInfo.id = null;
        this.memberInfo.agencyId = null;
        this.memberInfo.memberInfo.id               = null;
        this.memberInfo.memberInfo.login            = 'he_';
        this.memberInfo.memberInfo.firstName        = null;
        this.memberInfo.memberInfo.lastName         = null;
        this.memberInfo.memberInfo.email            = null;
        this.memberInfo.memberInfo.phoneDaytime     = null;
        this.memberInfo.memberInfo.phoneCellular    = null;
        this.memberInfo.memberInfo.active           = false;
        this.memberInfo.password = null;
        this.memberInfo.encryptedPassword = null;
        this.memberInfo.vip = 0;
        this.memberInfo.status = '';
        this.memberInfo.wantEmail = null;
        this.memberInfo.sessionCode = null;
        this.memberInfo.updated = null;
        this.memberInfo.regdate = null;
        this.memberInfo.unregdate = null;
        this.memberInfo.lastVisit = null;
        this.memberInfo.lastNewsEmail = null;
        this.memberInfo.lastNewsEmailInfo = null;
        this.memberInfo.origin = null;

        /*this.memberInfo.agencyId                    = "";
        this.memberInfo.id                          = "";
        this.memberInfo.password                    = "";
        this.memberInfo.encryptedPassword           = "";
        this.memberInfo.memberInfo.firstName        = "";
        this.memberInfo.memberInfo.lastName         = "";
        this.memberInfo.memberInfo.email            = "";
        this.memberInfo.memberInfo.login            = "";
        this.memberInfo.memberInfo.phoneDaytime     = "";
        this.memberInfo.memberInfo.phoneCellular    = "";*/
        //this.memberInfo.country                     = "";
        /*this.memberInfo.agencyInfo.city             = "";
        this.memberInfo.agencyInfo.areaCode         = "";
        this.memberInfo.agencyInfo.companyName      = "";
        this.memberInfo.agencyInfo.address          = "";
        this.memberInfo.agencyInfo.companyChain     = "";*/
        //this.memberInfo.phoneHome                   = "";
        //this.memberInfo.fax                         = "";
        //this.memberInfo.birthdate                   = "";
        //this.memberInfo.sex                         = "";
        //this.memberInfo.personalDescription         = "";
        //this.memberInfo.civilStatus                 = "";
        //this.memberInfo.occupation                  = "";
        //this.memberInfo.travellerType               = "";
        //this.memberInfo.showAcceptance              = "";
        /*this.memberInfo.lastVisit                   = "";
        this.memberInfo.activet                     = "";
        this.memberInfo.unregdate                   = "";
        this.memberInfo.vip                         = "";
        this.memberInfo.status                      = "";
        this.memberInfo.regdate                     = "";
        this.memberInfo.wantEmail                   = "";
        this.memberInfo.sessionCode                 = "";
        this.memberInfo.updated                     = "";
        this.memberInfo.lastNewsEmail               = "";
        this.memberInfo.lastNewsEmailInfo           = "";*/
        this.memberInfo.origin                      = "";
        console.log('reset');
        
    },
    setMemberInfoDisplayed: function(val) {
    	this.memberInfoDisplayed = val;
    },
    getMemberInfoDisplayed: function() {
    	console.log('this.memberInfoDisplayed');
    	return this.memberInfoDisplayed;
    },
    setNrOfAgencyfieldRows: function(val) {
    	console.log(val);
        console.log('Set nr of agency field rows');
    	this.nrOfAgencyfieldRows = val;
    },
    getNrOfAgencyfieldRows: function() {
    	return this.nrOfAgencyfieldRows;
    },
    setNrOfMemberfieldRows: function(val) {
        console.log(val);
        this.nrOfMemberfieldRows = val;
    },
    getNrOfMemberfieldRows: function() {
        return this.nrOfMemberfieldRows;
    },
    setNrOfMebersForBo: function(val) {
        console.log(val);
        this.nrOfMembersBo = val;
    },
    getNrOfMebersForBo: function() {
        return this.nrOfMembersBo;
    },
    setNrOfMebersForTs: function(val) {
        console.log(val);
        this.nrOfMembersTs = val;
    },
    getNrOfMebersForTs: function() {
        return this.nrOfMembersTs;
    },
    setNrOfMebersForUd: function(val) {
        console.log(val);
        this.nrOfMembersUd = val;
    },
    getNrOfMebersForUd: function() {
        return this.nrOfMembersUd;
    },
    setTotalNrOfMebers: function(val) {
        console.log(val);
        this.nrOfTotalMembers = val;
    },
    getTotalNrOfMebers: function() {
        return this.nrOfTotalMembers;
    }
};
});
