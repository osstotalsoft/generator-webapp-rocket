import 'url-search-params-polyfill';

import React from 'react';
import { createRoot } from 'react-dom/client'
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import ThemeProvider from 'providers/ThemeProvider'
import 'utils/i18n';
import './assets/css/index.css';
import "moment/locale/ro";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { AreasWrapper } from './providers/AreasProvider';

import AuthApolloProvider from 'apollo/AuthApolloProvider';
<%_ if (withMultiTenancy) { _%>
import AuthProvider from 'providers/TenantAuthenticationProvider'; 
<%_} else {_%>
import AuthProvider from 'providers/AuthenticationProvider'; 
<%_}_%>

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <AreasWrapper>
        <AuthProvider>
            <AuthApolloProvider>
                <ThemeProvider>
                    <BrowserRouter>{routes}</BrowserRouter>
                </ThemeProvider>
            </AuthApolloProvider>
        </AuthProvider>
    </AreasWrapper>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
