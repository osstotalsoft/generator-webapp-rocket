import { ApolloProvider } from '@apollo/client';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthenticationContext } from '@axa-fr/react-oidc-context';

import { client } from './client';

export function AuthApolloProvider({ children }) {
    const oidc = useContext(AuthenticationContext);

    if (oidc.isLoading) {
        return (<>auth loading</>)
    }

    return (
        <ApolloProvider client={client(oidc.oidcUser)}>
            {children}
        </ApolloProvider>)
}

AuthApolloProvider.propTypes = {
    children: PropTypes.element.isRequired
}

export default AuthApolloProvider;