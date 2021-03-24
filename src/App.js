
import React from 'react';
import TopMenu from './components/TopMenu';
import Puzzle from './components/Puzzle';
import SearchPage from './pages/Search';
import HomePage from './pages/Home';
import UploadPage from './pages/Upload';
import './App.css';

import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <TopMenu />
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/search">
                <SearchPage />
            </Route>
            <Route path="/upload">
                <UploadPage />
            </Route>
        </Router>

  );
}

export default App;
