var myComponent = React.createClass({
	render : funciton(){
		return {
			<h2>Hello world</h2>
		}
	}
});
reactDOM.render(<myComponent>, document.getElementById('content'));