import { useCurrentUser } from "../Utils/Hooks/useCurrentUser";
import { Navigate,Outlet} from "react-router-dom"

export function RoutesApp () {
    const {logined , roleAdmin} = useCurrentUser();

    const PublicRoute = () => {
        return logined ? <Navigate to="/index" /> :<Outlet />;
    }
    
    const PrivateRoute = () => {
        return logined ? <Outlet /> : <Navigate to="/" />;
    }

    const PrivetRouteAdmin = () => {
        return logined && roleAdmin ? <Outlet/> : <Navigate to="/" />
      }

    return {
        PublicRoute,
        PrivateRoute,
        PrivetRouteAdmin
    }
} 