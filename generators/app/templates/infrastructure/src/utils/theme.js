import { env } from './env'
import { defaultTheme, greenTheme, blueTheme, orangeTheme, redTheme, vividOrangeTheme, lightBlueTheme } from '@totalsoft_oss/rocket-ui.themes'

const getTheme = () => {
  switch (env.REACT_APP_THEME) {
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
    case 'lightBlue':
      return lightBlueTheme
    default:
      return defaultTheme
  }
}

export default getTheme
