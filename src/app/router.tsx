import { Route, Routes } from "react-router";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Home</div>} />
        </Routes>
    );
};

export default AppRouter;