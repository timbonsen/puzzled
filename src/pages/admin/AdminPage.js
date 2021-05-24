import PageHeader from "../../components/PageHeader";
import {useEffect, useState} from "react";
import https from "../../http-common"

function AdminPage() {

    const [userList, setUserList] = useState("Hier komen de usernames");

    async function fetchUsers() {
        try {
            const result = await https.get(`admin`);
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(fetchUsers,[]);

    return (
        <>
            <PageHeader title="admin" />
            <div className="pageContainer">
                <div className="pageContent">
                    {userList}
                </div>
            </div>
        </>
    )
}

export default AdminPage;