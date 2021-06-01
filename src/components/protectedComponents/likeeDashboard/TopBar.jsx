import React, { Fragment} from 'react';
import {withRouter} from "react-router-dom";


const TopBar = ({
    match: {
        params: { dashboard_route },
    },
    history,
    }) => {
    const UnauthenticatedLinks = withRouter(() => {
        return (
            <div className="middle-section">
                <div
                    className={`link ${
                        dashboard_route === undefined || dashboard_route === 'posts'
                            ? 'active'
                            : ''
                    }`}
                    onClick={() => {
                        history.push(`/posts`);
                        document.querySelector('.main-content').scroll({
                            top: 0,
                        });
                    }}
                >
                    <span>Posts</span>
                </div>
                <div
                    className={`link ${
                        dashboard_route === undefined || dashboard_route === 'posts'
                            ? 'active'
                            : ''
                    }`}
                    onClick={() => {
                        history.push(`/posts`);
                        document.querySelector('.main-content').scroll({
                            top: 0,
                        });
                    }}
                >
                    <span>Home</span>
                </div>
                <div
                    className={`link ${
                        dashboard_route === undefined || dashboard_route === 'posts'
                            ? 'active'
                            : ''
                    }`}
                    onClick={() => {
                        history.push(`/posts`);
                        document.querySelector('.main-content').scroll({
                            top: 0,
                        });
                    }}
                >
                    <span>Home</span>
                </div>
            </div>
        )
    })
    const AuthenticatedLinks = withRouter(() => {
        return (
            <div className="middle-section">
                <div>Home</div>
            </div>
        )
    })
    return (
        <Fragment>
            <div className="topbar">
                <div><h2>Post App</h2></div>
                <div><UnauthenticatedLinks/></div>
                <div>ddd</div>
            </div>
        </Fragment>
    )
};

export default withRouter(TopBar);