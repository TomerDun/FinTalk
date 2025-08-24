import { type ReactNode } from "react";
import { Navigate } from "react-router";
import { profileStore } from "../../stores/ProfileStore";
import { observer } from "mobx-react-lite";

type ProtectedRouteProps = {
    children: ReactNode
}

function ProtectedRoute({ children }: ProtectedRouteProps) {

    // console.log('protected page');

    // // Show loading while checking authentication
    // if (profileStore.isCheckingAuth) {
    //     return (
    //         <div style={{
    //             display: 'flex',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             height: '50vh'
    //         }}>
    //             <div>Loading...</div>
    //         </div>
    //     );
    // }

    // Redirect to login if not authenticated
    if (!profileStore.activeProfile) {
        return <Navigate to="/login" replace />;
    }

    // Render protected content
    return <>{children}</>;
};

export default observer(ProtectedRoute)