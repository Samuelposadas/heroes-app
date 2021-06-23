import AppRouter from "./Routes/AppRouter"
import {AuthContext} from "./components/auth/AuthContext"
import { useEffect, useReducer } from "react"
import authReducer from "./components/auth/authReducer"

const init = ()=>{
    return JSON.parse(localStorage.getItem("user")) || {logged : false};
}

const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

        useEffect(() => {
            localStorage.setItem("user" , JSON.stringify(user))

        }, [user])

    return (

        <AuthContext.Provider value ={{user , dispatch}}>

            <AppRouter />
        </AuthContext.Provider>
    )
}

export default HeroesApp
