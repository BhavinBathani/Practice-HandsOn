/*
 * Manager class & Manager constructor
 * 
 * @param {String} first The manager's first name
 * @param {String} last	The manager's last name
 * @param {Number} id The manager's employee number
 * @param {String} department This manager's department
 */
function Manager(first, last, id, department) {
	// call baseclsas constructor for further process.
	//Manager.baseConstructor.call(this, first, last, id);
	Manager.superClass.constructor.call(this, first, last, id);
	this.department = department;

	/**
	 * Create a string representation of this object
	 * 
	 * @return {String} A string representation of this object
	 */
	Manager.prototype.toString = function() {
		return Manager.superClass.toString.call(this) + ": " + this.department;
	};

}

MultiInheritDemo.extend(Manager, Employee);