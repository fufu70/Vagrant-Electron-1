Electron = (function () {

	var _defined_constants = {
		READ: "read",
		WRITE: "write",
	};

	var _constants = Object.freeze(_defined_constants);

	/**
	 * Goes to read the given pin, and pass the response to the callback 
	 * function given.
	 * 
	 * @param  {Object} params Contains the pin and callback
	 */
	function _readPin(params) {

	    params = params || {};
	    params.pin = params.hasOwnProperty('pin') ? params.pin : 'D6';
	    params.callback = params.hasOwnProperty('callback') ? params.callback : (function() {});

	    $.ajax({
			url: '/api/index.php',
			type: 'GET',
			dataType: 'json',
			data: {
				action: _constants.READ,
				pin: params.pin,
				value: '',
			},
			success: function(data) {
				callback(data);
			},
			error: function(e) {
				console.log(e);
			}
		});
	};

	/**
	 * Goes to write to the pin given and pass the response to the callback 
	 * function given.
	 * 
	 * @param  {Object} params Contains the pin, value, and callback
	 */
	function _writePin(params) {

	    params = params || {};
	    params.pin = params.hasOwnProperty('pin') ? params.pin : 'D6';
	    params.value = params.hasOwnProperty('value') ? params.value : 0;
	    params.callback = params.hasOwnProperty('callback') ? params.callback : (function() {});

	    $.ajax({
			url: '/api/index.php',
			type: 'GET',
			dataType: 'json',
			data: {
				action: _constants.WRITE,
				pin: params.pin,
				value: params.value,
			},
			success: function(data) {
				callback(data);
			},
			error: function(e) {
				console.log(e);
			}
		});

	};

	return {
		readPin: _readPin,
		writePin: _writePin,
	};

})();