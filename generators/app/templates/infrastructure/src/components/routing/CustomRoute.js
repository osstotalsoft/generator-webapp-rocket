import React, { useMemo } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useReactOidc, withOidcSecure } from '@axa-fr/react-oidc-context'
import { emptyArray } from 'utils/constants'
import { isEmpty } from 'ramda'
import { Forbidden } from '@bit/totalsoft_oss.react-mui.kit.core'
import { intersect } from 'utils/functions'

function PrivateRoute({ component: Component, roles, exact, path }) {
  const SecuredComponent = useMemo(() => withOidcSecure(Component), [Component])

  const { oidcUser } = useReactOidc()
  const userRoles = oidcUser?.profile?.role || emptyArray

  let allow = false
  if (isEmpty(roles) && oidcUser) {
    allow = true
  } else {
    allow = intersect(userRoles, roles) || !oidcUser
  }

  return useMemo(() => {
    return <Route exact={exact} path={path} component={allow ? SecuredComponent : Forbidden} />
  }, [exact, path, allow, SecuredComponent])
}

import { makeStyles } from '@material-ui/core'
import mainStyle from 'assets/jss/components/mainStyle'

const useStyles = makeStyles(mainStyle)

function CustomRoute({ isPrivate, fullWidth, ...props }) {
  const classes = useStyles({ fullWidth })

  return <div className={classes.container}>{isPrivate ? <PrivateRoute {...props} /> : <Route {...props} />}</div>
}

CustomRoute.defaultProps = {
  roles: emptyArray,
  isPrivate: true,
  fullWidth: false
}

CustomRoute.propTypes = {
  component: PropTypes.func,
  roles: PropTypes.array,
  exact: PropTypes.bool,
  isPrivate: PropTypes.bool,
  fullWidth: PropTypes.bool,
  path: PropTypes.string
}

export default CustomRoute
