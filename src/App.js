import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './Pages';
import * as ROUTES from './Constants/routes';
import { useAuthListener } from './hooks/index';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';

function App() {
  const {user} = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}  >
            <Home/>
          </IsUserRedirect>
        }exact/>
        <Route path={ROUTES.SIGN_UP} element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}  >
            <Signup/>
          </IsUserRedirect>
        }exact/>
        <Route path={ROUTES.SIGN_IN} element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}  >
            <Signin/>
          </IsUserRedirect>
        }exact/>
        <Route path={ROUTES.BROWSE} element={
          <ProtectedRoute user={user} Path={ROUTES.BROWSE} >
            <Browse/>
          </ProtectedRoute>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
