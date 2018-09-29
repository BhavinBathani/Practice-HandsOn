/*
 * simple try for inheritance
 */

/*
 * class animal
 */
var animal = {
	eat: function() {
		alert( "I'm full" )
		this.full = true
	}
}

/*
 * class rabbit
 */
var rabbit = {
	jump: function() { }
}


if (typeof Object.create === 'undefined') {//checking for browser compitible with create or not
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

rabbit = Object.create(animal);
//alert( Object.getPrototypeOf(rabbit) === animal );

rabbit.eat();
animal.bark = function(){
	bark = true;
	alert(bark);
};
rabbit.bark();

if (!Array.prototype.indexOf) { //checking for browser compitible with indexOf or not
	Array.prototype.indexOf = function(obj, start) {
		for (var i = (start || 0), j = this.length; i < j; i++) {
			if (this[i] === obj) { return i; }
		}
		return -1;
	}
}

var some = new Array(1,2,3);
alert(some.indexOf(1));

