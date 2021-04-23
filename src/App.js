import React from 'react';
import TopMenu from './components/TopMenu';
import SearchPage from './pages/search/Search';
import HomePage from './pages/home/Home';
import UploadPage from './pages/upload/Upload';
import IsLoggedIn from "./components/functions/IsLoggedIn";
import AccountPage from "./pages/account/Account";
import SignInPage from "./pages/signin/SignIn";
import SignUpPage from "./pages/signup/Signup";
import './App.css';
import './pages/upload/Upload.css';
import { Route, Switch } from "react-router-dom";
import PuzzlePage from "./pages/puzzle/Puzzle";


function App() {
    return (
        <>
            <TopMenu/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/signin">
                    <SignInPage/>
                </Route>
                <Route exact path="/signup">
                    <SignUpPage/>
                </Route>
                <Route exact path="/search">
                    <SearchPage/>
                </Route>
                <Route path="/upload">
                    <UploadPage/>
                </Route>
                <Route path="/account">
                    <AccountPage/>
                </Route>
                <Route path="/puzzle">
                    <PuzzlePage/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
