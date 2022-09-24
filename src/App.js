import 'symbol-observable';
import './App.css';
import Admin from './View/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import combinedReducers from './Application/Redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache()
});

function App() {
	let store = createStore(
		combinedReducers,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return (
		<div className="App">
			<Provider store={store}>
				<ApolloProvider client={client}>
					<Router>
						<Routes>
							<Route
								path="/*"
								element={
									<Admin
									/>
								}
							/>
						</Routes>
					</Router>
				</ApolloProvider>
			</Provider>
		</div>
	);
}

export default App;
