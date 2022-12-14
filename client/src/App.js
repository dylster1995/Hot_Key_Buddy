import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Login from './components/Login';
import Tabs from './components/Tabs';
import Home from './components/Home';
import Keyboard from './components/Keyboard';
import Footer from './components/Footer';
import Signup from './components/Signup';
import User from './components/User';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';


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
  uri: '/graphql',
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Tabs />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/keyboard" element={<Keyboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user-settings" element={<User />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
