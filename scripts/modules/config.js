require.config({
	deps:['main'],
    baseUrl: "scripts/modules/",
    paths : {
        "use": "../tools/use",
        "communicator": "communicator",
        "display": "display",
        "myeventhandler": "myeventhandler",
        "functionality": "functionality",
        "global": "global",
        "listners": "listners",
        "main": "main",
        "tempstore": "tempstore",  
       /* "validation": "validation",*/
        "jsoncsv": "jsoncsv",
        "informationbox": "informationbox",
        "jqueryui": "../tools/jquery-ui-1.10.4.custom.min",
        "jquery": "../tools/jquery-2.1.0.min",
        "node-status-bar": "node-status-bar"
    },
    // Could work with shim as well
    /*use: {
        jqueryui: {
            deps:['jquery'],
            attach: 'jUi'
        }
    },*/
    shim: {
        'jquery': {
            exports: '$'
        },
        'jqueryui': {
            deps: ['jquery']
        }
    },
    // Remove when going live
    urlArgs: "bust=" +  (new Date()).getTime()
});

