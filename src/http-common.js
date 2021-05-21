import axios from "axios";

const jwtToken = localStorage.getItem('token');

export default axios.create({

    baseURL: `https://localhost:8443`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`
    }
})
