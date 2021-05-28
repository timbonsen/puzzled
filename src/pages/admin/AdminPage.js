import PageHeader from "../../components/headers/PageHeader";
import {useEffect} from "react";
import https from "../../http-common";
import './admin.css';

function AdminPage() {

    async function fetchUsers() {
        try {
            const result = await https.get(`/admin/all-users`);
            console.log(result);
            for (const user of result.data) {
                const container = document.getElementById("userList");
                const item = document.createElement("li");
                item.setAttribute("class", "adminUserList");
                item.textContent = user.toString();
                container.appendChild(item);
            }
        } catch (e) {
            console.error(e);
            console.dir(e);
        }
    }
    useEffect(fetchUsers,[]);

    return (
        <>
            <PageHeader title="admin" />
            <div className="pageContainer">
                <div className="pageContent">
                    <h3>Alle gebruikers van Puzzled</h3>
                    <ul id="userList" className="userList">
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminPage;