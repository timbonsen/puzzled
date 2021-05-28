import React from 'react';
import TopMenu from './components/topmenu/TopMenu';
import SearchPage from './pages/search/Search';
import HomePage from './pages/home/Home';
import UploadPage from './pages/upload/Upload';
import AccountPage from "./pages/account/Account";
import SignInPage from "./pages/signin/SignIn";
import SignUpPage from "./pages/signup/Signup";
import './App.css';
import './css/text.css';
import './css/messages.css';
import './css/standardPage.css';
import './css/link.css';
import './css/paragraph.css';
import './css/label.css';
import { Route, Switch } from "react-router-dom";
import PuzzlePage from "./pages/puzzle/PuzzlePage";
import ExchangeProposal from "./pages/exchange/ExchangeProposal";
import ExchangeAccepted from "./pages/exchange/ExchangeAccepted";
import RegisterAddress from "./pages/address/RegisterAddress";
import UserFeedback from "./pages/userFeedback/UserFeedback";
import PrivateRoute from "./components/privateRoutes/PrivateRoute";
import WantToDelete from "./pages/userFeedback/WantToDelete";
import PrivateAdminRoute from "./components/privateRoutes/PrivateAdminRoute";
import AdminPage from "./pages/admin/AdminPage";

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
                    <PrivateRoute
                        page={<UploadPage />}
                        />
                </Route>
                <Route path="/admin">
                    <PrivateAdminRoute
                        page={<AdminPage />}
                        />
                </Route>
                <Route path="/account">
                    <AccountPage/>
                </Route>
                <Route path="/puzzle/:id">
                    <PuzzlePage />
                </Route>
                <Route exact path="/exchange/proposal">
                    <PrivateRoute
                        page={<ExchangeProposal />}
                        />
                </Route>
                <Route exact path="/exchange/accepted">
                    <PrivateRoute
                        page={<ExchangeAccepted />}
                    />
                </Route>
                <Route path="/address">
                    <PrivateRoute
                        page={<RegisterAddress />}
                        />
                </Route>
                <Route path="/delete-account">
                    <PrivateRoute
                        page={<WantToDelete />}
                    />
                </Route>
                <Route exact path="/feedback/logout">
                    <UserFeedback
                        title="u bent succesvol uitgelogd"
                    text="U word nu doorgestuurd naar de Homepage"/>
                </Route>
                <Route exact path="/feedback/update">
                    <UserFeedback
                        title="uw gegevens zijn succesvol geupdate"
                        text="U word nu doorgestuurd naar Uw account"/>
                </Route>
                <Route exact path="/feedback/login">
                    <UserFeedback
                        title="U bent succesvol ingelogd"
                        text="U word nu doorgestuurd naar Uw account"/>
                </Route>
                <Route exact path="/feedback/address">
                    <UserFeedback
                        title="Uw adres is toegevoegd"
                        text="U word nu doorgestuurd naar Uw account"/>
                </Route>
                <Route exact path="/feedback/register">
                    <UserFeedback
                        title="Uw account is succesvol aangemaakt"
                        text="U word nu doorgestuurd naar de Login pagina"/>
                </Route>
                <Route exact path="/feedback/deleted">
                    <UserFeedback
                        title="Uw account is succesvol verwijderd"
                        text="U word nu doorgestuurd naar de Homepage"/>
                </Route>
                <Route exact path="/feedback/puzzle-upload">
                    <UserFeedback
                        title="Uw puzzel is succesvol toegevoegd aan Uw account"
                        text="U word nu doorgestuurd naar Uw account"/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
