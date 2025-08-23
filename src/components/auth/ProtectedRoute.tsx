import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { profileStore } from "../../stores/ProfileStore";

type ProtectedRouteProps = {
    children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    if (!profileStore.loggedInUser)
        return <Navigate to="/login" replace />;

    return <>{children}</>;
};