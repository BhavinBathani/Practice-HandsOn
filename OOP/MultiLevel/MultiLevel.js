/**
 * NameSpace
 */
MultiInheritDemo = {};

/**
 * A function used to extend one class with another
 * 
 * @param {Object} subClass The inheriting class, or subclass
 * @param {Object} baseClass The class from which to inherit
 */
MultiInheritDemo.extend = function(childClass, parentClass) {
	function inheritance() {}
	inheritance.prototype = parentClass.prototype;
	childClass.prototype = new inheritance();
	childClass.prototype.constructor = childClass;
	//childClass.baseConstructor = parentClass; //@TODO Remove this
	childClass.superClass = parentClass.prototype;
}

function afterLoad(){

	MultiInheritDemo.personObj = new Person('bhavin','bathani');
	MultiInheritDemo.employeeObj = new Employee('bhavin','bathani','09MCM13');
	MultiInheritDemo.managerObj = new Manager('bhavin','bathani','09MCM13','ZARAFA');

	alert(MultiInheritDemo.personObj.toString());
	alert(MultiInheritDemo.employeeObj.toString());
	alert(MultiInheritDemo.managerObj.toString());
}
window.onload = afterLoad;