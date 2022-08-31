import React, {useContext} from "react";
import SignRoutes from "./SignRoutes";
import AuthContext from "../contexts/auth";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

export const Routes = () => {
    const { signed, admin } = useContext(AuthContext);
    if (signed){
        return admin ? <AdminRoutes/> : <UserRoutes/>
    }else{
        return <SignRoutes/>
    }
}
