import React from 'react';
import { Routes, Route } from "react-router-dom";

import {
    MainPage,
    GoodsPage,
    PhotoReviewPage,
    SupportPage,
    ProductPage
} from '../pages/index';




const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/support" element={<SupportPage />} />
        </Routes>
    );
}

export default Router;