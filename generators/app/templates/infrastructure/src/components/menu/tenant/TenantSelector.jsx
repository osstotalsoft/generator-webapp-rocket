import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { PersonOutline } from '@mui/icons-material'
import { gql } from '@apollo/client'
import { CollapseItem, ListItem, Select, Typography } from './TenantStyle'

export const MY_TENANTS_QUERY = gql`
  query {
    myTenants {
      externalId
      name
      code
      tier
      isActive
      tenant {
        id
        name
        code
      }
    }
  }
`

function EmptyElement() {
  return <span></span>
}

const TenantSelector = ({ tenant, changeTenant, tenants, drawerOpen }) => {
  const handleChange = useCallback(
    ({ target: { value } }) => {
      const newTenant = tenants.find(t => t.code.toUpperCase() === value.toUpperCase())
      changeTenant(newTenant)
    },
    [changeTenant, tenants]
  )

  const iconComponent = !drawerOpen ? { IconComponent: EmptyElement } : {}

  return (
    <Select value={tenant?.code} onChange={handleChange} {...iconComponent} size='small' variant='standard' drawerOpen={drawerOpen}>
      {tenants.map(t => (
        <ListItem value={t.code} key={t.externalId}>
          <CollapseItem>
            <PersonOutline />
          </CollapseItem>
          {drawerOpen && <Typography>{t.name}</Typography>}
        </ListItem>
      ))}
    </Select>
  )
}

TenantSelector.propTypes = {
  changeTenant: PropTypes.func.isRequired,
  tenant: PropTypes.object,
  tenants: PropTypes.array.isRequired,
  drawerOpen: PropTypes.bool.isRequired
}

export default TenantSelector
