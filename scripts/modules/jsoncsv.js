define(['jquery'], function($) {
return {
		CSVMethod: function (objArray) {
	    var array = typeof objArray != 'object' ? $.parseJSON(objArray) : objArray;

	    var str = '';
	    var line = '';

	    // Wrap values in double quotes
	    var in_double_quotes = false;
	    // Include labels in first row
	    var inc_ladels = false;

	    if (in_double_quotes) {
	        var head = array[0];
	        if (inc_ladels) {
	            for (var index in array[0]) {
	                var value = index + "";
	                line += '"' + value.replace(/"/g, '""') + '",';
	            }
	        } else {
	            for (var index in array[0]) {
	                line += index + ',';
	            }
	        }

	        line = line.slice(0, -1);
	        str += line + '\r\n';
	    }

	    for (var i = 0; i < array.length; i++) {
	        var line = '';

	        if (inc_ladels) {
	            for (var index in array[i]) {
	                var value = array[i][index] + "";
	                line += '"' + value.replace(/"/g, '""') + '",';
	            }
	        } else {
	            for (var index in array[i]) {
	                line += array[i][index] + ',';
	            }
	        }

	        line = line.slice(0, -1);
	        str += line + '\r\n';
	    }
	    return str;
	 }
};
});

