import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
// import Home from './pages/Home';

const Home = React.lazy(() => import('./pages/Home'));
const Profile = React.lazy(() => import('./pages/Profile'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
