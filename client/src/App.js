import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './components/Login';
import Tabs from './components/Tabs';
import Home from './components/Home';
import Keyboard from './components/Keyboard';



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <Tabs />
          <Routes>
            <Route 
              path="/" 
              element={<Login/>}
            />
             <Route 
              path="/home" 
              element={<Home/>}
            />
            <Route 
              path="/keyboard" 
              element={<Keyboard/>}
            />
            
          </Routes>
          </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
