function Person(firstname,lastname){
	this.firstname = firstname;
	this.lastname = lastname;
	//this.sayname = function(){
	//	console.log('hello, '+this.firstname+' '+this.lastname);
	//}
}


Person.prototype.sayname = function(){
	console.log('hello, '+this.firstname+' '+this.lastname);
	
}

sidharthrehlan = new Person('sidharth','rehlan');
karansharma = new Person('karan','sharma');

var isSame = sidharthrehlan.sayname === karansharma.sayname;


// Error, fn is called before the function is assigned!
//fn();
//var fn = function () { alert("test!"); } 

// Works as expected: the fn2 declaration is hoisted above the call
//fn2();
//function fn2() { alert("test!"); }