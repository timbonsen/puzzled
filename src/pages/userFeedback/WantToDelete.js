import PageHeader from "../../components/headers/PageHeader";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";
import LinkButton from "../../components/buttons/linkButton/linkButton";
import https from "../../http-common";

function WantToDelete() {
    const { user: { username }, logout } = useContext(AuthContext);
    const history = useHistory();

    async function deleteAccount() {
        try {
            await https.delete(`/users/${username}`);
            history.push("/feedback/deleted");
            logout();
        }
        catch(e) {
            console.error(e);
        }
    }

    return (
        <>
            <PageHeader title="weet je het zeker?"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <LinkButton link="/account" title="ga terug" />
                    <button className="deleteButton" type="button" onClick={deleteAccount}>verwijder account</button>
                </div>
            </div>
        </>
    )
}

export default WantToDelete;