import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import DataStore from './dataStore';
import './styles/index.scss';


const theme = createMuiTheme({
    palette: {
        primary: { main: '#E51A23' },
        secondary: { main: '#4b6584' },
    },
    typography: {
        fontFamily: "'Quicksand', sans-serif",
    },
});

window.onload = () => {
    hydrate(
        <Provider store={DataStore}>
            <ThemeProvider theme={theme}>
                <Router>
                    <App />
                </Router>
            </ThemeProvider>
        </Provider>,
        document.getElementById('root')
    );
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
