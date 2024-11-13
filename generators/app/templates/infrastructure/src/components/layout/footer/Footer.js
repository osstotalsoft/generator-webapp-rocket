import { useFooter } from 'providers/AreasProvider'
import { AppBar, Toolbar } from './FooterStyle'

function Footer() {
  const [footer] = useFooter()

  if (!footer) return null

  return (
    <AppBar position='sticky' color='transparent'>
      <Toolbar color='transparent'>{footer}</Toolbar>
    </AppBar>
  )
}

export default Footer
