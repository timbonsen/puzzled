import React, {createContext, useContext, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import jwt_Decode from "jwt-decode";
import axios from "axios";

/*
export const AuthContext = createContext({})

function AuthContextProvider({ children }) {
    const history = useHistory();
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending'
    })

    async function fetchUserData(jwtToken) {

        const decoded = jwt_Decode(jwtToken);
        const userId = decoded.sub;

        setAuthState({
            user: null,
            status: 'done'
        })

        /!*try {
            const result = await axios.get(`http://localhost:3000/600/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            console.log(result);
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id
                },
                status: 'done'
            })
        } catch (e) {
            console.error(e);
        }*!/
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token !== undefined && authState.user === null) {

            fetchUserData(token);

        } else {
            setAuthState({
                user: null,
                status: 'done'
            })
        }
    }, [])

    async function login(jwtToken) {
        localStorage.setItem('token', jwtToken);

        fetchUserData(jwtToken);

        history.push("/account");
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

export default AuthContextProvider;*/
