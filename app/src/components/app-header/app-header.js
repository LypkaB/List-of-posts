import React from 'react';
import './app-header.scss';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Lypka Bohdan</h1>
            <h2>{allPosts} posts, of which liked {liked}</h2>
        </div>
    )
};

export default AppHeader;
