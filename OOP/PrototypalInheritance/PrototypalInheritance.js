/*
 * simple try for constructor & inhertance by function
 */

/*
 * class animal
 */

var animal = {
	eats: true
}

/**
 * class & constructer Rabbit
 * @param {var} name name of the rabbit
 */

function Rabbit(name) { 
  this.name = name
}


/**
 * A function used to extend one class with another
 * 
 * @param {Object} subClass The inheriting class, or subclass
 * @param {Object} baseClass The class from which to inherit
 */
ExtendsBase  = function(subClass, baseClass) {
	function inheritance() {}
	inheritance.prototype = baseClass.prototype
	subClass.prototype = new inheritance();
	subClass.prototype.constructor = subClass;
	subClass.baseConstructor = baseClass;
	subClass.superClass = baseClass.prototype;
}

ExtendsBase(Rabbit,animal);
var rabbit = new Rabbit('asd');
alert(rabbit.constructor);
alert( rabbit.constructor == Rabbit );
//alert( rabbit.eats ) // true, because rabbit.__proto__ == animal

