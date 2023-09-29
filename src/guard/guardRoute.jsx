import { PublicRoutes, PrivateRoutes } from "../constants-definitions/indexConstantDefinitions";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

const GuardRoute = ({privateValidation}) => {
    const { user } = useSelector((state) => state.auth);

    return user !== null ? (
        privateValidation ? (
            PrivateValidationFragment
        ): (
            PublicValidationFragment
        )
    ): (
        <Navigate to={PublicRoutes.SIGNIN} />
    )
}

export default GuardRoute;