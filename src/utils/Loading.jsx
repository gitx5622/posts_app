import React from 'react';
import ReactLoading from 'react-loading';
import "../styles/Loading/Loading.scss";

const Loading = ({type, color}) => {
    return (
        <div>
            <center>
                <ReactLoading type={type} color={color} height={'5%'} width={'5%'} />
            </center>
        </div>
    );
};

export default Loading;