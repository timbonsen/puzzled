import React, {useContext, useEffect} from "react";
import PageHeader from "../../components/PageHeader";
import LoginHeader from "../../components/LoginHeader";
import {AuthContext} from "../../context/AuthContext";
import image1 from "../../assets/images/KingNotreDam.jpg"
import image2 from "../../assets/images/VanHaasterenBibliotheek.jpg"
import PuzzleCard from "../../components/puzzleCard/PuzzleCard";
import IsAddressPresent from "../../components/functions/IsAddressPresent";
import LinkButton from "../../components/buttons/linkButton/linkButton";
import axios from "axios";

function AccountPage() {

    const jwtToken = localStorage.getItem('token');

    const {user, user: {username}, logout} = useContext(AuthContext);
    console.log(user)

    async function loadPuzzles() {
        try {
            const result = await axios.get(`https://localhost:8443/users/${username}/puzzles`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`
                }
            });
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(loadPuzzles, [])

    if (user === null) {
        return (
            <>
                <PageHeader title="account details"/>
                <div className="pageContainer">
                    <div className="pageContent">
                        <LoginHeader/>
                    </div>
                </div>
            </>
        )
    } else if (user) {
        return (
            <>
                <PageHeader title={`account details ${user.username}`}/>
                <div className="pageContainer">
                    <div className="pageContent">
                        <h3>Mijn gegevens</h3>
                        <p>
                            Naam: {user.fullname}<br/>
                            Emailadres: {user.email}
                        </p>
                        <h3>Mijn adres</h3>
                        <IsAddressPresent/>
                        <h3>Mijn puzzels</h3>
                        <div className="puzzleContainer">
                            <PuzzleCard image={image1} title="puzzel titel"/>
                            <PuzzleCard image={image2} title="puzzel titel"/>
                        </div>
                        <button className="regularButton" type="button" onClick={logout}>LOG UIT</button>
                        <LinkButton link="/delete-account" title="verwijder account"/>
                    </div>
                </div>
            </>
        )
    }
}

export default AccountPage;