import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

// interface AppProps {
// 	color: string;
// }

// // const App = (props: AppProps): JSX.Element => {
// // 	return <div>{props.color}</div>;
// // };

// class App extends Component<AppProps> {
// 	state = { counter: 0 };

// 	onIncrement = (): void => {
// 		this.setState({ counter: this.state.counter + 1 });
// 	};
// 	onDecrement = (): void => {
// 		this.setState({ counter: this.state.counter - 1 });
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.onIncrement}>Increment</button>
// 				<button onClick={this.onDecrement}>Decrement</button>
// 				<div>{this.state.counter}</div>
// 			</div>
// 		);
// 	}
// }

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
