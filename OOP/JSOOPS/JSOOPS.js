/*
 * Shape class & constructor
 * 
 */
Shape.prototype.GetArea = function (){
	return this.area; 
};
Shape.prototype.GetParameter = function (){
	return this.parameter;
};
Shape.prototype.Draw = function (){
	alert( "Drawing generic shape" );
};
function Shape(){

}


Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;
Circle.prototype.baseClass = Shape.prototype.constructor;
Circle.prototype.Draw = function(){
	alert( "Drawing circle" );
}; 

/*
 * Circle class & constructor
 * 
 */

function Circle( r )

{
	this.area = Math.PI * r * r;
	this.parameter = 2 * Math.PI * r;
}

Rectangle.prototype = new Shape();
Rectangle.prototype.constructor = Rectangle;

/*
 * Rectangle class & constructor
 * 
 */

function Rectangle( x, y )

{
	this.area = x * y;
	this.parameter = 2 * x + 2 * y;
}

Rectangle.prototype = new Shape();
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.baseClass = Shape.prototype.constructor;
Rectangle.prototype.Draw = function(){
	alert( "Drawing rectangle" );
};

function Rectangle( x, y )

{
	this.area = x * y; 
	this.parameter = 2 * x + 2 * y; 
}



var circle = new Circle( 10 );
var rectangle = new Rectangle( 10, 20 );

alert( "Circle base class = " + circle.baseClass );
alert( "Circle area = " + circle.GetArea() );
alert( "Circle parameter = " + circle.GetParameter() );
circle.Draw();

alert( "Rectangle base class = " + rectangle.baseClass );
alert( "Rectangle area = " + rectangle.GetArea() );
alert( " Rectangle parameter = " + rectangle.GetParameter() );
rectangle.Draw();