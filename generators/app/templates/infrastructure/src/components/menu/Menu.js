import { useCallback<%_ if (withRights){ _%>, useMemo <%_ } _%>} from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import MenuItem from './MenuItem'
import CollapsibleMenuItem from './CollapsibleMenuItem'
import { List } from './MenuStyle'
<%_ if (withRights) { _%>
  import { emptyArray } from 'utils/constants'
  import { useOidcUser } from '@axa-fr/react-oidc'
  import { useUserData } from 'hooks/rights'
  import menuConfig from 'constants/menuConfig'
  import { clone, filter, forEach, isEmpty, map } from 'ramda'
  import { intersect, getOidcConfigName } from 'utils/functions'
<%_ }else{ _%>
  import menuItems from 'constants/menuConfig'
  <%_ } _%>

<%_ if (withRights) { _%>
const filterRecursive = (item, userRoles = [], userRights = []) => {
  const itemClone = clone(item)

  if (itemClone.children) {
    itemClone.children = filter(
      child => child,
      map(c => filterRecursive(c), itemClone.children)
    )
  }

  const allow =
    isEmpty(item?.rights) && isEmpty(item?.roles)
      ? true
      : isEmpty(item?.rights)
      ? intersect(userRoles, item?.roles)
      : intersect(userRights, item?.rights) && (isEmpty(item?.roles) || intersect(userRoles, item?.roles))

  if (allow || (itemClone.children && itemClone.children?.length > 0)) return itemClone

  return null
}

export const filterMenuItems = (items, userRoles = [], userRights = []) => {
  const filteredItems = []

  forEach(item => {
    const filteredItem = filterRecursive(item, userRoles, userRights)
    if (filteredItem) filteredItems?.push(filteredItem)
  }, items)

  return filteredItems
}
<%_ } _%>

function Menu({ drawerOpen, withGradient  }) {
  const location = useLocation()
  <%_ if (withRights){ _%>
  const { oidcUser } = useOidcUser(getOidcConfigName())
  const userRoles = oidcUser?.profile?.role || emptyArray
  <%_ } _%>
  const activeRoute = useCallback(routeName => location.pathname.indexOf(routeName) > -1, [location.pathname])
  <%_ if (withRights){ _%>
  const { userData, loading } = useUserData({ withRights: true })
  const userRights = userData?.rights || emptyArray

  const menuItems = useMemo(() => filterMenuItems(menuConfig, userRoles, userRights), [userRights, userRoles])

  if (loading || !menuItems) return null
  <%_ } _%>

  return (
    <nav>
      <List>
        {menuItems.map((menu, key) => {
          const menuItemProps = { menu, drawerOpen, activeRoute, withGradient }
          return menu.children ? <CollapsibleMenuItem key={key} {...menuItemProps} /> : <MenuItem key={key} {...menuItemProps} />
        })}
      </List>
    </nav>
  )
}

Menu.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  withGradient: PropTypes.bool.isRequired
}

export default Menu
