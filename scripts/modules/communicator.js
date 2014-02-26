define(['jquery', 'functionality'], function ($, Functionality) {

console.log('Start in function communicator.js'); 
console.log($);
console.log(Functionality);

console.log('End in function communicator.js');

 return {

        getJSONObj: function (obj) {
           // var jsonData = $.getJSON(obj.url);

            var jsonData =  $.ajax({
                    type: 'GET',
                url: obj.url,
                dataType: 'json',
                data: {},
                xhr: function() {
                    if(window.ActiveXObject){
                        return new window.ActiveXObject("Microsoft.XMLHTTP");
                    } else{
                        
                        var xhr = new window.XMLHttpRequest();
                        
                        //Upload progress
                        xhr.upload.addEventListener("progress", function(evt){
                               if (evt.lengthComputable) {
                                 var percentComplete = evt.loaded / evt.total;
                                 //Do something with upload progress
                                console.log(percentComplete);
                            }
                        }, false);
                         //Download progress
                        xhr.addEventListener("progress", function(evt){
                           console.log('EVENT START XMLHttpRequestProgressEvent');
                           console.log(evt);
                           console.log('EVENT END XMLHttpRequestProgressEvent');

                           if (evt.lengthComputable) {
                            var percentComplete = evt.loaded / evt.total;
                             //Do something with download progress
                            console.log(percentComplete);
                           }
                         }, false);
                        return xhr;
                    }
                }
            });


            jsonData.done(function (data) {
            	console.log('GO IN TO require')
            	require(['functionality'], function (Functionality) {
            		console.log('IN require');
                   Functionality.commonSearchFunction(data, obj);
                });
            }).fail(function (jqXHR, textStatus, errorThrown) {
                $('.errorText').text('Metod getJSON request failed!');
                $('.errorjqXHR').text(jqXHR.status);
                $('.errorTextStatus').text(textStatus);
                $('.errorErrorThrown').text(errorThrown);
                $('progress').hide();
                $('.searchContainer').show();
                $('.info').hide();
                $('.error').show();
                alert('Metod postJSON request failed!' +'errorjqXHR' +jqXHR.status +'errorTextStatus' +textStatus +'errorErrorThrown' +errorThrown);   
            });
        },
        postJSONObj: function (obj) {
        	console.log($.isPlainObject(obj.datas));
        	
        	var jsonData = $.ajax({
			  url: obj.url,
			  type: 'POST',
			  //When sending data to the server
              contentType: 'application/json',
              //The type of data that you're expecting back from the server.
              dataType: 'text',
              data: obj.datas
			});
        	
            jsonData.done(function (data) {
            	require(['functionality'], function (Functionality) {
            		console.log('IN require');
                  Functionality.commonPostFunction(data, obj);
                });
            }).fail(function (jqXHR, textStatus, errorThrown) {
            	console.log(obj);
                if(jqXHR.status === '200'){
                    alert(jqXHR.status +'jqXHR status');
                    //alert('success');
                    require(['functionality'], function (Functionality) {
                        console.log('IN require');
                         Functionality.commonPutFunction(data, obj);
                    });
                    
                } else{
                    $('.errorText').text('Metod getJSON request failed!');
                    $('.errorjqXHR').text(jqXHR.status);
                    $('.errorTextStatus').text(textStatus);
                    $('.errorErrorThrown').text(errorThrown);
                    //$('progress').hide();
                    $('.searchContainer').show();
                    $('.info').hide();
                    $('.error').show();
                    alert('Metod postJSON request failed!' +'errorjqXHR' +jqXHR.status +'errorTextStatus' +textStatus +'errorErrorThrown' +errorThrown);    
                }
            });
        },
        putJSONObj: function (obj) {
        	console.log($.isPlainObject(obj.datas));
        	
        	var jsonData = $.ajax({
			  url: obj.url,
			  type: 'PUT',
              //When sending data to the server
			  contentType: 'application/json',
              //The type of data that you're expecting back from the server.
              dataType: 'text',
              data: obj.datas
			});
        	
            jsonData.done(function (data) {
            	//alert('Sent success');
            	require(['functionality'], function (Functionality) {
            		console.log('IN require');
                  Functionality.commonPutFunction(data, obj);
                });
            }).fail(function (jqXHR, textStatus, errorThrown) {
            	console.log(obj);
            	if(jqXHR.status === '200'){
                    alert(jqXHR.status +'jqXHR status');
            		//alert('success');
                    require(['functionality'], function (Functionality) {
                        console.log('IN require');
                        Functionality.commonPutFunction(data, obj);
                    });
            	} else{
                    $('.errorText').text('Metod getJSON request failed!');
                    $('.errorjqXHR').text(jqXHR.status);
                    $('.errorTextStatus').text(textStatus);
                    $('.errorErrorThrown').text(errorThrown);
                    //$('progress').hide();
                    $('.searchContainer').show();
                    $('.info').hide();
                    $('.error').show();
            		alert('Metod postJSON request failed!' +'errorjqXHR' +jqXHR.status +'errorTextStatus' +textStatus +'errorErrorThrown' +errorThrown);	
            	}
                
            });
        }
		
		
	};
});