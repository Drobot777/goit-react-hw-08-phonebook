import { login_Route } from "contactRoute/routes"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectUserAuthentication } from "redux/authReduxe"

export const PrivateRoute =({children,redirecTo=login_Route})=>{
    const autenticated = useSelector(selectUserAuthentication)
    return autenticated?children:<Navigate to={redirecTo} replace/>
    }