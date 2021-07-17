import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Home from './pages/Home';
import Signup from './pages/Signup';
import Roster from './pages/RosterStatus'
import Breakdowns from './pages/Breakdowns';
import Unassigned from './pages/Unassigned';
import Mainpage from './pages/Mainpage';


import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import BreakdownSubmissions from './pages/BreakdownsSubmissions';
// import NavPreLogin from './components/NavPreLogin';


// import Home from './pages/Home';
// import IssuesPage from './pages/IssuesPage';
// import IssuesSubmissionPage from './pages/IssuesSubmissionPage';
// import MainPage from './pages/MainPage';
// import RosterStatus from './pages/RosterStatus';
// import DriverForm from './components/DriverForm';
// import DriverList from './components/DriverList';



// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  uri: '/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          {/* <Navbar/> */}
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/mainpage">
              <Mainpage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/RosterStatus">
              <Roster />
            </Route>
            <Route exact path="/breakdowns">
              <Breakdowns />
            </Route>
            <Route exact path="/breakdownsubmissions">
              <BreakdownSubmissions />
            </Route>
            <Route exact path="/unassigned">
              <Unassigned />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;