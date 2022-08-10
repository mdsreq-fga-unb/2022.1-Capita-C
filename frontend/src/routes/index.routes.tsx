import React, {useContext} from "react";
import SignRoutes from "./SignRoutes";
import AuthContext from "../contexts/auth";
import OtherRoutes from "./OtherRoutes";

export const Routes = () => {
    const { signed } = useContext(AuthContext);
    console.log(signed)
    return signed ? <OtherRoutes /> : <SignRoutes />;
}
