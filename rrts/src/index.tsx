import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { log } from 'util';

interface AppProps {
	color: string;
	date?: string;
}

class App extends Component<AppProps> {
	state = {
		counter: 0
	};
	onIncrement = (): void => {
		this.setState({ counter: this.state.counter + 1 });
	};
	onDecrement = (): void => {
		this.setState({ counter: this.state.counter - 1 });
	};
	render() {
		return (
			<div>
				<button onClick={this.onIncrement}>Increment</button>
				<button onClick={this.onDecrement}>Decrement</button>
				<div>{this.state.counter}</div>
			</div>
		);
	}
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
