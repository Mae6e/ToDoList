import { React, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { MainContext } from "./context/main-context";
import Layout from './components/Layout/Layout';
import Board from './containers/Board/Board';
import Account from './containers/Account/Account';

import './App.css';

function App() {

  const mainContext = useContext(MainContext)

  const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  let content = <Account />;
  const user = getCookie("username");

  if (!mainContext.isAuthentication && user !== '') {
    mainContext.onAuthentication(user)
    content = <Routes>
      <Route path="/" element={<Board />} ></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  }
  else if (mainContext.isAuthentication) {
    content = <Routes>
      <Route path="/" element={<Board />} ></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  }

  return (
    <Router>
      <Layout>
        {content}
      </Layout>
    </Router>
  )
}

export default App;
