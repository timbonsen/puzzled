import React, {createContext, /*useContext, useEffect,*/ useState} from "react";
import {useHistory} from "react-router-dom";
import jwt_Decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const history = useHistory();
    const [authState, setAuthState] = useState({
        user: null,
        status: 'done'
    })

    async function fetchUserData(jwtToken) {
        const decoded = jwt_Decode(jwtToken);
        const username = decoded.sub;

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
            if (result.data.address != null) {
                setAuthState({
                    user: {
                        username: result.data.username,
                        email: result.data.email,
                        firstname: result.data.firstname,
                        fullname: result.data.fullname,
                        lastname: result.data.lastname,
                        address: {
                            streetName: result.data.address.streetName,
                            houseNumber: result.data.address.houseNumber,
                            postalCode: result.data.address.postalCode,
                            city: result.data.address.city,
                            country: result.data.address.country
                        }
                    },
                    status: 'done'
                })
            }
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    firstname: result.data.firstname,
                    fullname: result.data.fullname,
                    lastname: result.data.lastname,
                    address: result.data.address
                },
                status: 'done'
            })

        } catch (e) {
            console.error(e);
        }
    }

    /*useEffect(() => {
        const token = localStorage.getItem('token');

        if (token !== undefined && authState.user === null) {
            fetchUserData(token);
        } else {
            setAuthState({
                status: 'done'
            })
        }
    }, [authState])*/

    function login(jwtToken) {
        localStorage.setItem('token', jwtToken);

        fetchUserData(jwtToken);
        setTimeout(() => {
            history.push("/account");
        }, 1000);
    }

    function logout() {
        localStorage.removeItem('token')

        setAuthState({
            user: null,
            status: 'done'
        })
        history.push("/logged-out");
        setTimeout(() => {
            history.push("/");
        },2000);
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
