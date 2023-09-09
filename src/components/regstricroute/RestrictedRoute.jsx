import { home_Route } from "contactRoute/routes";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserAuthentication } from "redux/authReduxe";

export const RestrictedRoute =({children,redirecTo=home_Route})=>{
const autenticated = useSelector(selectUserAuthentication)
return autenticated?<Navigate to={redirecTo} replace/>:children
}