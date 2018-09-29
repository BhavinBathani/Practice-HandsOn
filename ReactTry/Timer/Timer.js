class Timer extends React.Component {
	constructor(props){
		super(props);
		this.state = {seconds : 0};
	}

	tick() {
		this.setState(prevState => ({seconds : prevState.seconds + 1}));
	}

	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div>Seconds : {this.state.seconds}</div>
		);
	}
}

ReactDOM.render(<Timer />, document.getElementById('root'));