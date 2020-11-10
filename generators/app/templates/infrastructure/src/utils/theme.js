import { env } from './env'
import { theme as defaultTheme } from '@bit/totalsoft_oss.react-mui.kit.coredefault-theme'
import { theme as greenTheme } from '@bit/totalsoft_oss.react-mui.kit.coregreen-theme'
import { theme as blueTheme } from '@bit/totalsoft_oss.react-mui.kit.coreblue-theme'
import { theme as orangeTheme } from '@bit/totalsoft_oss.react-mui.kit.coreorange-theme'
import { theme as redTheme } from '@bit/totalsoft_oss.react-mui.kit.corered-theme'

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
}

const themeData = getTheme()
export const theme = createMuiTheme(themeData)
export const logo = themeData.logo
