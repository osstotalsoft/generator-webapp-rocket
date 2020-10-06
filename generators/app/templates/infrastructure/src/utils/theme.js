import { env } from './env'
import { theme as defaultTheme } from '@bit/totalsoft.react-mui.themes.default-theme'
import { theme as greenTheme } from '@bit/totalsoft.react-mui.themes.green-theme'
import { theme as blueTheme } from '@bit/totalsoft.react-mui.themes.blue-theme'
import { theme as orangeTheme } from '@bit/totalsoft.react-mui.themes.orange-theme'
import { theme as redTheme } from '@bit/totalsoft.react-mui.themes.red-theme'

import { createMuiTheme } from '@material-ui/core'

const getTheme = () => {
  const subDomain = env.REACT_APP_THEME
  switch (subDomain) {
    case 'green':
      return greenTheme
    case 'blue':
      return blueTheme
    case 'orange':
      return orangeTheme
    case 'red':
      return redTheme
    default:
      return defaultTheme
  }

const themeData = getTheme()
export const theme = createMuiTheme(themeData)
export const logo = themeData.logo
