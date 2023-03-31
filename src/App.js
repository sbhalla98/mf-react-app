import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';


const RemoteLoading = React.lazy(() => import("remote/Loading"));
function App() {
  return (
    <div className="App">
      <header className="App-header">
          React CRA Application
          <Suspense fallback="">
          <RemoteLoading />
          </Suspense>
      </header>
    </div>
  );
}

export default App;
