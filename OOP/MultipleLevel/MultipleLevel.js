//separate files

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
	childClass.baseConstructor = parentClass; //@TODO Remove this
	childClass.superClass = parentClass.prototype;
}
/*
 * Person class & Person constructor
 * 
 * @param {String} first The person's first name
 * @param {String} last The person's last name
 */
function Person(first, last) {
	this.first = first;
	this.last = last;
}

/**
 * Create a string representation of this object
 * 
 * @return {String} A string representation of this object
 */
Person.prototype.toString = function() {
	return this.first + " " + this.last;
};

/*
 * Employee class & Employee constructor
 * 
 * @param {String} first The employee's first name
 * @param {String} last The employee's last name
 * @param {Number} id The employee's number
 */
function Employee(first, last, id) {
	// call baseclsas constructor for further process.
	Employee.baseConstructor.call(this, first, last);
	this.id = id;
}

MultiInheritDemo.extend(Employee, Person);

/**
 * Create a string representation of this object
 * 
 * @return {String} A string representation of this object
 */
Employee.prototype.toString = function() {
	return Employee.superClass.toString.call(this) + ": " + this.id;
};

/*
 * Manager class & Manager constructor
 * 
 * @param {String} first The manager's first name
 * @param {String} last	The manager's last name
 * @param {Number} id The manager's employee number
 * @param {String} department This manager's department
 */
function Manager(first, last, id, department) {
	Manager.baseConstructor.call(this, first, last, id);
	this.department = department;
}

MultiInheritDemo.extend(Manager, Employee);

/**
 * Create a string representation of this object
 * 
 * @return {String} A string representation of this object
 */
Manager.prototype.toString = function() {
	return Manager.superClass.toString.call(this) + ": " + this.department;
};


var personObj = new Person('bhavin','bathani');
var employeeObj = new Employee('bhavin','bathani','09MCM13');
var managerObj = new Manager('bhavin','bathani','09MCM13','ZARAFA');

alert(personObj.toString());
alert(employeeObj.toString());
alert(managerObj.toString());
