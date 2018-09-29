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