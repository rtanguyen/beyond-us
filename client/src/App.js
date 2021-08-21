import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//middleware function to retrieve token
import { setContext } from "@apollo/client/link/context";

import "./App.css";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Login from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  //every request retrieves the token and sets the request headers before making the request to the API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [pages] = useState([
  //   { name: "Our Mission" },
  //   { name: "How to Help" },
  //   { name: "Join the Cause" },
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Dashboard} />
          </Switch>
        </div>
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
