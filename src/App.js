import React from 'react';
import TopMenu from './components/topmenu/TopMenu';
import SearchPage from './pages/search/Search';
import HomePage from './pages/home/Home';
import UploadPage from './pages/upload/Upload';
import AccountPage from "./pages/account/Account";
import SignInPage from "./pages/signin/SignIn";
import SignUpPage from "./pages/signup/Signup";
import './App.css';
import './pages/upload/Upload.css';
import { Route, Switch } from "react-router-dom";
import PuzzlePage from "./pages/puzzle/PuzzlePage";
import ExchangeProposal from "./pages/exchange/ExchangeProposal";
import ExchangeAccepted from "./pages/exchange/ExchangeAccepted";
import RegisterAddress from "./pages/registerAddress/RegisterAddress";
import HasLoggedOut from "./pages/hasLoggedOut/HasLoggedOut";


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
                <Route exact path="/exchange/proposal">
                    <ExchangeProposal />
                </Route>
                <Route exact path="/exchange/accepted">
                    <ExchangeAccepted />
                </Route>
                <Route path="/register-address">
                    <RegisterAddress />
                </Route>
                <Route path="/logged-out">
                    <HasLoggedOut />
                </Route>
            </Switch>
        </>
    );
}

export default App;
