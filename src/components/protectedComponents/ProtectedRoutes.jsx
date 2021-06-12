import React, { useState, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import TopBar from "./likeeDashboard/TopBar";
import Landing from "../publicComponents/LandingPage/Landing";
import Login from "../publicComponents/Authentication/Login";
import SnackInfo from "../../utils/SnackInfo";
import Footer from "../publicComponents/Footer/Footer";
import PostDashboard from "./likeeDashboard";

/**
 * @description Routing handler for dashboard components
 * @param {*} { props }
 */

const ProtectedRoutes = ({ location }) => {
    const [snackInfo, setSnackInfo] = useState({
        open: false,
        message: '',
        vertical: 'bottom',
        horizontal: 'left',
        severity: 'info',
        autoHideDuration: 5000,
    });

    const isBrandPage =
        location.pathname === '/' ||
        location.pathname === '/dashboard';

    const isUserPage =
        location.pathname === '/user/login';

    return (
        <Fragment>
            {isUserPage ? (
                <Fragment>
                    <div className="unprotected-routes-wrapper">
                        <TopBar />
                        <div className="content-section">
                            <Switch>
                                <Route exact path="/user/login" render={() => <Login />} />

                            </Switch>
                        </div>
                    </div>
                </Fragment>
            ) : isBrandPage === true ? (
                <div className="unprotected-routes-wrapper">
                    <TopBar />
                    <div className="content-section" id="content-section">
                        <div id="main-scrollable">
                            <Switch>
                                <Route exact path="/" render={() => <Landing />} />
                                <Route exact path="/dashboard" render={() => <PostDashboard />} />
                            </Switch>
                        </div>
                    </div>
                    <Footer/>
                </div>
            ) : (
                <Switch>
                    <Route
                        exact
                        path="/:dashboard_route"
                        render={() => (
                            <PostDashboard/>
                        )}
                    />
                    <Redirect to='/'/>
                </Switch>
            )}

            <SnackInfo
                snackInfo={snackInfo}
                handleClose={() =>
                    setSnackInfo(snackInfo => ({ ...snackInfo, open: false }))
                }
            />
        </Fragment>
    );
};

export default withRouter(ProtectedRoutes);
