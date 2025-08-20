import { Route, Routes } from "react-router";
import { Box } from "@mantine/core";
import { Dashboard } from "../../pages/Dashboard";
import { Login } from "../auth/Login/Login";
import { Register } from "../auth/Register/Register";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";

export function Routing() {
    return (
        <Box flex={1}>
            <Routes>
                {/* feed - will change to the home page address*/}
                <Route path="/feed" />
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* 404 */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Box>
    );
}
