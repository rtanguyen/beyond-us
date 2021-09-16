import React, { useState } from 'react';
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	useQuery,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//middleware function to retrieve token
import { setContext } from '@apollo/client/link/context';

import { QUERY_POSTS_BASIC } from './utils/queries';

import './App.css';
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Login from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import PostForm from './pages/PostForm';
import Singlepost from './pages/Singlepost';
import Footer from './components/Footer';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	//every request retrieves the token and sets the request headers before making the request to the API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	// const [filter, setFilter] = useState();

	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/home" component={Dashboard} />
						{/* <Route exact path="/home">
							<Dashboard>
								filter={filter}
								setFilter={setFilter}
							</Dashboard>
						</Route> */}

						<Route exact path="/add" component={PostForm} />
						<Route exact path="/post/:id" component={Singlepost} />
					</Switch>
				</div>
				<Footer />
			</Router>

			{/* <Nav
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></Nav> */}
		</ApolloProvider>
	);
}

export default App;
