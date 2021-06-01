import React, { Fragment } from 'react';
import "../../../styles/Landing/Landing.scss";

const Landing = () => {

    return (
        <Fragment>
            <div className="first-landing">
                <div>
                    <div className="landing-services">
                        <h1>Create Posts, View, Edit &amp; Delete Posts</h1>
                        <ul>
                            <li><i className="fa fa-check"/> Create a profile for your business</li>
                            <li><i className="fa fa-check"/> Create a profile for your business</li>
                            <li><i className="fa fa-check"/> Create a profile for your business</li>
                            <li><i className="fa fa-check"/> Create a profile for your business</li>
                            <li><i className="fa fa-check"/> Create a profile for your business</li>
                        </ul>
                        <div className="button-section">
                            <div><button>List Posts</button></div>
                            <div><button>Create Posts</button></div>
                        </div>
                    </div>
                </div>
                <div><img src="/images/Landing/brand-pic.jpg" width="90%" alt="brand-pic"/></div>
            </div>
            <div className="second-landing"><h1>Create and List Posts about your Business </h1></div>
        </Fragment>
    );
};

export default Landing;

