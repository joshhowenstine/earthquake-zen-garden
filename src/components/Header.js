import React from 'react';
import Logo from '../assets/images/logo.svg';

import {
    useSelector
} from 'react-redux';

import {
    Link
} from "react-router-dom";

export default function() {
    const siteTitle = useSelector(state => state.siteData?.site?.title);
    const userFirstName = useSelector(state => state.siteData?.profile?.firstName);

    return (
        <header className="main-header">
            <div>
                <Link to="/" className="home-link"><Logo /></Link>
            </div>
            <div>
                <h1>{siteTitle}</h1>
            </div>
            <div>
                <Link to="/profile">Welcome, {userFirstName}</Link>
            </div>
        </header>
    );
}