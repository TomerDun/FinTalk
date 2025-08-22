import type { ReactNode } from "react"
import { profileStore } from "../../stores/ProfileStore"
import { Navigate, Route } from "react-router"

export function ProtectedRoute({ children }: ReactNode) {
    if (!profileStore.loggedInUser)
        return <Navigate to="/login" replace />;

    return <>{children}</>;
};