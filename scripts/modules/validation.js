define(['jquery'], function ($) {
return {
	phoneNumber: function (elementId, elmenteValue) {
		
		var $this = $('#popup'+' '+'#'+elementId);
		console.log($this);
		
		var temp = new String(elmenteValue);
		console.log(temp);
		
		
		
		
		var tempRegExp = temp.match(/^[\d\s\+-]+$/);
			console.log(tempRegExp);
		
		if (!tempRegExp) {
			if (!$this.hasClass('invalid')) {
				$this.addClass('invalid');					 
			} 

			if ($this.hasClass('valid')) {
				 $this.removeClass('valid');
				 
			}
			
			
		}

		else {
			if (!$this.hasClass('valid')) {
				$this.addClass('valid');					 
			} 

			if ($this.hasClass('invalid')) {
				 $this.removeClass('invalid');
				 
			}
			
		}
		/*if (getPhone_daytime){

		} || getPhone_home || getPhone_cellular || getFax) {};*/

		

	}

};
});