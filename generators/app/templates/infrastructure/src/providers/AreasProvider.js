import React, { createContext, useState, useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

export const AreasWrapper = ({ children }) => (
    <HeaderProvider>
        <FooterProvider>
            {children}
        </FooterProvider>
    </HeaderProvider>);
AreasWrapper.propTypes = { children: PropTypes.element.isRequired }

export const HeaderContext = createContext();
export const HeaderProvider = ({ children }) => (
    <HeaderContext.Provider value={useState(null)}>
        {children}
    </HeaderContext.Provider>
);
HeaderProvider.propTypes = { children: PropTypes.element.isRequired }
export const useHeader = (initialHeader) => {
    const [get, set] = useContext(HeaderContext);

    useLayoutEffect(() => {
        if (!initialHeader) {
            return;
        }

        set(initialHeader);
        return () => set(null);
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return [get, set];
}

export const FooterContext = createContext();
export const FooterProvider = ({ children }) => (
    <FooterContext.Provider value={useState(null)}>
        {children}
    </FooterContext.Provider>
);
FooterProvider.propTypes = { children: PropTypes.element.isRequired }
export const useFooter = (initialFooter) => {
    const [get, set] = useContext(FooterContext);

    useLayoutEffect(() => {
        if (!initialFooter) {
            return;
        }

        set(initialFooter);
        return () => set(null);
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return [get, set];
}