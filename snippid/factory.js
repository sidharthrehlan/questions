var dom = (function(){

	function createInput(type){
		var el = document.createElement('input');
		el.type = type;
		return el;
	}

var controls = {
	text : function(options){
		var el = createInput('text');
		if(typeof options.value !=='undefined'){
			el.value = options.value;
		}
		return el;
	},
	checkbox : function(){
		var el = createInput('checkbox');
		if(typeof options.checkbox !=='undefined'){
			el.checkbox = options.checkbox;
		}

		return el;
	}
};

return{
	create:function(options){
		var type = options.type?options.type.toLowerCase():undefined;

		if(!type || !controls[type]){
			throw new {
				message:type+'is not supported.'
			};
		}
		return controls[type](options);
	}

}

}());
