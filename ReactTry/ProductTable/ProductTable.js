class ProductHeader extends React.Component {
	render() {
		return (
			<th>
				<td>{this.props.category}</td>
				<td>{this.props.price}</td>
			</th>
		);
	}
}

class ProductRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
			</tr>
		);
	}
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const enteredText = this.props.enteredText;
		const onlyStocked = this.props.onlyStocked;

		return (
			<form>
				<input
					type = 'text'
					placeholder = 'Search...'
					value = {enteredText}
					onChange = {this.props.onTextChange}
				/>
				<p>
					<input
						type = 'checkbox'
						checked = {onlyStocked}
						onChange = {this.props.onCheckboxChange}
					/>
					Only show products in stock
				</p>
			</form>
		);
	}
}

class ProductTable extends React.Component {

	render() {
		const enteredText = this.props.enteredText;
		const onlyStocked = this.props.onlyStocked;

		let sportRows = [];
		let eleRows = [];

		this.props.products.forEach((product) => {

			if (product.name.indexOf(enteredText) === -1) {
				return;
			}

			if(onlyStocked && !product.stocked) {
				return;
			}

			if (product.category === 'Sporting Goods') {
				sportRows.push(<ProductRow name={product.name} price={product.price}/>);
			} else if (product.category === 'Electronics') {
				eleRows.push(<ProductRow name={product.name} price={product.price}/>);
			}
		});

		return (
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Price</td>
					</tr>
				</thead>
				<tbody>
					<ProductHeader category="Sporting Goods"/>
					{sportRows}
					<ProductHeader category="Electronics"/>
					{eleRows}
				</tbody>
			</table>
		);
	}
}

class MainContainer extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			enteredText : '',
			onlyStocked : false
		}

		this.onTextChange = this.onTextChange.bind(this);
		this.onCheckboxChange = this.onCheckboxChange.bind(this);
	}

	onTextChange(e) {
		this.setState({
			enteredText : e.target.value
		});
	}

	onCheckboxChange(e) {
		this.setState({
			onlyStocked : e.target.checked
		});
	}

	render() {
		return (
			<div>
				<SearchBar
					enteredText = {this.state.enteredText}
					onlyStocked = {this.state.onlyStocked}
					onTextChange = {this.onTextChange}
					onCheckboxChange = {this.onCheckboxChange}
				/>
				<ProductTable
					products = {this.props.products}
					enteredText = {this.state.enteredText}
					onlyStocked = {this.state.onlyStocked}
				/>
			</div>
		);
	}
}

var sampleData = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  
];

ReactDOM.render(<MainContainer products={sampleData}/>, document.getElementById('root'));