import React from 'react';
import TopMenu from './components/TopMenu';
import SearchPage from './pages/Search';
import HomePage from './pages/Home';
import UploadPage from './pages/Upload';
import AccountPage from "./pages/Account";
import './App.css';

import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";

function App() {
    return (
        <Router>
            <TopMenu />
            <Switch>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/search">
                    <SearchPage />
                </Route>
                <Route path="/upload">
                    <UploadPage />
                </Route>
                <Route path="/account">
                    <AccountPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
