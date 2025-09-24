import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../../Layout/UserLayout";
import ErrorLayout from "../../Layout/ErrorLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import UserProtection from "./UserProtection";
import DietPlan from "../Pages/DietPlan";
import Home from "../Pages/Home";
import WorkoutPlan from "../Pages/WorkoutPlan";''
import Dashboard from "../Pages/DashBoard";
import Profile from "../Pages/Profile";
import AITrainer from "../Pages/AiTrainer";
import Notification from "../Pages/Notification";
import WorkoutDetails from "../Pages/WorkoutDetails";
import DietPlanDetails from "../Pages/DietPlanDetails";
import Settings from "../Pages/Settings";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "user",
                element: <UserProtection />,
                children: [
                    {
                        path: "diet",
                        element: <DietPlan />
                    },
                    {
                        path: "workout",
                        element: <WorkoutPlan />
                    },
                    {
                        path: "settings",
                        element: <Settings/>
                    },
                    {
                        path: "dash-board",
                        element: <Dashboard />
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    },
                    {
                        path: "ai",
                        element: <AITrainer />
                    },
                    {
                        path: "notification",
                        element: <Notification />
                    },
                    {
                        path: "workout-details",
                        element: <WorkoutDetails />
                    },
                    {
                        path: "diet-details",
                        element: <DietPlanDetails/>
                    }

                ]

            }
        ]

    },
]);