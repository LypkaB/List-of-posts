import React from 'react';
import './post-list-item.scss';

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello world
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <i className="fa fa-star" aria-hidden="true"/>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fa fa-trash-o" aria-hidden="true"/>
                </button>
                <i className="fa fa-heart" aria-hidden="true"/>
            </div>
        </li>
    )
};

export default PostListItem;
