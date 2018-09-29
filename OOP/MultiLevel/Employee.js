/*
 * Employee class & Employee constructor
 * 
 * @param {String} first The employee's first name
 * @param {String} last The employee's last name
 * @param {Number} id The employee's number
 */
function Employee(first, last, id) {
	// call baseclsas constructor for further process.
	//Employee.baseConstructor.call(this, first, last);
	Employee.superClass.constructor.call(this, first, last);
	this.id = id;

	/**
	 * Create a string representation of this object
	 * 
	 * @return {String} A string representation of this object
	 */
	Employee.prototype.toString = function() {
		return Employee.superClass.toString.call(this) + ": " + this.id;
	};

}

MultiInheritDemo.extend(Employee, Person);