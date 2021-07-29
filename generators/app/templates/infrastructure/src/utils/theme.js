import { env } from './env'
import { theme as defaultTheme } from '@bit/totalsoft_oss.react-mui.themes.default-theme'
import { theme as greenTheme } from '@bit/totalsoft_oss.react-mui.themes.green-theme'
import { theme as blueTheme } from '@bit/totalsoft_oss.react-mui.themes.blue-theme'
import { theme as orangeTheme } from '@bit/totalsoft_oss.react-mui.themes.orange-theme'
import { theme as redTheme } from '@bit/totalsoft_oss.react-mui.themes.red-theme'
import { theme as vividOrangeTheme } from '@bit/totalsoft_oss.react-mui.themes.vivid-orange-theme'

import { createTheme } from '@material-ui/core'

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
    case 'vividOrange':
      return vividOrangeTheme
    default:
      return defaultTheme
  }
}

const themeData = getTheme()
export const theme = createTheme(themeData)
export const logo = themeData.logo
