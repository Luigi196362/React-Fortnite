import React from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import '../styles/App.css'
const App = () => {
  return (
    <div >
      <Header />
      <div class='body-posts'>
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />

          <Route path="/login" 
            element={<Login/>} />

        </Routes>
      </div>
    </div>
  );
};

export default App;