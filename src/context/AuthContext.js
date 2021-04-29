import React, {createContext, useContext, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import jwt_Decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({})

function AuthContextProvider({ children }) {
    const history = useHistory();
    const [authState, setAuthState] = useState({
        user: null,
        status: 'done'
    })

    async function fetchUserData(decoded, jwtToken) {
        console.log(jwtToken)
        const username = decoded.username;

        setAuthState({
            user: null,
            status: 'pending'
        })

        try {
            const result = await axios.get(`https://localhost:8443/users/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            console.log(result);
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email
                },
                status: 'done'
            })
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token !== undefined && authState.user === null) {

/*            fetchUserData(token);*/

        } else {
            setAuthState({
                user: null,
                status: 'done'
            })
        }
    }, [authState])

    function login(jwtToken) {
        localStorage.setItem('token', jwtToken);
        const decoded = jwt_Decode(jwtToken);
        console.log(decoded)

        /*fetchUserData(decoded, jwtToken);*/

        /*history.push("/account");*/
    }

    function logout() {
        localStorage.removeItem('token')

        setAuthState({
            user: null,
            status: 'done'
        })
    }

    const data = {
        ...authState,
        login: login,
        logout: logout,

    }

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'done'
                ? children
                : <p>Loading...</p>
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
