import { env } from './env'
import { theme as defaultTheme } from './themes/defaultTheme';
import { theme as greenTheme } from './themes/greenTheme';
import { theme as blueTheme } from './themes/blueTheme';
import { theme as orangeTheme } from './themes/orangeTheme';
import { theme as redTheme } from './themes/redTheme';

import { createMuiTheme } from '@material-ui/core';

const getTheme = () => {
    const subDomain = env.REACT_APP_THEME
    switch (subDomain) {
        case 'green':
            return greenTheme;
        case 'blue':
            return blueTheme;
        case 'orange':
            return orangeTheme;
        case 'red':
            return redTheme;
        default:
            return defaultTheme;
    }
}

const getOfflineThemeCss = () => {
    const subDomain = env.REACT_APP_THEME;
    switch (subDomain) {
        case 'green':
            return require('./themes/css/greenOfflineTheme.css');
        case 'blue':
            return require('./themes/css/blueOfflineTheme.css');
        case 'orange':
            return require('./themes/css/orangeOfflineTheme.css');
        case 'red':
            return require('./themes/css/redOfflineTheme.css');
        default:
            return require('./themes/css/defaultOfflineTheme.css');
    }
}

const themeData = getTheme();
export const offlineThemeCss = getOfflineThemeCss();
export const theme = createMuiTheme(themeData);
export const logo = themeData.logo;