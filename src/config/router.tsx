import React from 'react';
import { createBrowserRouter } from "../../node_modules/react-router-dom/dist/index";

import {
    MainPage,
    GoodsPage,
    PhotoReviewPage,
    SupportPage,
    ProductPage
} from '../pages/index';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/support",
        element: <SupportPage />
    }
])


export default Router;